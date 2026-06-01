const albums = [
    {
        title: "深秋的香嵐溪，時間靜止在楓紅之中",
        location: "📍 愛知縣 ． 香嵐溪巴川畔",
        selector: ".aichi",
        spotId: "spot-korankei",
        spotName: "香嵐溪巴川畔",
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
        selector: ".shimane",
        spotId: "spot-miho",
        spotName: "美保神社",
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

const regionNames = {
    'region-hokkaido': '北海道地方',
    'region-tohoku': '東北地方',
    'region-kanto': '關東地方',
    'region-chubu': '中部地方',
    'region-kinki': '近畿地方',
    'region-chugoku': '中國地方',
    'region-shikoku': '四國地方',
    'region-kyushu': '九州地方',
    'region-okinawa': '沖繩地方'
};

let currentAlbumIndex = 0; 
let currentPhotoIndex = 0; 
let isGalleryMode = false;  
let isThrottled = false;   

let currentLayer = 1; 
let activeRegionClass = null;
let activePrefectureGroup = null;
let pinsDropped = false;

function changePhotoWithFade(newUrl, isInitial = false) {
    const bgPhotoEl = document.getElementById('bg-photo');
    if (!bgPhotoEl) return;

    if (isInitial) {
        bgPhotoEl.style.backgroundImage = `url('${newUrl}')`;
        bgPhotoEl.style.opacity = 1;
        bgPhotoEl.style.transition = 'none';
        return;
    }

    bgPhotoEl.style.transition = 'opacity 0.22s ease-in-out';
    bgPhotoEl.style.opacity = 0;

    setTimeout(() => {
        bgPhotoEl.style.backgroundImage = `url('${newUrl}')`;
        bgPhotoEl.style.opacity = 1;
        setTimeout(() => {
            if (!isGalleryMode) bgPhotoEl.style.transition = 'none';
        }, 230);
    }, 220);
}

function updateAlbumCover(isInitial = false) {
    const titleEl = document.getElementById('main-title');
    const album = albums[currentAlbumIndex];
    if (titleEl && !isGalleryMode) titleEl.textContent = album.title;
    changePhotoWithFade(album.photos[0], isInitial);
    currentPhotoIndex = 0; 
}

function updateGalleryPhoto(index) {
    const counterEl = document.getElementById('gallery-counter');
    const locationHintEl = document.getElementById('location-hint');
    const album = albums[currentAlbumIndex];
    if (locationHintEl) locationHintEl.innerHTML = `P. ${String(index + 1).padStart(2, '0')}`;
    if (counterEl) counterEl.textContent = `${String(index + 1).padStart(2, '0')} / ${String(album.photos.length).padStart(2, '0')}`;
    changePhotoWithFade(album.photos[index], false);
}

function buildIndexGrid() {
    const gridContainer = document.getElementById('index-grid');
    if (!gridContainer) return;
    gridContainer.innerHTML = ''; 
    const album = albums[currentAlbumIndex];
    let gridHtml = '';
    album.photos.forEach((url, i) => {
        gridHtml += `<div class="grid-box"><img src="${url}" class="grid-item" data-index="${i}" alt="Photo"></div>`;
    });
    gridContainer.innerHTML = gridHtml;
    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', (e) => {
            currentPhotoIndex = parseInt(e.target.getAttribute('data-index'));
            updateGalleryPhoto(currentPhotoIndex);
            document.getElementById('gallery-index-panel').classList.remove('open');
        });
    });
}

const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isGalleryMode) {
            currentAlbumIndex = (currentAlbumIndex - 1 + albums.length) % albums.length;
            updateAlbumCover(false);
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
            updateAlbumCover(false);
        } else {
            const album = albums[currentAlbumIndex];
            currentPhotoIndex = (currentPhotoIndex + 1) % album.photos.length;
            updateGalleryPhoto(currentPhotoIndex);
        }
    });
}

