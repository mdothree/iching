import { hexagrams, getHexagramByLines } from './services/database.js';
import { firebaseConfig } from './config/firebase.js';

// API Configuration
const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:3005'
  : 'https://iching-api.vercel.app';

let currentLines = [];        // 1 = yang, 0 = yin; index 0 = bottom (first cast) line
let currentValues = [];       // traditional line values 6/7/8/9, same order as currentLines
let currentHexagram = null;   // hexagram currently shown (cast or browsed) — used by Share and Premium
let currentChangingLines = []; // 1-based positions of changing (6 or 9) lines
let isCasting = false;
let castCount = 0;
let isPremium = false;

const elements = {
    questionInput: document.getElementById('question-input'),
    charCount: document.getElementById('char-count'),
    castBtn: document.getElementById('cast-btn'),
    resetBtn: document.getElementById('reset-btn'),
    newReadingBtn: document.getElementById('new-reading-btn'),
    coinsContainer: document.getElementById('coins-container'),
    hexagramDisplay: document.getElementById('hexagram-display'),
    hexagramResult: document.getElementById('hexagram-result'),
    readingSection: document.getElementById('reading-section'),
    hexagramMeanings: document.getElementById('hexagram-meanings'),
    hexagramsGrid: document.getElementById('hexagrams-grid'),
    shareBtn: document.getElementById('share-btn'),
    upgradeBtn: document.getElementById('upgrade-btn'),
    premiumModal: document.getElementById('premium-modal'),
    modalOverlay: document.getElementById('modal-overlay'),
    modalClose: document.getElementById('modal-close'),
    modalSkip: document.getElementById('modal-skip'),
    premiumUpsell: document.getElementById('premium-upsell'),
    startReadingBtn: document.getElementById('start-reading-btn')
};

// Escape text before interpolating into innerHTML (user question, API output).
function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const PENDING_KEY = 'iching_pending_reading';

function init() {
    setupEventListeners();
    renderHexagramsGrid();
    updateProgress();
    restorePendingReading();
}

function setupEventListeners() {
    elements.questionInput?.addEventListener('input', updateCharCount);

    elements.castBtn?.addEventListener('click', startCasting);
    elements.resetBtn?.addEventListener('click', resetCasting);
    elements.newReadingBtn?.addEventListener('click', resetCasting);

    // The coins are the same action as the "Cast Coins" button.
    elements.coinsContainer?.addEventListener('click', (e) => {
        if (e.target.closest('.coin') && !isCasting) {
            startCasting();
        }
    });

    elements.shareBtn?.addEventListener('click', shareReading);
    elements.upgradeBtn?.addEventListener('click', showPremiumModal);
    elements.startReadingBtn?.addEventListener('click', () => {
        document.getElementById('question-section')?.scrollIntoView({ behavior: 'smooth' });
        elements.questionInput?.focus({ preventScroll: true });
    });

    elements.modalOverlay?.addEventListener('click', hidePremiumModal);
    elements.modalClose?.addEventListener('click', hidePremiumModal);
    elements.modalSkip?.addEventListener('click', hidePremiumModal);
}

// After a Stripe redirect the page reloads and the cast is lost. The cast is saved
// before checkout; if a verified credit exists on return, restore it and deliver.
function savePendingReading() {
    if (!currentHexagram) return;
    try {
        sessionStorage.setItem(PENDING_KEY, JSON.stringify({
            values: currentValues,
            hexagramId: currentHexagram.id,
            question: elements.questionInput?.value || ''
        }));
    } catch (e) { /* storage unavailable — user can recast */ }
}

function restorePendingReading() {
    let saved = null;
    try { saved = JSON.parse(sessionStorage.getItem(PENDING_KEY)); } catch (e) { saved = null; }
    if (!saved || !window.PremiumEntitlement?.has()) return;
    try { sessionStorage.removeItem(PENDING_KEY); } catch (e) {}
    if (elements.questionInput) {
        elements.questionInput.value = saved.question || '';
        updateCharCount();
    }
    if (Array.isArray(saved.values) && saved.values.length === 6) {
        currentValues = saved.values;
        currentLines = currentValues.map(v => v % 2);
        castCount = 6;
        updateProgress();
        elements.castBtn.style.display = 'none';
        showHexagram();
    } else if (saved.hexagramId) {
        showQuickHexagram(saved.hexagramId);
    } else {
        return;
    }
    handlePremiumPurchase();
}

