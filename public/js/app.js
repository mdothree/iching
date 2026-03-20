import { hexagrams, getHexagramByLines } from './js/services/database.js';

let currentLines = [];
let isCasting = false;
let castCount = 0;

const elements = {
    questionInput: document.getElementById('question-input'),
    charCount: document.getElementById('char-count'),
    castBtn: document.getElementById('cast-btn'),
    resetBtn: document.getElementById('reset-btn'),
    coinsContainer: document.getElementById('coins-container'),
    hexagramDisplay: document.getElementById('hexagram-display'),
    hexagramResult: document.getElementById('hexagram-result'),
    readingSection: document.getElementById('reading-section'),
    hexagramMeanings: document.getElementById('hexagram-meanings'),
    hexagramsGrid: document.getElementById('hexagrams-grid'),
    shareBtn: document.getElementById('share-btn'),
    upgradeBtn: document.getElementById('upgrade-btn')
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
    
    elements.coinsContainer?.addEventListener('click', (e) => {
        const coin = e.target.closest('.coin');
        if (coin && !isCasting) {
            flipCoin(coin);
        }
    });
    
    elements.shareBtn?.addEventListener('click', shareReading);
    elements.upgradeBtn?.addEventListener('click', showPremiumUpsell);
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
        coin.classList.add('flipping');
        
        const isHeads = Math.random() > 0.5;
        
        setTimeout(() => {
            coin.classList.remove('flipping');
            if (!isHeads) {
                coin.querySelector('.coin-face.heads').style.transform = 'rotateY(180deg)';
                coin.querySelector('.coin-face.tails').style.transform = 'rotateY(0deg)';
            } else {
                coin.querySelector('.coin-face.heads').style.transform = 'rotateY(0deg)';
                coin.querySelector('.coin-face.tails').style.transform = 'rotateY(180deg)';
            }
            resolve(isHeads ? 5 : 4);
        }, 600);
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
    
    const displayHexagrams = hexagrams.slice(0, 24);
    
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
    alert('Premium AI interpretation coming soon! This feature will provide personalized, AI-generated guidance based on your specific question.');
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', init);