function openGalleryDirectly(albumIndex) {
    currentAlbumIndex = albumIndex;
    isGalleryMode = true;
    const bgPhotoEl = document.getElementById('bg-photo');
    if(bgPhotoEl) {
        bgPhotoEl.classList.add('gallery-layout');
        bgPhotoEl.style.opacity = 1;
    }
    document.getElementById('main-title-container').style.opacity = 0;
    document.getElementById('main-title-container').style.pointerEvents = 'none';
    document.getElementById('dark-overlay').style.opacity = 0;
    document.getElementById('gallery-counter').style.opacity = 1;
    document.getElementById('open-index-btn').style.opacity = 1;
    
    const closeGalleryBtn = document.getElementById('close-gallery-mode-btn');
    if (closeGalleryBtn) { closeGalleryBtn.style.opacity = 1; closeGalleryBtn.style.pointerEvents = 'auto'; }
    document.body.style.overflowY = 'hidden'; 
    updateGalleryPhoto(0); 
}

const mainTitleEl = document.getElementById('main-title');
if (mainTitleEl) mainTitleEl.addEventListener('click', () => openGalleryDirectly(currentAlbumIndex));

const closeGalleryBtnEl = document.getElementById('close-gallery-mode-btn');
if (closeGalleryBtnEl) {
    closeGalleryBtnEl.addEventListener('click', () => {
        isGalleryMode = false;
        const bgPhotoEl = document.getElementById('bg-photo');
        if(bgPhotoEl) { bgPhotoEl.classList.remove('gallery-layout'); bgPhotoEl.style.transition = 'none'; }
        document.getElementById('main-title-container').style.opacity = 1;
        document.getElementById('main-title-container').style.pointerEvents = 'auto';
        document.getElementById('dark-overlay').style.opacity = 0.4;
        document.getElementById('gallery-counter').style.opacity = 0;
        document.getElementById('open-index-btn').style.opacity = 0;
        closeGalleryBtnEl.style.opacity = 0; closeGalleryBtnEl.style.pointerEvents = 'none';
        document.body.style.overflowY = 'scroll'; 
        updateAlbumCover(true);
    });
}

if (document.getElementById('open-index-btn')) {
    document.getElementById('open-index-btn').addEventListener('click', (e) => {
        e.stopPropagation(); buildIndexGrid();
        document.getElementById('gallery-index-panel').classList.add('open');
    });
}

if (document.getElementById('close-index-btn')) {
    document.getElementById('close-index-btn').addEventListener('click', () => {
        document.getElementById('gallery-index-panel').classList.remove('open');
    });
}

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

function throttleScroll() { isThrottled = true; setTimeout(() => { isThrottled = false; }, 600); }

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

    if (progress < 0.2) {
        if(btnPrev) { btnPrev.style.opacity = "1"; btnPrev.style.pointerEvents = "auto"; }
        if(btnNext) { btnNext.style.opacity = "1"; btnNext.style.pointerEvents = "auto"; }
    } else {
        if(btnPrev) { btnPrev.style.opacity = "0"; btnPrev.style.pointerEvents = "none"; }
        if(btnNext) { btnNext.style.opacity = "0"; btnNext.style.pointerEvents = "none"; }
    }

    if (progress <= 1) {
        if (mainTitleContainer) {
            mainTitleContainer.style.opacity = 1 - progress;
            mainTitleContainer.style.transform = `translate(-50%, calc(-50% - ${progress * 50}px))`;
            mainTitleContainer.style.pointerEvents = (progress > 0.8) ? 'none' : 'auto';
        }
        if (darkOverlay) darkOverlay.style.opacity = 0.4 * (1 - progress);
        if (locationHint) { locationHint.innerHTML = currentAlbum.location; locationHint.style.opacity = Math.min(progress * 1.5, 1); }
        if (bgPhoto) { bgPhoto.style.transition = 'none'; bgPhoto.style.opacity = 1; }
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    } 
    else if (progress > 1 && progress <= 2) {
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) { locationHint.innerHTML = currentAlbum.location; locationHint.style.opacity = 1; }
        if (bgPhoto) { bgPhoto.style.transition = 'none'; bgPhoto.style.opacity = 1; }
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    }
    else if (progress > 2) {
        const stage3Progress = (progress - 2) / 2; 
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        
        if (bgPhoto) { bgPhoto.style.transition = 'none'; bgPhoto.style.opacity = Math.max(0, 1 - stage3Progress * 2.5); }
        if (mapContainer) {
            mapContainer.style.transition = 'none';
            mapContainer.style.opacity = Math.min(stage3Progress * 2.5, 1);
            if (stage3Progress > 0.02) { 
                mapContainer.style.pointerEvents = 'auto'; 
                updateLocationHintText();
            } else { mapContainer.style.pointerEvents = 'none'; }
        }
    }
});

