// ==========================================
// 1. 多相簿全動態資料庫
// ==========================================
const albums = [
    {
        title: "深秋的香嵐溪，時間靜止在楓紅之中",
        location: "📍 愛知縣 ． 香嵐溪巴川畔",
        photos: [
            "images/korankei/maple_light_road_2.JPG", 
            "images/korankei/cross_line.JPG",
            "images/korankei/maple_bridge.JPG",
            "images/korankei/maple_bridge2.JPG",
            "images/korankei/maple_lake.JPG",
            "images/korankei/maple_lake2.JPG",
            "images/korankei/maple_light_road.JPG",
            "images/korankei/obajyan.JPG",
            "images/korankei/tomoegawa.JPG"
        ]
    },
    {
        title: "寂靜美保關，時間在青石疊上呢喃", 
        location: "📍 島根縣 ． 美保關青石疊步道",
        photos: [
            "images/mihonoseki/jinjyadoa.JPG", 
            "images/mihonoseki/basketball_bet.JPG",
            "images/mihonoseki/flag.JPG",
            "images/mihonoseki/jinjya_house.JPG",
            "images/mihonoseki/jinjya_stair.JPG",
            "images/mihonoseki/jinjya2.JPG",
            "images/mihonoseki/jinjyatorii.JPG",
            "images/mihonoseki/jyoyalight.JPG",
            "images/mihonoseki/osake_no_mise.JPG",
            "images/mihonoseki/semai_michi.JPG",
            "images/mihonoseki/semai_michi2.JPG",
            "images/mihonoseki/umi_no_keisiki.JPG"
        ]
    }
];

let currentAlbumIndex = 0; 
let currentPhotoIndex = 0; 
let isGalleryMode = false;  
let isThrottled = false;   

// ==========================================
// 2. 第一幕：首頁封面與大標題同步切換核心
// ==========================================
function updateAlbumCover() {
    const bgPhotoEl = document.getElementById('bg-photo');
    const titleEl = document.getElementById('main-title');
    const album = albums[currentAlbumIndex];
    
    if (bgPhotoEl && !isGalleryMode) {
        bgPhotoEl.style.opacity = 0;
        setTimeout(() => {
            // 🍏 確保切換相簿時，大背景封面精準對齊該相簿的第一張圖（如美保關的 jinjyadoa.JPG）
            bgPhotoEl.style.backgroundImage = `url('${album.photos[0]}')`;
            bgPhotoEl.style.opacity = 1;
        }, 220);
    }
    
    if (titleEl && !isGalleryMode) {
        // 🍏 核心修正：大標題與相簿封面絕對同步更換，絕不留步
        titleEl.textContent = album.title;
    }
    
    currentPhotoIndex = 0; 
}

// ==========================================
// 3. 第三幕：藝廊模式內單張相片切換
// ==========================================
function updateGalleryPhoto(index) {
    const bgPhotoEl = document.getElementById('bg-photo');
    const counterEl = document.getElementById('gallery-counter');
    const locationHintEl = document.getElementById('location-hint');
    const album = albums[currentAlbumIndex];
    
    if (bgPhotoEl) {
        bgPhotoEl.style.opacity = 0;
        setTimeout(() => {
            bgPhotoEl.style.backgroundImage = `url('${album.photos[index]}')`;
            bgPhotoEl.style.opacity = 1;
        }, 220);
    }
    
    if (locationHintEl) {
        locationHintEl.innerHTML = `P. ${String(index + 1).padStart(2, '0')}`;
    }
    
    if (counterEl) {
        counterEl.textContent = `${String(index + 1).padStart(2, '0')} / ${String(album.photos.length).padStart(2, '0')}`;
    }
}

// ==========================================
// 4. 網格暗房索引生成
// ==========================================
function buildIndexGrid() {
    const gridContainer = document.getElementById('index-grid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = ''; 
    const album = albums[currentAlbumIndex];
    let gridHtml = '';
    
    album.photos.forEach((url, i) => {
        gridHtml += `
            <div class="grid-box">
                <img src="${url}" class="grid-item" data-index="${i}" alt="GR Photo">
            </div>`;
    });
    gridContainer.innerHTML = gridHtml;
    
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const targetIndex = parseInt(e.target.getAttribute('data-index'));
            currentPhotoIndex = targetIndex;
            updateGalleryPhoto(currentPhotoIndex);
            document.getElementById('gallery-index-panel').classList.remove('open');
        });
    });
}

// ==========================================
// 5. 左右控制箭頭控制核心 (單一監聽器管理)
// ==========================================
const btnPrev = document.getElementById('prev-btn') || document.querySelector('.left-zone');
const btnNext = document.getElementById('next-btn') || document.querySelector('.right-zone');

