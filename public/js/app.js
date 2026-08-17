import { hexagrams, getHexagramByLines } from './services/database.js';
import { firebaseConfig } from './config/firebase.js';

// API Configuration
const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:3005'
  : 'https://iching-api.vercel.app';

let currentLines = [];
let currentHexagram = null;
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
    modalSkip: document.getElementById('modal-skip')
};

function init() {
    setupEventListeners();
    renderHexagramsGrid();
    updateProgress();
}

function setupEventListeners() {
    elements.questionInput?.addEventListener('input', updateCharCount);
    
    elements.castBtn?.addEventListener('click', startCasting);
    elements.resetBtn?.addEventListener('click', resetCasting);
    elements.newReadingBtn?.addEventListener('click', resetCasting);
    
    elements.coinsContainer?.addEventListener('click', (e) => {
        const coin = e.target.closest('.coin');
        if (coin && !isCasting) {
            flipCoin(coin);
        }
    });
    
    elements.shareBtn?.addEventListener('click', shareReading);
    elements.upgradeBtn?.addEventListener('click', showPremiumModal);
    
    elements.modalOverlay?.addEventListener('click', hidePremiumModal);
    elements.modalClose?.addEventListener('click', hidePremiumModal);
    elements.modalSkip?.addEventListener('click', hidePremiumModal);
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
    castCount = 0;
    isCasting = true;
    elements.castBtn.style.display = 'none';
    
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
                        const sum = results.reduce((a, b) => a + b, 0);
                        const line = sum >= 7 ? 1 : 0;
                        currentLines.push(line);
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
        const finalValue = isHeads ? 5 : 4;
        
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

function showHexagram() {
    const hexagram = getHexagramByLines(currentLines);
    
    if (!hexagram) return;
    
    elements.hexagramResult.innerHTML = `
        <div class="hexagram-symbol">${hexagram.symbol}</div>
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
    
    elements.hexagramDisplay.style.display = 'block';
    
    showReading(hexagram);
    
    elements.resetBtn.style.display = 'inline-block';
    
    elements.hexagramDisplay.scrollIntoView({ behavior: 'smooth' });
}

function showReading(hexagram) {
    const question = elements.questionInput?.value || 'Your general question';
    
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
            <h4>When Reversed</h4>
            <p>${hexagram.lower.meaning}</p>
        </div>
        <div class="meaning-block">
            <h4>The Image</h4>
            <p><em>"${hexagram.image}"</em></p>
        </div>
    `;
    
    elements.readingSection.style.display = 'block';
}

function resetCasting() {
    currentLines = [];
    castCount = 0;
    isCasting = false;
    
    updateProgress();
    
    elements.hexagramDisplay.style.display = 'none';
    elements.readingSection.style.display = 'none';
    elements.resetBtn.style.display = 'none';
    elements.castBtn.style.display = 'inline-block';
    
    const coins = document.querySelectorAll('.coin');
    coins.forEach(coin => {
        coin.querySelector('.coin-face.heads').style.transform = 'rotateY(0deg)';
        coin.querySelector('.coin-face.tails').style.transform = 'rotateY(180deg)';
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderHexagramsGrid() {
    if (!elements.hexagramsGrid) return;
    
    const displayHexagrams = hexagrams;
    
    elements.hexagramsGrid.innerHTML = displayHexagrams.map(h => `
        <div class="hexagram-card" data-id="${h.id}">
            <div class="symbol">${h.symbol}</div>
            <div class="name">${h.name}</div>
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
}

function showQuickHexagram(id) {
    const hexagram = hexagrams.find(h => h.id === id);
    if (!hexagram) return;
    
    elements.hexagramResult.innerHTML = `
        <div class="hexagram-symbol">${hexagram.symbol}</div>
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
    
    elements.hexagramMeanings.innerHTML = `
        <div class="meaning-block">
            <h4>Core Meaning</h4>
            <p>${hexagram.upper.meaning}</p>
        </div>
        <div class="meaning-block">
            <h4>Guidance</h4>
            <p>${hexagram.upper.guidance}</p>
        </div>
    `;
    
    elements.hexagramDisplay.style.display = 'block';
    elements.readingSection.style.display = 'block';
    elements.resetBtn.style.display = 'inline-block';
    
    elements.hexagramDisplay.scrollIntoView({ behavior: 'smooth' });
}

function shareReading() {
    const hexagram = getHexagramByLines(currentLines);
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
async function getPremiumReading(hexagram, question) {
    try {
        const response = await fetch(`${API_URL}/api/reading/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                hexagram,
                question,
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

    elements.hexagramMeanings.innerHTML = `
        <div class="premium-reading">
            <div class="premium-badge">AI-Powered Reading</div>

            <div class="meaning-block">
                <h4>Opening Reflection</h4>
                <p>${reading.opening}</p>
            </div>

            <div class="meaning-block">
                <h4>Hexagram Interpretation</h4>
                <p>${reading.interpretation}</p>
            </div>

            ${reading.insights && reading.insights.length > 0 ? `
            <div class="meaning-block">
                <h4>Deep Insights</h4>
                <ul class="insights-list">
                    ${reading.insights.map(i => `<li>${i}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            ${reading.actionSteps && reading.actionSteps.length > 0 ? `
            <div class="meaning-block">
                <h4>Practical Guidance</h4>
                <ul class="action-steps">
                    ${reading.actionSteps.map(s => `<li>${s}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            <div class="meaning-block closing-wisdom">
                <h4>Closing Wisdom</h4>
                <p><em>"${reading.closingWisdom}"</em></p>
            </div>
        </div>
    `;
}

async function handlePremiumPurchase() {
    // A verified, unused purchase (recorded by success.html) delivers directly — no second charge.
    if (window.PremiumEntitlement?.has()) {
        const question = elements.questionInput?.value || 'Your general question';
        const reading = await getPremiumReading(currentHexagram, question);
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