function updateLocationHintText() {
    const hint = document.getElementById('location-hint');
    if (!hint) return;
    hint.style.opacity = 1;
    if (currentLayer === 1) {
        hint.innerHTML = "📍 🔍 請選擇日本九大地方板塊";
    } else if (currentLayer === 2) {
        hint.innerHTML = `📍 ${regionNames[activeRegionClass]} ． 請選擇都道府縣`;
    }
}

// 🍏 修正核心：改用 classList.contains 記號匹配，斬斷 kyushu-okinawa 子字串的模糊誤判
function getRegionClass(gElement) {
    const cl = gElement.classList;
    if (cl.contains('okinawa')) return 'region-okinawa'; // 精準鎖定沖繩本尊
    if (cl.contains('hokkaido')) return 'region-hokkaido';
    if (cl.contains('tohoku')) return 'region-tohoku';
    if (cl.contains('kanto')) return 'region-kanto';
    if (cl.contains('chubu')) return 'region-chubu';
    if (cl.contains('kinki')) return 'region-kinki';
    if (cl.contains('chugoku')) return 'region-chugoku';
    if (cl.contains('shikoku')) return 'region-shikoku';
    if (cl.contains('kyushu') || cl.contains('kyushu-okinawa')) return 'region-kyushu';
    return null;
}

function loadAndInitMap() {
    fetch('japan-map.svg')
        .then(response => response.text())
        .then(svgText => {
            const wrapper = document.getElementById('map-svg-wrapper');
            if(!wrapper) return;
            wrapper.innerHTML = svgText;

            const svgEl = wrapper.querySelector('svg');
            if(!svgEl) return;
            svgEl.setAttribute('id', 'japan-map');
            svgEl.classList.add('map-layer-1'); 

            const zoomGroup = svgEl.querySelector('#map-zoom-group') || svgEl.querySelector('.svg-map');
            if(zoomGroup) zoomGroup.setAttribute('id', 'map-zoom-group');

            const prefContainer = svgEl.querySelector('.prefectures');
            if(!prefContainer) return;

            const prefGroups = prefContainer.querySelectorAll('g.prefecture');
            prefGroups.forEach(g => {
                const rClass = getRegionClass(g);
                if(rClass) {
                    g.classList.add(rClass);
                    // 🍏 徹底切開：將沖繩從原生大組中剔除，防止任何 CSS 穿透與同步閃爍
                    if (rClass === 'region-okinawa') {
                        g.classList.remove('kyushu');
                        g.classList.remove('kyushu-okinawa');
                    }
                }
            });

            const spotsLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            spotsLayer.setAttribute('id', 'spots-layer');
            albums.forEach((album, idx) => {
                spotsLayer.innerHTML += `
                    <g class="map-pin spot-pin" data-album-index="${idx}" id="${album.spotId}">
                        <path class="pin-shape" d="M12,2 C7.03,2 3,6.03 3,11 C3,16.55 12,22 12,22 C12,22 21,16.55 21,11 C21,6.03 16.97,2 12,2 Z" fill="#2ed573"/>
                        <circle cx="12" cy="11" r="3" fill="#fff"/>
                        <text x="16" y="14" class="spot-label">${album.spotName}</text>
                    </g>
                `;
            });
            prefContainer.appendChild(spotsLayer);

            setTimeout(calculateGeometries, 150);
            setupStageEvents();
        })
        .catch(err => console.error("地圖加載失敗:", err));
}

