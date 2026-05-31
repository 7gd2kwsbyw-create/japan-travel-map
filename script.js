// ==========================================
// 1. 多相簿全動態資料庫
// ==========================================
const albums = [
    {
        title: "深秋的香嵐溪，時間靜止在楓紅之中",
        location: "📍 愛知縣 ． 香嵐溪巴川畔",
        prefId: "pref-aichi", // 對應 HTML 的群組 ID
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
        title: "寂靜美保關，漫步青石疊通", 
        location: "📍 島根縣 ． 美保神社",
        prefId: "pref-shimane", // 對應 HTML 的群組 ID
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
let isMapZoomed = false; // 地圖是否處於 Zoom-in 狀態
let pinsDropped = false; // 大頭針動畫是否已執行過

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
            bgPhotoEl.style.backgroundImage = `url('${album.photos[0]}')`;
            bgPhotoEl.style.opacity = 1;
        }, 220);
    }
    
    if (titleEl && !isGalleryMode) {
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
// 5. 左右控制箭頭控制核心
// ==========================================
const btnPrev = document.getElementById('prev-btn') || document.querySelector('.left-zone');
const btnNext = document.getElementById('next-btn') || document.querySelector('.right-zone');

if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isGalleryMode) {
            currentAlbumIndex = (currentAlbumIndex - 1 + albums.length) % albums.length;
            updateAlbumCover();
        } else {
            const album = albums[currentAlbumIndex];
            currentPhotoIndex = (currentPhotoIndex - 1 + album.photos.length) % album.photos.length;
            updateGalleryPhoto(currentPhotoIndex);
        }
    });
}

if (btnNext) {
    btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isGalleryMode) {
            currentAlbumIndex = (currentAlbumIndex + 1) % albums.length;
            updateAlbumCover();
        } else {
            const album = albums[currentAlbumIndex];
            currentPhotoIndex = (currentPhotoIndex + 1) % album.photos.length;
            updateGalleryPhoto(currentPhotoIndex);
        }
    });
}

// ==========================================
// 6. 藝廊模式開關艙狀態控制
// ==========================================
function openGalleryDirectly(albumIndex) {
    currentAlbumIndex = albumIndex;
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
}

const mainTitleEl = document.getElementById('main-title');
if (mainTitleEl) {
    mainTitleEl.addEventListener('click', () => {
        openGalleryDirectly(currentAlbumIndex);
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
        
        // 離開藝廊時還原地圖提示
        if(window.scrollY > window.innerHeight * 2) {
            document.getElementById('location-hint').innerHTML = "📍 點擊行政區探索日本散策";
        }
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
        // 第三幕：進入地圖舞台
        const stage3Progress = (progress - 2) / 2; 
        const easedProgress = Math.pow(stage3Progress, 2); 
        
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        
        if (bgPhoto) bgPhoto.style.opacity = Math.max(0, 1 - easedProgress * 2); 
        
        if (mapContainer) {
            mapContainer.style.opacity = Math.min(easedProgress * 2, 1);
            if (easedProgress > 0.1) { 
                mapContainer.style.pointerEvents = 'auto'; 
                // 當滑到第三幕且未釘下大頭針時，觸發動畫
                if(!pinsDropped) triggerPinsDropping();
                if(!isMapZoomed && locationHint) {
                    locationHint.innerHTML = "📍 點擊行政區探索日本散策";
                    locationHint.style.opacity = 1;
                }
            } else { 
                mapContainer.style.pointerEvents = 'none'; 
            }
        }
    }
});

// ==========================================
// 9. 日本地圖核心交互控制 (完美適應真實 SVG 幾何計算版)
// ==========================================

// 自動根據行政區 path 計算幾何中心點，並定位大頭針
function initPinPositions() {
    // 1. 定位縣市級紅針
    document.querySelectorAll('.prefecture-group').forEach(group => {
        const path = group.querySelector('.prefecture');
        const prefPin = group.querySelector('.pref-pin');
        
        if (path && prefPin) {
            // 🍏 自動抓取您 SVG 檔案中該行政區的真實邊界與中心點
            const bbox = path.getBBox();
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;
            
            // 儲存中心座標供 Zoom 使用
            group.setAttribute('data-center-x', centerX);
            group.setAttribute('data-center-y', centerY);
            
            // 移至該中心點
            prefPin.style.transform = `translate(${centerX}px, ${centerY}px)`;
        }
    });

    // 2. 定位詳細景點綠針 (這裡以島根與愛知中心點做微調偏移，避免重疊)
    const spotKorankei = document.getElementById('spot-korankei');
    const prefAichi = document.getElementById('pref-aichi');
    if (spotKorankei && prefAichi) {
        const cx = parseFloat(prefAichi.getAttribute('data-center-x')) + 5; // 略微偏移
        const cy = parseFloat(prefAichi.getAttribute('data-center-y')) + 5;
        spotKorankei.style.transform = `translate(${cx}px, ${cy}px)`;
    }

    const spotMiho = document.getElementById('spot-miho');
    const prefShimane = document.getElementById('pref-shimane');
    if (spotMiho && prefShimane) {
        const cx = parseFloat(prefShimane.getAttribute('data-center-x')) - 10;
        const cy = parseFloat(prefShimane.getAttribute('data-center-y')) - 5;
        spotMiho.style.transform = `translate(${cx}px, ${cy}px)`;
    }
}

