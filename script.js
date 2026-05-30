// ==========================================
// 1. 🍏 嚴格對齊您 VSCode 側邊欄的 9 張實體照片路徑
// ==========================================
const photos = [
    "images/korankei/tomoegawa.JPG", // 核心首圖：巴川畔賞楓大片
    "images/korankei/cross_line.JPG",
    "images/korankei/maple_bridge.JPG",
    "images/korankei/maple_bridge2.JPG",
    "images/korankei/maple_lake.JPG",
    "images/korankei/maple_lake2.JPG",
    "images/korankei/maple_light_road.JPG",
    "images/korankei/maple_light_road_2.JPG",
    "images/korankei/obajyan.JPG"
];

let currentIndex = 0;
let isGalleryMode = false;
let isThrottled = false;

// ==========================================
// 2. 核心渲染模組
// ==========================================
function updateCarousel(index) {
    const bgPhotoEl = document.getElementById('bg-photo');
    const counterEl = document.getElementById('gallery-counter');
    const locationHintEl = document.getElementById('location-hint');
    
    if (bgPhotoEl) {
        bgPhotoEl.style.backgroundImage = `url('${photos[index]}')`;
    }
    
    // 控制落款文字
    if (locationHintEl) {
        if (index === 0) {
            locationHintEl.innerHTML = "📍 愛知縣 ． 香嵐溪巴川畔";
        } else {
            locationHintEl.innerHTML = `P. ${String(index + 1).padStart(2, '0')}`;
        }
    }
    
    if (counterEl) {
        counterEl.textContent = `${String(index + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
    }
}

// ==========================================
// 3. 網格暗房索引生成
// ==========================================
function buildIndexGrid() {
    const gridContainer = document.getElementById('index-grid');
    if (!gridContainer || gridContainer.children.length > 0) return; 
    
    let gridHtml = '';
    photos.forEach((url, i) => {
        gridHtml += `<img src="${url}" class="grid-item" data-index="${i}" alt="GR Photo">`;
    });
    gridContainer.innerHTML = gridHtml;
    
    // 縮圖點擊非線性跳轉
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
// 4. 點擊標題直達暗房展示間
// ==========================================
const mainTitle = document.getElementById('main-title');
if (mainTitle) {
    mainTitle.addEventListener('click', () => {
        isGalleryMode = true;
        
        // 隱藏首頁文字與遮罩，啟動控制項
        document.getElementById('main-title-container').style.opacity = 0;
        document.getElementById('main-title-container').style.pointerEvents = 'none';
        document.getElementById('dark-overlay').style.opacity = 0;
        document.getElementById('gallery-counter').style.opacity = 1;
        document.getElementById('open-index-btn').style.opacity = 1;
        document.body.style.overflowY = 'hidden'; // 鎖定滾動軸
        
        // 自動滑出網格展示間
        buildIndexGrid();
        document.getElementById('gallery-index-panel').classList.add('open');
    });
}

// 九宮格按鈕開關
document.getElementById('open-index-btn').addEventListener('click', () => {
    buildIndexGrid();
    document.getElementById('gallery-index-panel').classList.add('open');
});

document.getElementById('close-index-btn').addEventListener('click', () => {
    document.getElementById('gallery-index-panel').classList.remove('open');
});

// ==========================================
// 5. 滾輪與觸控板高速翻頁偵測
// ==========================================
window.addEventListener('wheel', (e) => {
    if (!isGalleryMode || document.getElementById('gallery-index-panel').classList.contains('open')) return;
    if (isThrottled) return; 
    
    if (e.deltaY > 20) {
        currentIndex = (currentIndex + 1) % photos.length;
        updateCarousel(currentIndex);
        throttleScroll();
    } else if (e.deltaY < -20) {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        updateCarousel(currentIndex);
        throttleScroll();
    }
});

function throttleScroll() {
    isThrottled = true;
    setTimeout(() => { isThrottled = false; }, 600); // 降低冷卻時間至 0.6 秒提升敏捷度
}

// 側邊箭頭翻頁補償
document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateCarousel(currentIndex);
});
document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    updateCarousel(currentIndex);
});

// ==========================================
// 6. 原生 500vh 時差滾動控制
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

// 初始化載入巴川畔大片
updateCarousel(0);