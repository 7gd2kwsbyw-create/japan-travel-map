// ==========================================
// 1. 照片倉庫 (以香嵐溪為例)
// ==========================================
const photos = [
    "images/korankei/cross_line.JPG",
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
let isGalleryMode = false; // 是否進入了純照片展示模式
let isThrottled = false; // 滾輪節流閥

// ==========================================
// 2. 渲染主畫面相片與序號
// ==========================================
function updateCarousel(index) {
    const bgPhotoEl = document.getElementById('bg-photo');
    const counterEl = document.getElementById('gallery-counter');
    
    // 淡出淡入背景
    if (bgPhotoEl) {
        bgPhotoEl.style.backgroundImage = `url('${photos[index]}')`;
    }
    
    // 更新極簡序號 (例如: 01 / 09)
    if (counterEl) {
        const displayNum = String(index + 1).padStart(2, '0');
        const totalNum = String(photos.length).padStart(2, '0');
        counterEl.textContent = `${displayNum} / ${totalNum}`;
    }
}

// ==========================================
// 3. 進入/退出 藝廊模式
// ==========================================
const mainTitle = document.getElementById('main-title');
if (mainTitle) {
    mainTitle.addEventListener('click', () => {
        isGalleryMode = true;
        
        // 隱藏標題與遮罩，秀出序號與九宮格按鈕
        document.getElementById('main-title-container').style.opacity = 0;
        document.getElementById('main-title-container').style.pointerEvents = 'none';
        document.getElementById('dark-overlay').style.opacity = 0;
        document.getElementById('gallery-counter').style.opacity = 1;
        document.getElementById('open-index-btn').style.opacity = 1;
        
        // 鎖定時差滾動
        document.body.style.overflowY = 'hidden';
    });
}

// ==========================================
// 4. 滾輪/觸控板 高速翻頁 (限藝廊模式)
// ==========================================
window.addEventListener('wheel', (e) => {
    // 只有在進入藝廊，且索引艙沒打開時才觸發
    if (!isGalleryMode || document.getElementById('gallery-index-panel').classList.contains('open')) return;
    
    if (isThrottled) return; // 節流防爆衝
    
    // 判斷滾動方向 (向下滑為正，向上滑為負)
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
    setTimeout(() => { isThrottled = false; }, 800); // 冷卻時間 0.8 秒，確保過渡動畫播完
}

// 保留箭頭點擊作為輔助
document.getElementById('prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateCarousel(currentIndex);
});
document.getElementById('next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % photos.length;
    updateCarousel(currentIndex);
});

// ==========================================
// 5. 網格索引艙 (生成與開關)
// ==========================================
function buildIndexGrid() {
    const gridContainer = document.getElementById('index-grid');
    if (!gridContainer || gridContainer.children.length > 0) return; // 防止重複生成
    
    let gridHtml = '';
    photos.forEach((url, i) => {
        gridHtml += `<img src="${url}" class="grid-item" data-index="${i}" alt="Gallery Photo">`;
    });
    gridContainer.innerHTML = gridHtml;
    
    // 綁定網格點擊跳轉事件
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const targetIndex = parseInt(e.target.getAttribute('data-index'));
            currentIndex = targetIndex;
            updateCarousel(currentIndex);
            
            // 點擊後自動關閉索引艙
            document.getElementById('gallery-index-panel').classList.remove('open');
        });
    });
}

document.getElementById('open-index-btn').addEventListener('click', () => {
    buildIndexGrid();
    document.getElementById('gallery-index-panel').classList.add('open');
});

document.getElementById('close-index-btn').addEventListener('click', () => {
    document.getElementById('gallery-index-panel').classList.remove('open');
});

// ==========================================
// 6. 500vh 時差滾動邏輯 (保留您先前的優化參數)
// ==========================================
window.addEventListener('scroll', () => {
    if (isGalleryMode) return; // 進入藝廊模式後停止計算背景時差

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

// 初始化
updateCarousel(0);