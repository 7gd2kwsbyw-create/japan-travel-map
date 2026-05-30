// ==========================================
// 1. 照片倉庫 (第一張固定為您的首選大片)
// ==========================================
const photos = [
    "images/korankei/maple_light_road_2.JPG", 
    "images/korankei/cross_line.JPG",
    "images/korankei/maple_bridge.JPG",
    "images/korankei/maple_bridge2.JPG",
    "images/korankei/maple_lake.JPG",
    "images/korankei/maple_lake2.JPG",
    "images/korankei/maple_light_road.JPG",
    "images/korankei/obajyan.JPG",
    "images/korankei/tomoegawa.JPG"
];

let currentIndex = 0;
let isGalleryMode = false;
let isThrottled = false;

// ==========================================
// 2. 核心渲染模組 (加入全黑隱蔽換圖機制，阻斷畸變)
// ==========================================
function updateCarousel(index) {
    const bgPhotoEl = document.getElementById('bg-photo');
    const counterEl = document.getElementById('gallery-counter');
    const locationHintEl = document.getElementById('location-hint');
    
    if (bgPhotoEl) {
        // 🍏 核心修正 3：先淡出不透明度，在近乎全黑下換圖再淡入，徹底解決直橫比例拉扯變形問題
        bgPhotoEl.style.opacity = 0;
        setTimeout(() => {
            bgPhotoEl.style.backgroundImage = `url('${photos[index]}')`;
            bgPhotoEl.style.opacity = 1;
        }, 220);
    }
    
    if (locationHintEl) {
        if (index === 0 && !isGalleryMode) {
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
// 4. 模式狀態切換 (進入/退出)
// ==========================================
const mainTitle = document.getElementById('main-title');
if (mainTitle) {
    mainTitle.addEventListener('click', () => {
        isGalleryMode = true;
        
        // 🍏 核心修正 2：點選標題時，直接以此張首圖開頭展開延伸感，不主動滑出九宮格面板
        document.getElementById('bg-photo').classList.add('gallery-layout');
        document.getElementById('main-title-container').style.opacity = 0;
        document.getElementById('main-title-container').style.pointerEvents = 'none';
        document.getElementById('dark-overlay').style.opacity = 0;
        document.getElementById('gallery-counter').style.opacity = 1;
        document.getElementById('open-index-btn').style.opacity = 1;
        
        const closeGalleryBtn = document.getElementById('close-gallery-mode-btn');
        if (closeGalleryBtn) {
            closeGalleryBtn.style.opacity = 1;
            closeGalleryBtn.style.pointerEvents = 'auto';
        }
        
        document.body.style.overflowY = 'hidden';
        
        currentIndex = 0;
        updateCarousel(currentIndex);
    });
}

// 退出藝廊返回首頁
const closeGalleryBtn = document.getElementById('close-gallery-mode-btn');
if (closeGalleryBtn) {
    closeGalleryBtn.addEventListener('click', () => {
        isGalleryMode = false;
        
        document.getElementById('bg-photo').classList.remove('gallery-layout');
        document.getElementById('main-title-container').style.opacity = 1;
        document.getElementById('main-title-container').style.pointerEvents = 'auto';
        document.getElementById('dark-overlay').style.opacity = 0.4;
        document.getElementById('gallery-counter').style.opacity = 0;
        document.getElementById('open-index-btn').style.opacity = 0;
        
        closeGalleryBtn.style.opacity = 0;
        closeGalleryBtn.style.pointerEvents = 'none';
        
        document.body.style.overflowY = 'scroll';
        currentIndex = 0;
        updateCarousel(currentIndex);
    });
}

// 九宮格面板按鈕控制 (只有在此處點擊才跑出九宮格)
document.getElementById('open-index-btn').addEventListener('click', () => {
    buildIndexGrid();
    document.getElementById('gallery-index-panel').classList.add('open');
});

document.getElementById('close-index-btn').addEventListener('click', () => {
    document.getElementById('gallery-index-panel').classList.remove('open');
});

// ==========================================
// 5. 滾輪翻頁偵測
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
    setTimeout(() => { isThrottled = false; }, 600); 
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
// 6. 原生 500vh 時差滾動邏輯 (🍏 核心修正 1：完美補齊第一、二幕標題與遮罩的淡出指令)
// ==========================================
window.addEventListener('scroll', () => {
    if (isGalleryMode) return; 

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollY / windowHeight, 4);

    const mainTitleContainer = document.getElementById('main-title-container');
    const darkOverlay = document.getElementById('dark-overlay');
    const locationHint = document.getElementById('location-hint');
    const bgPhoto = document.getElementById('bg-photo');
    const mapContainer = document.getElementById('map-container');

    if (progress <= 1) {
        // 處理第一幕滑動到第二幕的淡出與位移
        if (mainTitleContainer) {
            mainTitleContainer.style.opacity = 1 - progress;
            mainTitleContainer.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
            mainTitleContainer.style.pointerEvents = (progress > 0.8) ? 'none' : 'auto';
        }
        if (darkOverlay) darkOverlay.style.opacity = 0.4 * (1 - progress);
        if (locationHint) locationHint.style.opacity = Math.min(progress * 1.5, 1);
        if (bgPhoto) bgPhoto.style.opacity = 1;
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    } 
    else if (progress > 1 && progress <= 2) {
        // 🍏 核心補齊：進入第二幕時，確保標題與黑色遮罩絕對完全隱藏
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) locationHint.style.opacity = 1;
        if (bgPhoto) bgPhoto.style.opacity = 1;
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    }
    else if (progress > 2) {
        // 地圖幕過渡
        const stage3Progress = (progress - 2) / 2; 
        const easedProgress = Math.pow(stage3Progress, 2); 
        
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) locationHint.style.opacity = 1 - easedProgress;
        if (bgPhoto) bgPhoto.style.opacity = 1; 
        
        if (mapContainer) {
            mapContainer.style.opacity = easedProgress;
            if (easedProgress > 0.9) { mapContainer.style.pointerEvents = 'auto'; } 
            else { mapContainer.style.pointerEvents = 'none'; }
        }
    }
});

// 初始化
updateCarousel(0);