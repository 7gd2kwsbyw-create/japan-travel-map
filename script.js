// ==========================================
// 1. 全域變數
// ==========================================
let currentIndex = 0; 

// ==========================================
// 2. 首頁看板內容與背景圖更新核心
// ==========================================
function updateCarousel(index) {
    if (typeof articles === 'undefined' || !articles[index]) return;
    const article = articles[index]; 
    const titleEl = document.getElementById('main-title');
    const bgPhotoEl = document.getElementById('bg-photo');
    const locationHintEl = document.getElementById('location-hint');

    if (titleEl) titleEl.style.opacity = 0;
    
    setTimeout(() => {
        if (titleEl) {
            titleEl.textContent = article.title;
            titleEl.style.opacity = 1;
        }
        if (bgPhotoEl) {
            bgPhotoEl.style.backgroundImage = `url('${article.image}')`;
            bgPhotoEl.style.opacity = 1;
        }
        if (locationHintEl) {
            locationHintEl.innerHTML = article.location;
        }
    }, 200);
}

// ==========================================
// 3. 側滑相簿藝廊艙控制
// ==========================================
function openGallery(galleryId) {
    if (typeof articles === 'undefined') return;
    const currentAlbum = articles.find(a => a.id === galleryId) || articles[currentIndex];
    
    const readerTitle = document.getElementById('reader-title');
    const readerBody = document.getElementById('reader-body');
    const readerMeta = document.getElementById('reader-date');
    const readerPanel = document.getElementById('article-reader-panel');

    if (readerMeta) readerMeta.textContent = currentAlbum.date;
    if (readerTitle) readerTitle.textContent = currentAlbum.title;
    if (readerBody) readerBody.innerHTML = currentAlbum.content;
    
    if (readerPanel) {
        readerPanel.classList.add('open');
        document.body.style.overflowY = 'hidden'; 
    }
}

// ==========================================
// 4. 安全事件監聽器綁定
// ==========================================
const prevBtn = document.getElementById('prev-btn');
if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        if (typeof articles !== 'undefined') {
            currentIndex = (currentIndex - 1 + articles.length) % articles.length;
            updateCarousel(currentIndex);
        }
    });
}

const nextBtn = document.getElementById('next-btn');
if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof articles !== 'undefined') {
            currentIndex = (currentIndex + 1) % articles.length;
            updateCarousel(currentIndex);
        }
    });
}

const mainTitle = document.getElementById('main-title');
if (mainTitle) {
    mainTitle.addEventListener('click', () => {
        if (typeof articles !== 'undefined' && articles[currentIndex]) {
            openGallery(articles[currentIndex].id);
        }
    });
}

document.querySelectorAll('.spot-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const spotName = dot.getAttribute('data-spot');
        if (spotName === "出雲大社" || spotName === "松江城" || spotName === "宍道湖") {
            openGallery("shimane-album");
        } else {
            openGallery("korankei-album");
        }
    });
});

const closeReaderBtn = document.getElementById('close-reader-btn');
if (closeReaderBtn) {
    closeReaderBtn.addEventListener('click', () => {
        const readerPanel = document.getElementById('article-reader-panel');
        if (readerPanel) {
            readerPanel.classList.remove('open');
            document.body.style.overflowY = 'scroll';
        }
    });
}

// ==========================================
// 5. 500vh 時差滾動邏輯 (🍏 已優化過渡速度與流暢感)
// ==========================================
window.addEventListener('scroll', () => {
    const readerPanel = document.getElementById('article-reader-panel');
    if (readerPanel && readerPanel.classList.contains('open')) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollY / windowHeight, 4);

    const mainTitleContainer = document.getElementById('main-title-container');
    const darkOverlay = document.getElementById('dark-overlay');
    const locationHint = document.getElementById('location-hint');
    const bgPhoto = document.getElementById('bg-photo');
    const mapContainer = document.getElementById('map-container');

    // 🍏 核心修改 1：只要進度還沒過半（<= 2），地圖絕對隱藏，確保前段純淨
    if (progress <= 2) {
        if (mapContainer) {
            mapContainer.style.opacity = 0;
            mapContainer.style.pointerEvents = 'none';
        }
        if (bgPhoto) bgPhoto.style.opacity = 1;
    }

    if (progress <= 1) {
        if (mainTitleContainer) {
            mainTitleContainer.style.opacity = 1 - progress;
            mainTitleContainer.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
            mainTitleContainer.style.pointerEvents = (progress > 0.8) ? 'none' : 'auto';
        }
        if (darkOverlay) darkOverlay.style.opacity = 0.6 * (1 - progress);

        if (locationHint) {
            if (progress > 0.3) {
                locationHint.style.opacity = Math.min((progress - 0.3) * 1.5, 1);
            } else {
                locationHint.style.opacity = 0;
            }
        }
    } 
    else if (progress > 1 && progress <= 2) {
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) locationHint.style.opacity = 1;
    } 
    // 🍏 核心修改 2：將啟動點提早至 progress > 2。
    // 從 200vh 滾動到 400vh，跨越足足兩倍的距離（200vh）讓地圖柔和登場。
    else if (progress > 2) {
        const stage3Progress = (progress - 2) / 2; // 將 2~4 的斜率映射為 0~1
        
        // 🍏 核心修改 3：引入平方緩動（Ease-In），讓地圖浮現的前半段極其輕柔，消滅突兀感
        const easedProgress = Math.pow(stage3Progress, 2); 
        
        if (locationHint) locationHint.style.opacity = 1 - easedProgress;
        if (bgPhoto) bgPhoto.style.opacity = 1; 
        
        if (mapContainer) {
            mapContainer.style.opacity = easedProgress;
            if (easedProgress > 0.9) {
                mapContainer.style.pointerEvents = 'auto';
            } else {
                mapContainer.style.pointerEvents = 'none';
            }
        }
    }
});

// ==========================================
// 6. 核心初始化啟動
// ==========================================
updateCarousel(currentIndex);