function calculateGeometries() {
    const prefGroups = document.querySelectorAll('.prefectures g.prefecture');
    
    prefGroups.forEach(g => {
        let baseX = 0, baseY = 0;
        const transformAttr = g.getAttribute('transform');
        if (transformAttr) {
            const matches = transformAttr.match(/translate\(([^,]+)px?,\s*([^)]+)px?\)/) || transformAttr.match(/translate\(([^,\s]+)[\s,]+([^)]+)\)/);
            if (matches) { baseX = parseFloat(matches[1]); baseY = parseFloat(matches[2]); }
        }
        const paths = g.querySelectorAll('path, polygon');
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        paths.forEach(p => {
            const box = p.getBBox();
            if(box.width === 0 || box.height === 0) return;
            if (box.x < minX) minX = box.x; if (box.y < minY) minY = box.y;
            if (box.x + box.width > maxX) maxX = box.x + box.width; if (box.y + box.height > maxY) maxY = box.y + box.height;
        });
        if(minX === Infinity) return;
        const cx = baseX + (minX + maxX) / 2;
        const cy = baseY + (minY + maxY) / 2;
        g.setAttribute('data-center-x', cx);
        g.setAttribute('data-center-y', cy);
    });

    albums.forEach((album) => {
        const prefG = document.querySelector(`.prefectures ${album.selector}`);
        const spotPin = document.getElementById(album.spotId);
        if (prefG && spotPin) {
            const cx = parseFloat(prefG.getAttribute('data-center-x'));
            const cy = parseFloat(prefG.getAttribute('data-center-y'));
            spotPin.style.transform = `translate(${cx}px, ${cy}px)`;
        }
    });
}