// 緩慢釘上大頭針動畫
function triggerPinsDropping() {
    pinsDropped = true;
    document.querySelectorAll('.pref-pin').forEach((pin, index) => {
        // 取得 initPinPositions 計算好的真實目標坐標
        const transformStr = pin.style.transform; 
        if (!transformStr) return;
        
        const matches = transformStr.match(/translate\(([^,]+)px,\s*([^)]+)px\)/);
        if (!matches) return;
        
        const targetX = parseFloat(matches[1]);
        const targetY = parseFloat(matches[2]);
        
        // 初始狀態：從上方 100px 處掉落
        pin.style.transition = 'none';
        pin.style.transform = `translate(${targetX}px, ${targetY - 100}px)`;
        pin.style.opacity = 0;
        
        setTimeout(() => {
            pin.style.transition = 'transform 1.0s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease';
            pin.style.transform = `translate(${targetX}px, ${targetY}px)`;
            pin.style.opacity = 1;
        }, index * 200 + 100); 
    });
}

// 行政區點擊 Zoom-in 處理
document.querySelectorAll('.prefecture-group').forEach(group => {
    group.addEventListener('click', (e) => {
        if (isMapZoomed) return;
        e.stopPropagation();
        
        const prefName = group.getAttribute('data-pref');
        const targetX = group.getAttribute('data-center-x');
        const targetY = group.getAttribute('data-center-y');
        
        if (!targetX || !targetY) return;
        
        // 根據您提供的精細 SVG，聚焦至該縣市中心
        const zoomGroup = document.getElementById('map-zoom-group');
        zoomGroup.style.transformOrigin = `${targetX}px ${targetY}px`;
        zoomGroup.style.transform = `scale(4)`; // 放大 4 倍看細節
        
        isMapZoomed = true;
        document.getElementById('japan-map').classList.add('zoomed');
        document.getElementById('back-to-map-btn').style.opacity = 1;
        document.getElementById('back-to-map-btn').style.pointerEvents = 'auto';
        
        document.getElementById('location-hint').innerHTML = `📍 ${prefName} ． 請選擇探索景點`;
    });
});

// 返回完整地圖全圖
document.getElementById('back-to-map-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('map-zoom-group').style.transform = `scale(1)`;
    
    isMapZoomed = false;
    document.getElementById('japan-map').classList.remove('zoomed');
    document.getElementById('back-to-map-btn').style.opacity = 0;
    document.getElementById('back-to-map-btn').style.pointerEvents = 'none';
    document.getElementById('location-hint').innerHTML = "📍 點擊行政區探索日本散策";
    hidePreview();
});

// 景點大頭針 Hover 與點擊事件控制
document.querySelectorAll('.spot-pin').forEach(pin => {
    const albumIndex = parseInt(pin.getAttribute('data-album-index'));
    const album = albums[albumIndex];
    
    pin.addEventListener('mousemove', (e) => {
        if (!isMapZoomed) return;
        const previewCard = document.getElementById('map-preview-card');
        const previewImg = document.getElementById('map-preview-img');
        const previewTitle = document.getElementById('map-preview-title');
        
        previewImg.src = album.photos[0];
        previewTitle.textContent = album.title;
        
        previewCard.style.left = `${e.clientX + 20}px`;
        previewCard.style.top = `${e.clientY + 20}px`;
        previewCard.style.opacity = 1;
    });
    
    pin.addEventListener('mouseleave', () => { hidePreview(); });
    
    pin.addEventListener('click', (e) => {
        e.stopPropagation();
        hidePreview();
        openGalleryDirectly(albumIndex);
    });
});

function hidePreview() {
    document.getElementById('map-preview-card').style.opacity = 0;
}

// 監聽地圖容器渲染完成後再載入坐標，防範寬高未就緒 Bug
window.addEventListener('load', () => {
    initPinPositions();
});