let currentIndex = 0; 

// 更新首頁看板內容與背景圖的函式
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

// 左右箭頭點擊事件
document.getElementById('prev-btn').addEventListener('click', (e) => {
    e.stopPropagation(); 
    currentIndex = (currentIndex - 1 + articles.length) % articles.length;
    updateCarousel(currentIndex);
});

document.getElementById('next-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % articles.length;
    updateCarousel(currentIndex);
});

// 🍏 核心打通：點擊首頁大標題 ➔ 平滑滑出原生閱讀艙，並完整渲染您的長文與相簿
document.getElementById('main-title').addEventListener('click', () => {
    const article = articles[currentIndex];
    
    document.getElementById('reader-date').textContent = article.date;
    document.getElementById('reader-title').textContent = article.title;
    document.getElementById('reader-body').innerHTML = article.content;
    
    const readerPanel = document.getElementById('article-reader-panel');
    if (readerPanel) {
        readerPanel.classList.add('open');
        document.body.style.overflowY = 'hidden'; // 開啟時鎖定外層捲軸，維持沉浸體感
    }
});

// 🍏 核心打通：點擊第三幕地圖錨點 ➔ 串連至同一個高級藝廊閱讀艙
document.querySelectorAll('.spot-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const spotName = dot.getAttribute('data-spot');
        
        // 依據點選的地圖站點名稱，精準抓取倉庫內對應的香嵐溪遊記文章（目前第一筆）
        const article = articles[0]; 
        
        document.getElementById('reader-date').textContent = article.date;
        document.getElementById('reader-title').textContent = article.title;
        document.getElementById('reader-body').innerHTML = article.content;
        
        const readerPanel = document.getElementById('article-reader-panel');
        if (readerPanel) {
            readerPanel.classList.add('open');
            document.body.style.overflowY = 'hidden';
        }
    });
});

// 關閉按鈕事件
document.getElementById('close-reader-btn').addEventListener('click', () => {
    const readerPanel = document.getElementById('article-reader-panel');
    if (readerPanel) {
        readerPanel.classList.remove('open');
        document.body.style.overflowY = 'scroll'; // 恢復底層滾動
    }
});

// 初始化載入第一篇文章看板
updateCarousel(currentIndex);


// 🍏 完美恢復您原本的 500vh 五幕滾動時差控制邏輯
window.addEventListener('scroll', () => {
    if (document.getElementById('article-reader-panel').classList.contains('open')) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollY / windowHeight, 4);

    const mainTitleContainer = document.getElementById('main-title-container');
    const darkOverlay = document.getElementById('dark-overlay');
    const locationHint = document.getElementById('location-hint');
    const bgPhoto = document.getElementById('bg-photo');
    const mapContainer = document.getElementById('map-container');

    if (progress <= 3) {
        if (mapContainer) {
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