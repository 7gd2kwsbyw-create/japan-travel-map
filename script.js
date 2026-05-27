// 🍏 1. 文章輪播資料庫（底圖暫時全部共用現有的 gr-photo.jpg，防止未上傳新圖時破圖）
const articles = [
    {
        title: "山陰自駕漫遊：島根、鳥取海岸線之旅",
        image: "gr-photo.jpg", 
        location: "📍 島根縣 · 宍道湖落日"
    },
    {
        title: "大江戶晨霧漫步：淺草與隅田川散策",
        image: "gr-photo.jpg", // 💡 未來有新照片（如 tokyo.jpg）再進來修改檔名即可
        location: "📍 東京都 · 隅田川畔"
    },
    {
        title: "尾張名古屋城下町：歷史與現代交織",
        image: "gr-photo.jpg", 
        location: "📍 愛知縣 · 名古屋城"
    }
];

let currentIndex = 0; 

// 更新輪播畫面的函式
function updateCarousel(index) {
    const article = articles[index];
    const titleEl = document.getElementById('main-title');
    const bgPhotoEl = document.getElementById('bg-photo');
    const locationHintEl = document.getElementById('location-hint');

    // 清晰優雅的切換動態
    titleEl.style.opacity = 0;
    
    setTimeout(() => {
        titleEl.textContent = article.title;
        bgPhotoEl.style.backgroundImage = `url('${article.image}')`;
        locationHintEl.innerHTML = article.location;
        titleEl.style.opacity = 1;
    }, 200);
}

// 左右箭頭點擊事件綁定
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

// 初始化載入第一篇文章
updateCarousel(currentIndex);


// 2. 500vh 五幕滾動時差邏輯（配合新容器 ID 進行微調）
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const progress = Math.min(scrollY / windowHeight, 4);

    const mainTitleContainer = document.getElementById('main-title-container'); // 🍏 修正為控制外層容器
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