if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止冒泡
        if (!isGalleryMode) {
            // 第一幕首頁：橫向切換相簿專題與大標題
            currentAlbumIndex = (currentAlbumIndex - 1 + albums.length) % albums.length;
            updateAlbumCover();
        } else {
            // 第三幕藝廊：切換單張照片
            const album = albums[currentAlbumIndex];
            currentPhotoIndex = (currentPhotoIndex - 1 + album.photos.length) % album.photos.length;
            updateGalleryPhoto(currentPhotoIndex);
        }
    });
}

if (btnNext) {
    btnNext.addEventListener('click', (e) => {
        e.stopPropagation(); // 阻止冒泡
        if (!isGalleryMode) {
            // 第一幕首頁：橫向切換下一本相簿專題與大標題
            currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
            updateAlbumCover();
        } else {
            // 第三幕藝廊：切換單張照片
            const album = albums[currentAlbumIndex];
            currentPhotoIndex = (currentPhotoIndex + 1) % album.photos.length;
            updateGalleryPhoto(currentPhotoIndex);
        }
    });
}

// ==========================================
// 6. 藝廊模式開關艙狀態控制
// ==========================================
const mainTitleEl = document.getElementById('main-title');
if (mainTitleEl) {
    mainTitleEl.addEventListener('click', () => {
        isGalleryMode = true;
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
        updateGalleryPhoto(0); 
    });
}

const closeGalleryBtnEl = document.getElementById('close-gallery-mode-btn');
if (closeGalleryBtnEl) {
    closeGalleryBtnEl.addEventListener('click', () => {
        isGalleryMode = false;
        document.getElementById('bg-photo').classList.remove('gallery-layout');
        document.getElementById('main-title-container').style.opacity = 1;
        document.getElementById('main-title-container').style.pointerEvents = 'auto';
        document.getElementById('dark-overlay').style.opacity = 0.4;
        document.getElementById('gallery-counter').style.opacity = 0;
        document.getElementById('open-index-btn').style.opacity = 0;
        
        closeGalleryBtnEl.style.opacity = 0;
        closeGalleryBtnEl.style.pointerEvents = 'none';
        document.body.style.overflowY = 'scroll'; 
        updateAlbumCover();
    });
}

if (document.getElementById('open-index-btn')) {
    document.getElementById('open-index-btn').addEventListener('click', () => {
        buildIndexGrid();
        document.getElementById('gallery-index-panel').classList.add('open');
    });
}

if (document.getElementById('close-index-btn')) {
    document.getElementById('close-index-btn').addEventListener('click', () => {
        document.getElementById('gallery-index-panel').classList.remove('open');
    });
}

// ==========================================
// 7. 藝廊模式內滑鼠滾輪動態翻頁
// ==========================================
window.addEventListener('wheel', (e) => {
    if (!isGalleryMode || document.getElementById('gallery-index-panel').classList.contains('open')) return;
    if (isThrottled) return; 
    
    const album = albums[currentAlbumIndex];
    if (e.deltaY > 20) {
        currentPhotoIndex = (currentPhotoIndex + 1) % album.photos.length;
        updateGalleryPhoto(currentPhotoIndex);
        throttleScroll();
    } else if (e.deltaY < -20) {
        currentPhotoIndex = (currentPhotoIndex - 1 + album.photos.length) % album.photos.length;
        updateGalleryPhoto(currentPhotoIndex);
        throttleScroll();
    }
});

function throttleScroll() {
    isThrottled = true;
    setTimeout(() => { isThrottled = false; }, 600); 
}

// ==========================================
// 8. 全域 500vh 時差滾動監聽
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

    const currentAlbum = albums[currentAlbumIndex];

    if (progress <= 1) {
        if (mainTitleContainer) {
            mainTitleContainer.style.opacity = 1 - progress;
            mainTitleContainer.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
            mainTitleContainer.style.pointerEvents = (progress > 0.8) ? 'none' : 'auto';
        }
        if (darkOverlay) darkOverlay.style.opacity = 0.4 * (1 - progress);
        if (locationHint) {
            locationHint.innerHTML = currentAlbum.location; 
            locationHint.style.opacity = Math.min(progress * 1.5, 1);
        }
        if (bgPhoto) bgPhoto.style.opacity = 1;
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    } 
    else if (progress > 1 && progress <= 2) {
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) {
            locationHint.innerHTML = currentAlbum.location; 
            locationHint.style.opacity = 1;
        }
        if (bgPhoto) bgPhoto.style.opacity = 1;
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    }
    else if (progress > 2) {
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

updateAlbumCover();