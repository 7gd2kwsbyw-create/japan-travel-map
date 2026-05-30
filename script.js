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
// 4. 安全事件監聽器綁定 (防禦性設計：元件不存在也絕不崩潰)
// ==========================================

// 左右箭頭控制
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

// 首頁大標題點擊
const mainTitle = document.getElementById('main-title');
if (mainTitle) {
    mainTitle.addEventListener('click', () => {
        if (typeof articles !== 'undefined' && articles[currentIndex]) {
            openGallery(articles[currentIndex].id);
        }
    });
}

// 地圖點位錨點點擊
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

// 關閉相簿艙按鈕
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
// 5. 500vh 時差滾動邏輯 (核心修復：永久鎖死背景不透明度，阻斷地圖疊影)
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

    // 🍏 只要還沒完全抵達地圖幕，地圖就必須絕對隱藏，且照片完全顯現不准變透明
    if (progress <= 3) {
        if (mapContainer) {
            mapContainer.style.opacity = 0;
            mapContainer.style.pointerEvents = 'none';
        }
        if (bgPhoto) {
            bgPhoto.style.opacity = 1; 
        }
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
    else if (progress > 1 && progress <= 3) {
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) locationHint.style.opacity = 1;
    } 
    else if (progress > 3) {
        const stage4Progress = progress - 3;
        if (locationHint) locationHint.style.opacity = 1 - stage4Progress;
        
        // 🍏 終極修正：照片不再降低不透明度（維持固定 1）。
        // 讓帶有實色白底的地圖容器直接淡入蓋在照片上方，達成乾淨、無疊影雜質的高級轉場。
        if (bgPhoto) {
            bgPhoto.style.opacity = 1; 
        }
        
        if (mapContainer) {
            mapContainer.style.opacity = stage4Progress;
            if (stage4Progress > 0.9) {
                mapContainer.style.pointerEvents = 'auto';
            } else {
                mapContainer.style.pointerEvents = 'none';
            }
        }
    }
});

// ==========================================
// 6. 核心初始化啟動齒輪
// ==========================================
updateCarousel(currentIndex);