function showPremiumModal() {
    if (elements.premiumModal) {
        elements.premiumModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function hidePremiumModal() {
    if (elements.premiumModal) {
        elements.premiumModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function updateCharCount() {
    const length = elements.questionInput.value.length;
    elements.charCount.textContent = length;
}

function updateProgress() {
    for (let i = 1; i <= 6; i++) {
        const progressLine = document.getElementById(`progress${i}`);
        if (progressLine) {
            if (i <= castCount) {
                progressLine.classList.add('active');
            } else {
                progressLine.classList.remove('active');
            }
        }
    }
}

async function startCasting() {
    if (isCasting) return;
    
    currentLines = [];
    currentValues = [];
    castCount = 0;
    isCasting = true;
    elements.castBtn.style.display = 'none';
    elements.resetBtn.style.display = 'none';
    resetCoins();
    
    await castSixLines();
    
    isCasting = false;
    showHexagram();
}

async function castSixLines() {
    for (let i = 0; i < 6; i++) {
        castCount = i + 1;
        updateProgress();
        
        await castSingleLine();
        
        if (i < 5) {
            await delay(800);
        }
    }
}

async function castSingleLine() {
    return new Promise((resolve) => {
        const coins = [
            document.getElementById('coin1'),
            document.getElementById('coin2'),
            document.getElementById('coin3')
        ];
        
        const results = [];
        
        coins.forEach((coin, index) => {
            setTimeout(() => {
                flipCoin(coin).then(result => {
                    results.push(result);
                    
                    if (results.length === 3) {
                        // Three-coin method: heads = 3, tails = 2, so the sum is 6-9.
                        // 6 = old yin (changing), 7 = young yang, 8 = young yin, 9 = old yang (changing).
                        const sum = results.reduce((a, b) => a + b, 0);
                        currentValues.push(sum);
                        currentLines.push(sum % 2); // odd (7, 9) = yang
                        resolve();
                    }
                });
            }, index * 200);
        });
    });
}

function flipCoin(coin) {
    return new Promise((resolve) => {
        const isHeads = Math.random() > 0.5;
        const finalValue = isHeads ? 3 : 2;
        
        coin.style.transform = 'rotateX(0deg)';
        coin.style.transition = 'none';
        
        let rotations = 0;
        const maxRotations = 3;
        const rotationDuration = 150;
        
        const animate = () => {
            rotations++;
            const flipValue = rotations % 2 === 1 ? 180 : 0;
            coin.style.transform = `rotateX(${flipValue}deg)`;
            coin.style.transition = `transform ${rotationDuration}ms ease-in-out`;
            
            if (rotations < maxRotations * 2) {
                setTimeout(animate, rotationDuration);
            } else {
                coin.style.transform = isHeads ? 'rotateX(0deg)' : 'rotateX(180deg)';
                resolve(finalValue);
            }
        };
        
        animate();
    });
}

const LINE_NAMES = ['bottom', 'second', 'third', 'fourth', 'fifth', 'top'];

function renderHexagramCard(hexagram) {
    elements.hexagramResult.innerHTML = `
        <div class="hexagram-symbol" aria-hidden="true">${hexagram.symbol}</div>
        <div class="hexagram-chinese">${hexagram.chinese}</div>
        <div class="hexagram-name">${hexagram.name}</div>
        <div class="hexagram-number">Hexagram ${hexagram.id} of 64</div>
        <div class="hexagram-trigrams">
            Upper: ${hexagram.trigrams.upper} / Lower: ${hexagram.trigrams.lower}
        </div>
        <div class="hexagram-keywords">
            ${hexagram.keywords.map(k => `<span class="keyword">${k}</span>`).join('')}
        </div>
    `;
}

function showHexagram() {
    const hexagram = getHexagramByLines(currentLines);
    
    if (!hexagram) return;

    currentHexagram = hexagram;
    currentChangingLines = currentValues
        .map((v, i) => (v === 6 || v === 9 ? i + 1 : null))
        .filter(n => n !== null);
    
    renderHexagramCard(hexagram);
    
    elements.hexagramDisplay.style.display = 'block';
    
    showReading(hexagram);
    
    elements.resetBtn.style.display = 'inline-block';
    
    elements.hexagramDisplay.scrollIntoView({ behavior: 'smooth' });
}

function showReading(hexagram) {
    const question = (elements.questionInput?.value || '').trim();

    let changingBlock = '';
    if (currentChangingLines.length > 0) {
        // Changing lines flip (old yang 9 -> yin, old yin 6 -> yang) to form the relating hexagram.
        const relating = getHexagramByLines(currentValues.map(v => (v === 9 ? 0 : v === 6 ? 1 : v % 2)));
        const names = currentChangingLines.map(n => LINE_NAMES[n - 1]).join(', ');
        changingBlock = `
        <div class="meaning-block">
            <h4>Changing Lines</h4>
            <p>Your ${names} line${currentChangingLines.length > 1 ? 's are' : ' is'} changing.${relating ? ` The situation is moving toward <strong>Hexagram ${relating.id}: ${relating.name}</strong> (${relating.chinese}) — ${relating.upper.brief}` : ''}</p>
        </div>`;
    }
    
    elements.hexagramMeanings.innerHTML = `
        ${question ? `<div class="meaning-block">
            <h4>Your Question</h4>
            <p><em>${esc(question)}</em></p>
        </div>` : ''}
        <div class="meaning-block">
            <h4>Core Meaning</h4>
            <p>${hexagram.upper.meaning}</p>
        </div>
        <div class="meaning-block">
            <h4>Guidance</h4>
            <p>${hexagram.upper.guidance}</p>
        </div>
        ${changingBlock}
        <div class="meaning-block">
            <h4>The Image</h4>
            <p><em>"${hexagram.image}"</em></p>
        </div>
    `;
    
    if (elements.premiumUpsell) elements.premiumUpsell.style.display = '';
    elements.readingSection.style.display = 'block';
}

function resetCoins() {
    document.querySelectorAll('.coin').forEach(coin => {
        coin.style.transition = 'none';
        coin.style.transform = '';
        coin.querySelector('.coin-face.heads').style.transform = '';
        coin.querySelector('.coin-face.tails').style.transform = '';
    });
}

function resetCasting() {
    currentLines = [];
    currentValues = [];
    currentHexagram = null;
    currentChangingLines = [];
    castCount = 0;
    isCasting = false;
    
    updateProgress();
    
    elements.hexagramDisplay.style.display = 'none';
    elements.readingSection.style.display = 'none';
    elements.resetBtn.style.display = 'none';
    elements.castBtn.style.display = 'inline-block';
    
    resetCoins();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHexagramsGrid() {
    if (!elements.hexagramsGrid) return;
    
    const displayHexagrams = hexagrams;
    
    elements.hexagramsGrid.innerHTML = displayHexagrams.map(h => `
        <div class="hexagram-card" data-id="${h.id}" role="button" tabindex="0">
            <div class="symbol" aria-hidden="true">${h.symbol}</div>
            <div class="name">${h.id}. ${h.name}</div>
            <div class="chinese-name">${h.chinese}</div>
        </div>
    `).join('');
    
    elements.hexagramsGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.hexagram-card');
        if (card) {
            const id = parseInt(card.dataset.id);
            showQuickHexagram(id);
        }
    });
    elements.hexagramsGrid.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const card = e.target.closest('.hexagram-card');
        if (card) {
            e.preventDefault();
            showQuickHexagram(parseInt(card.dataset.id));
        }
    });
}

function showQuickHexagram(id) {
    const hexagram = hexagrams.find(h => h.id === id);
    if (!hexagram) return;

    // Browsing a hexagram replaces the cast — Share and Premium now refer to this one.
    currentHexagram = hexagram;
    currentLines = [];
    currentValues = [];
    currentChangingLines = [];
    
    renderHexagramCard(hexagram);
    
    elements.hexagramMeanings.innerHTML = `
        <div class="meaning-block">
            <h4>Core Meaning</h4>
            <p>${hexagram.upper.meaning}</p>
        </div>
        <div class="meaning-block">
            <h4>Guidance</h4>
            <p>${hexagram.upper.guidance}</p>
        </div>
        <div class="meaning-block">
            <h4>The Image</h4>
            <p><em>"${hexagram.image}"</em></p>
        </div>
    `;
    
    if (elements.premiumUpsell) elements.premiumUpsell.style.display = '';
    elements.hexagramDisplay.style.display = 'block';
    elements.readingSection.style.display = 'block';
    elements.castBtn.style.display = 'none';
    elements.resetBtn.style.display = 'inline-block';
    
    elements.hexagramDisplay.scrollIntoView({ behavior: 'smooth' });
}

function shareReading() {
    const hexagram = currentHexagram;
    if (!hexagram) return;
    
    const text = `My I Ching Reading: ${hexagram.name} (${hexagram.chinese})
    
Keywords: ${hexagram.keywords.join(', ')}

Core Meaning: ${hexagram.upper.brief}

Guidance: ${hexagram.upper.guidance}

Get your free reading at iching.mdo3d.com`;
    
    if (navigator.share) {
        navigator.share({
            title: `I Ching: ${hexagram.name}`,
            text: text
        });
    } else {
        navigator.clipboard.writeText(text).then(() => {
            alert('Reading copied to clipboard!');
        });
    }
}

function showPremiumUpsell() {
    showPremiumModal();
}

// API Integration Functions
async function getPremiumReading(hexagram, question, changingLines) {
    try {
        const response = await fetch(`${API_URL}/api/reading/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                hexagram,
                question,
                changingLines,
                premium: true,
                sessionId: window.PremiumEntitlement?.activeSessionId()
            })
        });

        const data = await response.json();
        if (data.success) {
            return data.reading;
        }
        throw new Error(data.error || 'Failed to get reading');
    } catch (error) {
        console.error('API Error:', error);
        return null;
    }
}

function showPremiumReading(reading) {
    if (!reading) return;
    const list = (arr) => Array.isArray(arr) ? arr.map(x => `<li>${esc(x)}</li>`).join('') : '';

    elements.hexagramMeanings.innerHTML = `
        <div class="premium-reading">
            <div class="premium-badge">AI-Powered Reading</div>

            <div class="meaning-block">
                <h4>Opening Reflection</h4>
                <p>${esc(reading.opening)}</p>
            </div>

            <div class="meaning-block">
                <h4>Hexagram Interpretation</h4>
                <p>${esc(reading.interpretation)}</p>
            </div>

            ${reading.insights && reading.insights.length > 0 ? `
            <div class="meaning-block">
                <h4>Deep Insights</h4>
                <ul class="insights-list">
                    ${list(reading.insights)}
                </ul>
            </div>
            ` : ''}

            ${reading.actionSteps && reading.actionSteps.length > 0 ? `
            <div class="meaning-block">
                <h4>Practical Guidance</h4>
                <ul class="action-steps">
                    ${list(reading.actionSteps)}
                </ul>
            </div>
            ` : ''}

            ${reading.closingWisdom ? `
            <div class="meaning-block closing-wisdom">
                <h4>Closing Wisdom</h4>
                <p><em>"${esc(reading.closingWisdom)}"</em></p>
            </div>
            ` : ''}
        </div>
    `;
    // The reading has been delivered — don't keep selling it.
    if (elements.premiumUpsell) elements.premiumUpsell.style.display = 'none';
    elements.hexagramMeanings.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

async function handlePremiumPurchase() {
    hidePremiumModal();
    // A verified, unused purchase (recorded by success.html) delivers directly — no second charge.
    if (window.PremiumEntitlement?.has()) {
        if (!currentHexagram) {
            alert('Your premium credit is ready. Cast your coins first, then choose "Get Premium Reading" to use it.');
            document.getElementById('question-section')?.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        const question = elements.questionInput?.value || 'Your general question';
        const reading = await getPremiumReading(currentHexagram, question, currentChangingLines);
        if (reading) { window.PremiumEntitlement.consume(); showPremiumReading(reading); return; }
        alert('Your purchase is confirmed, but the reading service is temporarily unavailable. Please try again shortly — you will not be charged again.');
        return;
    }
    const email = prompt('Enter your email to receive your premium reading:');
    if (!email) return;

    try {
        const response = await fetch(`${API_URL}/api/payment/create-checkout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                readingType: 'single-premium',
                email
            })
        });

        const data = await response.json();
        if (data.success && data.checkoutUrl) {
            savePendingReading();
            window.location.href = data.checkoutUrl;
        } else {
            alert('Unable to process payment. Please try again.');
        }
    } catch (error) {
        console.error('Payment error:', error);
        alert('Payment error. Please try again.');
    }
}

// Make premium purchase available globally
window.handlePremiumPurchase = handlePremiumPurchase;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', init);
