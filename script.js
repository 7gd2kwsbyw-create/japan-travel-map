// 🍏 控制動畫與點擊的純邏輯齒輪箱（已修正 ID 對齊與 null 錯誤）

let currentIndex = 0; 

// 更新首頁看板內容的函式
function updateCarousel(index) {
    // 安全檢查：確保 articles 資料庫存在且有資料
    if (typeof articles === 'undefined' || !articles[index]) return;
    
    const article = articles[index];
    const titleEl = document.getElementById('main-title');
    const bgPhotoEl = document.getElementById('bg-photo');
    // 💡 修正：相容於不同的 HTML 地點標籤 ID（可能是 location-hint 或其他）
    const locationHintEl = document.getElementById('location-hint') || document.getElementById('location');

    if (titleEl) titleEl.style.opacity = 0;
    
    setTimeout(() => {
        if (titleEl) {
            titleEl.textContent = article.title;
            titleEl.style.opacity = 1;
        }
        if (bgPhotoEl) {
            bgPhotoEl.style.backgroundImage = `url('${article.image}')`;
        }
        if (locationHintEl) {
            locationHintEl.innerHTML = article.location;
        }
    }, 200);
}

// 左右箭頭點擊事件（加上安全防護，避免找不到按鈕時報錯）
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        currentIndex = (currentIndex - 1 + articles.length) % articles.length;
        updateCarousel(currentIndex);
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % articles.length;
        updateCarousel(currentIndex);
    });
}

// 內化文章點擊展開 / 關閉控制邏輯
const readerPanel = document.getElementById('article-reader-panel');
const mainTitle = document.getElementById('main-title');

if (mainTitle && readerPanel) {
    mainTitle.addEventListener('click', () => {
        if (typeof articles === 'undefined') return;
        const article = articles[currentIndex];
        
        const readerDate = document.getElementById('reader-date');
        const readerTitle = document.getElementById('reader-title');
        const readerBody = document.getElementById('reader-body');
        
        if (readerDate) readerDate.textContent = article.date;
        if (readerTitle) readerTitle.textContent = article.title;
        if (readerBody) readerBody.innerHTML = article.content;
        
        readerPanel.classList.add('open');
        document.body.style.overflowY = 'hidden'; 
    });
}

const closeReaderBtn = document.getElementById('close-reader-btn');
if (closeReaderBtn && readerPanel) {
    closeReaderBtn.addEventListener('click', () => {
        readerPanel.classList.remove('open');
        document.body.style.overflowY = 'scroll'; 
    });
}

// 初始化載入第一篇文章看板
if (typeof articles !== 'undefined' && articles.length > 0) {
    updateCarousel(currentIndex);
}


// 500vh 五幕滾動時差邏輯（全面加上防錯機制，確保即使 ID 沒對上也不會讓整站動畫癱瘓）
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollY / windowHeight, 4);

    const mainTitleContainer = document.getElementById('main-title-container');
    const darkOverlay = document.getElementById('dark-overlay');
    const locationHint = document.getElementById('location-hint') || document.getElementById('location');
    const bgPhoto = document.getElementById('bg-photo');
    const mapContainer = document.getElementById('map-container');

    if (mapContainer) {
        if (progress <= 3) {
            mapContainer.style.opacity = 0;
            mapContainer.style.pointerEvents = 'none';
        }
    }

    if (progress <= 1) {
        if (mainTitleContainer) {
            mainTitleContainer.style.opacity = 1 - progress;
            mainTitleContainer.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
        }
        if (darkOverlay) darkOverlay.style.opacity = 0.6 * (1 - progress);

        if (locationHint) {
            if (progress > 0.3) {
                locationHint.style.opacity = Math.min((progress - 0.3) * 1.5, 1);
            } else {
                locationHint.style.opacity = 0;
            }
        }
        if (bgPhoto) bgPhoto.style.opacity = 1;
    } 
    else if (progress > 1 && progress <= 3) {
        if (mainTitleContainer) mainTitleContainer.style.opacity = 0;
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) locationHint.style.opacity = 1;
        if (bgPhoto) bgPhoto.style.opacity = 1;
    } 
    else if (progress > 3) {
        const stage4Progress = progress - 3;
        if (locationHint) locationHint.style.opacity = 1 - stage4Progress;
        if (bgPhoto) bgPhoto.style.opacity = 1 - stage4Progress;
        if (mapContainer) {
            mapContainer.style.opacity = stage4Progress;
            if (stage4Progress > 0.9) {
                mapContainer.style.pointerEvents = 'auto';
            }
        }
    }
});