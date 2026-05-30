// ==========================================
// 1. 照片倉庫
// ==========================================
const photos = [
    "images/korankei/cross_line.JPG", // 預留位置，稍後會被您的首圖覆蓋
    "images/korankei/cutting_leaf.JPG",
    "images/korankei/dark_bridge.JPG",
    "images/korankei/forest_road.JPG",
    "images/korankei/maple_lake.JPG",
    "images/korankei/obajyan.JPG",
    "images/korankei/river_side.JPG",
    "images/korankei/stone_road.JPG",
    "images/korankei/yellow_leaf.JPG"
];

let currentIndex = 0;
let isGalleryMode = false;
let isThrottled = false;

// 🍏 確保第一張照片絕對是您資料庫裡設定好的首圖
if (typeof articles !== 'undefined' && articles[0]) {
    photos[0] = articles[0].image; 
}

// ==========================================
// 2. 渲染主畫面相片與標題
// ==========================================
function updateCarousel(index) {
    const bgPhotoEl = document.getElementById('bg-photo');
    const counterEl = document.getElementById('gallery-counter');
    const titleEl = document.getElementById('main-title');
    const locationHintEl = document.getElementById('location-hint');
    
    if (bgPhotoEl) {
        bgPhotoEl.style.backgroundImage = `url('${photos[index]}')`;
    }
    
    // 🍏 只有在第一張圖時，才顯示您的專屬標題與落款
    if (index === 0 && typeof articles !== 'undefined' && articles[0]) {
        if (titleEl) titleEl.textContent = articles[0].title;
        if (locationHintEl) locationHintEl.innerHTML = articles[0].location;
    }
    
    if (counterEl) {
        const displayNum = String(index + 1).padStart(2, '0');
        const totalNum = String(photos.length).padStart(2, '0');
        counterEl.textContent = `${displayNum} / ${totalNum}`;
    }
}

// ==========================================
// 3. 網格索引艙 (生成與開關)
// ==========================================
function buildIndexGrid() {
    const gridContainer = document.getElementById('index-grid');
    if (!gridContainer || gridContainer.children.length > 0) return; 
    
    let gridHtml = '';
    photos.forEach((url, i) => {
        gridHtml += `<img src="${url}" class="grid-item" data-index="${i}" alt="Gallery Photo">`;
    });
    gridContainer.innerHTML = gridHtml;
    
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const targetIndex = parseInt(e.target.getAttribute('data-index'));
            currentIndex = targetIndex;
            updateCarousel(currentIndex);
            document.getElementById('gallery-index-panel').classList.remove('open');
        });
    });
}

// ==========================================
// 4. 點擊標題 ➔ 瞬間進入並開啟展示間
// ==========================================
const mainTitle = document.getElementById('main-title');
if (mainTitle) {
    mainTitle.addEventListener('click', () => {
        isGalleryMode = true;
        
        document.getElementById('main-title-container').style.opacity = 0;
        document.getElementById('main-title-container').style.pointerEvents = 'none';
        document.getElementById('dark-overlay').style.opacity = 0;
        document.getElementById('gallery-counter').style.opacity = 1;
        document.getElementById('open-index-btn').style.opacity = 1;
        document.body.style.overflowY = 'hidden';
        
        // 🍏 核心修正：點擊標題後，直接幫讀者滑出右側九宮格展示間！
        buildIndexGrid();
        document.getElementById('gallery-index-panel').classList.add('open');
    });
}

// 開關網格按鈕
document.getElementById('open-index-btn').addEventListener('click', () => {
    buildIndexGrid();
    document.getElementById('gallery-index-panel').classList.add('open');
});

document.getElementById('close-index-btn').addEventListener('click', () => {
    document.getElementById('gallery-index-panel').classList.remove('open');
});

// ==========================================
// 5. 滾輪/觸控板 高速翻頁 (限藝廊模式)
// ==========================================
window.addEventListener('wheel', (e) => {
    if (!isGalleryMode || document.getElementById('gallery-index-panel').classList.contains('open')) return;
    if (isThrottled) return; 
    
    if (e.deltaY > 30) {
        currentIndex = (currentIndex + 1) % photos.length;
        updateCarousel(currentIndex);
        throttleScroll();
    } else if (e.deltaY < -30) {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        updateCarousel(currentIndex);
        throttleScroll();
    }
});

function throttleScroll() {
    isThrottled = true;
    setTimeout(() => { isThrottled = false; }, 800); 
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateCarousel(currentIndex);
});
document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    updateCarousel(currentIndex);
});

// ==========================================
// 6. 500vh 時差滾動邏輯
// ==========================================
window.addEventListener('scroll', () => {
    if (isGalleryMode) return; 

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollY / windowHeight, 4);

    const locationHint = document.getElementById('location-hint');
    const bgPhoto = document.getElementById('bg-photo');
    const mapContainer = document.getElementById('map-container');

    if (progress <= 2) {
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
        if (bgPhoto) bgPhoto.style.opacity = 1;
        if (locationHint) locationHint.style.opacity = Math.min((progress - 0.3) * 1.5, 1);
    } 
    else if (progress > 2) {
        const stage3Progress = (progress - 2) / 2; 
        const easedProgress = Math.pow(stage3Progress, 2); 
        
        if (locationHint) locationHint.style.opacity = 1 - easedProgress;
        if (bgPhoto) bgPhoto.style.opacity = 1; 
        
        if (mapContainer) {
            mapContainer.style.opacity = easedProgress;
            if (easedProgress > 0.9) { mapContainer.style.pointerEvents = 'auto'; } 
            else { mapContainer.style.pointerEvents = 'none'; }
        }
    }
});

// 啟動
updateCarousel(0);