function setupStageEvents() {
    const svgMap = document.getElementById('japan-map');

    document.querySelectorAll('.prefectures g.prefecture').forEach(g => {
        // 🍏 修正核心：完全改用局部變數，根除全域變數事件競爭引起的呼吸燈同步 Bug
        g.addEventListener('mouseenter', () => {
            const localRegion = getRegionClass(g);
            if (currentLayer === 1) {
                if (localRegion) {
                    document.querySelectorAll(`.prefectures .${localRegion}`).forEach(el => {
                        el.classList.add('region-hover-pulse');
                    });
                    document.getElementById('location-hint').innerHTML = `📍 探索 ➔ ${regionNames[localRegion]}`;
                }
            } else if (currentLayer === 2) {
                if (localRegion && g.classList.contains(activeRegionClass)) {
                    g.classList.add('pref-hover-pulse');
                    const title = g.querySelector('title') ? g.querySelector('title').textContent.split(' / ')[0] : '';
                    document.getElementById('location-hint').innerHTML = `📍 ${regionNames[activeRegionClass]} ➔ ${title}`;
                }
            }
        });

        g.addEventListener('mouseleave', () => {
            const localRegion = getRegionClass(g);
            if (currentLayer === 1) {
                if (localRegion) {
                    document.querySelectorAll(`.prefectures .${localRegion}`).forEach(el => {
                        el.classList.remove('region-hover-pulse');
                    });
                }
            } else if (currentLayer === 2) {
                g.classList.remove('pref-hover-pulse');
            }
            updateLocationHintText();
        });

        g.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentLayer === 1) {
                activeRegionClass = getRegionClass(g);
                if (!activeRegionClass) return;

                const members = document.querySelectorAll(`.prefectures .${activeRegionClass}`);
                let sumX = 0, sumY = 0, count = 0;
                members.forEach(m => {
                    const cx = parseFloat(m.getAttribute('data-center-x'));
                    const cy = parseFloat(m.getAttribute('data-center-y'));
                    if(cx && cy) { sumX += cx; sumY += cy; count++; }
                });
                const rCenterX = sumX / count;
                const rCenterY = sumY / count;

                const zoomGroup = document.getElementById('map-zoom-group');
                zoomGroup.style.transformOrigin = `${rCenterX}px ${rCenterY}px`;
                
                let scaleLevel = (activeRegionClass === 'region-okinawa') ? 5.5 : 2.6;
                zoomGroup.style.transform = `scale(${scaleLevel})`;

                currentLayer = 2;
                svgMap.className = `geolonia-svg-map map-layer-2 ${activeRegionClass}`;
                document.getElementById('back-to-map-btn').style.opacity = 1;
                document.getElementById('back-to-map-btn').style.pointerEvents = 'auto';
                updateLocationHintText();

            } else if (currentLayer === 2) {
                if (!g.classList.contains(activeRegionClass)) return;
                
                const hasAlbum = albums.some(a => g.classList.contains(a.selector.replace('.','')));
                if (!hasAlbum) return;

                activePrefectureGroup = g;
                const pCenterX = parseFloat(g.getAttribute('data-center-x'));
                const pCenterY = parseFloat(g.getAttribute('data-center-y'));

                const zoomGroup = document.getElementById('map-zoom-group');
                zoomGroup.style.transformOrigin = `${pCenterX}px ${pCenterY}px`;
                zoomGroup.style.transform = `scale(6.0)`; 

                currentLayer = 3;
                svgMap.className = `geolonia-svg-map map-layer-3 ${activeRegionClass}`;
                const title = g.querySelector('title') ? g.querySelector('title').textContent.split(' / ')[0] : '';
                document.getElementById('location-hint').innerHTML = `📍 ${title} ． 請點擊綠色大頭針進入專題`;
            }
        });
    });

    document.getElementById('back-to-map-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        const zoomGroup = document.getElementById('map-zoom-group');

        if (currentLayer === 3) {
            const members = document.querySelectorAll(`.prefectures .${activeRegionClass}`);
            let sumX = 0, sumY = 0, count = 0;
            members.forEach(m => {
                const cx = parseFloat(m.getAttribute('data-center-x'));
                const cy = parseFloat(m.getAttribute('data-center-y'));
                if(cx && cy) { sumX += cx; sumY += cy; count++; }
            });
            zoomGroup.style.transformOrigin = `${sumX / count}px ${sumY / count}px`;
            
            let scaleLevel = (activeRegionClass === 'region-okinawa') ? 5.5 : 2.6;
            zoomGroup.style.transform = `scale(${scaleLevel})`;

            currentLayer = 2;
            svgMap.className = `geolonia-svg-map map-layer-2 ${activeRegionClass}`;
            updateLocationHintText();
            hidePreview();
        } else if (currentLayer === 2) {
            zoomGroup.style.transform = `scale(1)`;
            currentLayer = 1;
            svgMap.className = `geolonia-svg-map map-layer-1`;
            document.getElementById('back-to-map-btn').style.opacity = 0;
            document.getElementById('back-to-map-btn').style.pointerEvents = 'none';
            document.querySelectorAll('.prefectures g.prefecture').forEach(el => {
                el.classList.remove('region-hover-pulse', 'pref-hover-pulse');
            });
            activeRegionClass = null;
            updateLocationHintText();
        }
    });

    document.querySelectorAll('.spot-pin').forEach(pin => {
        const albumIndex = parseInt(pin.getAttribute('data-album-index'));
        const album = albums[albumIndex];
        
        pin.addEventListener('mousemove', (e) => {
            if (currentLayer !== 3) return;
            const previewCard = document.getElementById('map-preview-card');
            const previewImg = document.getElementById('map-preview-img');
            const previewTitle = document.getElementById('map-preview-title');
            
            previewImg.src = album.photos[0];
            previewTitle.textContent = album.title;
            previewCard.style.left = `${e.clientX + 20}px`;
            previewCard.style.top = `${e.clientY + 20}px`;
            previewCard.style.opacity = 1;
        });
        
        pin.addEventListener('mouseleave', () => hidePreview());
        pin.addEventListener('click', (e) => {
            e.stopPropagation(); hidePreview();
            openGalleryDirectly(albumIndex);
        });
    });
}

function hidePreview() { document.getElementById('map-preview-card').style.opacity = 0; }

document.addEventListener('DOMContentLoaded', () => {
    updateAlbumCover(true); 
    loadAndInitMap(); 
});