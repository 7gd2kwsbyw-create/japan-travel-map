// 🍏 原本頂端的 articles 資料庫已經完美物理搬移至 articles-data.js

let currentIndex = 0; 

// 更新首頁看板內容的函式
function updateCarousel(index) {
    const article = articles[index]; // 這裡會自動去 articles-data.js 抓取資料
    const titleEl = document.getElementById('main-title');
    const bgPhotoEl = document.getElementById('bg-photo');
    const locationHintEl = document.getElementById('location-hint');

    titleEl.style.opacity = 0;
    
    setTimeout(() => {
        titleEl.textContent = article.title;
        bgPhotoEl.style.backgroundImage = `url('${article.image}')`;
        locationHintEl.innerHTML = article.location;
        titleEl.style.opacity = 1;
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

// 內化文章點擊展開 / 關閉控制邏輯
const readerPanel = document.getElementById('article-reader-panel');

document.getElementById('main-title').addEventListener('click', () => {
    const article = articles[currentIndex];
    
    document.getElementById('reader-date').textContent = article.date;
    document.getElementById('reader-title').textContent = article.title;
    document.getElementById('reader-body').innerHTML = article.content;
    
    readerPanel.classList.add('open');
    document.body.style.overflowY = 'hidden'; 
});

document.getElementById('close-reader-btn').addEventListener('click', () => {
    readerPanel.classList.remove('open');
    document.body.style.overflowY = 'scroll'; 
});

// 初始化載入第一篇文章看板
updateCarousel(currentIndex);


// 500vh 五幕滾動時差邏輯
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollY / windowHeight, 4);

    const mainTitleContainer = document.getElementById('main-title-container');
    const darkOverlay = document.getElementById('dark-overlay');
    const locationHint = document.getElementById('location-hint');
    const bgPhoto = document.getElementById('bg-photo');
    const mapContainer = document.getElementById('map-container');

    if (progress <= 3) {
        mapContainer.style.opacity = 0;
        mapContainer.style.pointerEvents = 'none';
    }

    if (progress <= 1) {
        mainTitleContainer.style.opacity = 1 - progress;
        mainTitleContainer.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
        darkOverlay.style.opacity = 0.6 * (1 - progress);

        if (progress > 0.3) {
            locationHint.style.opacity = Math.min((progress - 0.3) * 1.5, 1);
        } else {
            locationHint.style.opacity = 0;
        }
        bgPhoto.style.opacity = 1;
    } 
    else if (progress > 1 && progress <= 3) {
        mainTitleContainer.style.opacity = 0;
        darkOverlay.style.opacity = 0;
        locationHint.style.opacity = 1;
        bgPhoto.style.opacity = 1;
    } 
    else if (progress > 3) {
        const stage4Progress = progress - 3;
        locationHint.style.opacity = 1 - stage4Progress;
        bgPhoto.style.opacity = 1 - stage4Progress;
        mapContainer.style.opacity = stage4Progress;
        if (stage4Progress > 0.9) {
            mapContainer.style.pointerEvents = 'auto';
        }
    }
});