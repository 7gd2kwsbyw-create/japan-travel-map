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
    'region-kyushu': '九州地方'
};

const regionFitOptions = {
    'region-hokkaido': { padding: 1.35, minWidth: 360 },
    'region-tohoku': { padding: 1.45, minWidth: 270 },
    'region-kanto': { padding: 1.55, minWidth: 210 },
    'region-chubu': { padding: 1.55, minWidth: 260 },
    'region-kinki': { padding: 1.65, minWidth: 210 },
    'region-chugoku': { padding: 1.55, minWidth: 230 },
    'region-shikoku': { padding: 1.45, minWidth: 185 },
    'region-kyushu': { padding: 1.12, minWidth: 165 }
};

const MAP_ANIMATION_FAST = 520;

let currentAlbumIndex = 0;
let currentPhotoIndex = 0;
let isGalleryMode = false;
let isThrottled = false;

let currentLayer = 1;
let activeRegionClass = null;
let activePrefectureGroup = null;
let currentViewBox = { x: 0, y: 0, width: 1000, height: 1000 };
let originalViewBox = { x: 0, y: 0, width: 1000, height: 1000 };
let viewBoxAnimationId = null;

function changePhotoWithFade(newUrl, isInitial = false) {
    const bgPhotoEl = document.getElementById('bg-photo');
    if (!bgPhotoEl) return;

    const applyPhoto = () => {
        bgPhotoEl.style.backgroundImage = `url('${newUrl}')`;

        if (bgPhotoEl.classList.contains('gallery-layout')) {
            const probe = new Image();
            probe.onload = () => {
                bgPhotoEl.classList.toggle('portrait-layout', probe.naturalHeight > probe.naturalWidth);
            };
            probe.src = newUrl;
        } else {
            bgPhotoEl.classList.remove('portrait-layout');
        }
    };

    if (isInitial) {
        applyPhoto();
        bgPhotoEl.style.opacity = 1;
        bgPhotoEl.style.transition = 'none';
        return;
    }

    bgPhotoEl.style.transition = 'opacity 0.22s ease-in-out';
    bgPhotoEl.style.opacity = 0;

    setTimeout(() => {
        applyPhoto();
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

    album.photos.forEach((url, i) => {
        const box = document.createElement('div');
        box.className = 'grid-box';

        const img = document.createElement('img');
        img.src = url;
        img.className = 'grid-item';
        img.dataset.index = String(i);
        img.alt = 'Photo';

        box.appendChild(img);
        gridContainer.appendChild(box);
    });

    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', (e) => {
            currentPhotoIndex = parseInt(e.target.getAttribute('data-index'), 10);
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
    if (bgPhotoEl) {
        bgPhotoEl.classList.add('gallery-layout');
        bgPhotoEl.style.opacity = 1;
    }

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
if (mainTitleEl) mainTitleEl.addEventListener('click', () => openGalleryDirectly(currentAlbumIndex));

const closeGalleryBtnEl = document.getElementById('close-gallery-mode-btn');
if (closeGalleryBtnEl) {
    closeGalleryBtnEl.addEventListener('click', () => {
        isGalleryMode = false;

        const bgPhotoEl = document.getElementById('bg-photo');
        if (bgPhotoEl) {
            bgPhotoEl.classList.remove('gallery-layout');
            bgPhotoEl.classList.remove('portrait-layout');
            bgPhotoEl.style.transition = 'none';
        }

        document.getElementById('main-title-container').style.opacity = 1;
        document.getElementById('main-title-container').style.pointerEvents = 'auto';
        document.getElementById('dark-overlay').style.opacity = 0.4;
        document.getElementById('gallery-counter').style.opacity = 0;
        document.getElementById('open-index-btn').style.opacity = 0;
        closeGalleryBtnEl.style.opacity = 0;
        closeGalleryBtnEl.style.pointerEvents = 'none';
        document.body.style.overflowY = 'scroll';
        updateAlbumCover(true);
    });
}

if (document.getElementById('open-index-btn')) {
    document.getElementById('open-index-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        buildIndexGrid();
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

function throttleScroll() {
    isThrottled = true;
    setTimeout(() => { isThrottled = false; }, 600);
}

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
        if (btnPrev) { btnPrev.style.opacity = '1'; btnPrev.style.pointerEvents = 'auto'; }
        if (btnNext) { btnNext.style.opacity = '1'; btnNext.style.pointerEvents = 'auto'; }
    } else {
        if (btnPrev) { btnPrev.style.opacity = '0'; btnPrev.style.pointerEvents = 'none'; }
        if (btnNext) { btnNext.style.opacity = '0'; btnNext.style.pointerEvents = 'none'; }
    }

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
            locationHint.classList.remove('light-mode');
        }
        if (bgPhoto) { bgPhoto.style.transition = 'none'; bgPhoto.style.opacity = 1; }
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    } else if (progress > 1 && progress <= 2) {
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) {
            locationHint.innerHTML = currentAlbum.location;
            locationHint.style.opacity = 1;
            locationHint.classList.remove('light-mode');
        }
        if (bgPhoto) { bgPhoto.style.transition = 'none'; bgPhoto.style.opacity = 1; }
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    } else if (progress > 2) {
        const stage3Progress = (progress - 2) / 2;
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (bgPhoto) { bgPhoto.style.transition = 'none'; bgPhoto.style.opacity = Math.max(0, 1 - stage3Progress * 2.5); }

        if (mapContainer) {
            mapContainer.style.transition = 'none';
            const mapOpacity = Math.min(stage3Progress * 2.5, 1);
            mapContainer.style.opacity = mapOpacity;
            if (stage3Progress > 0.02) {
                mapContainer.style.pointerEvents = 'auto';
                updateLocationHintText();
                if (locationHint) {
                    locationHint.classList.toggle('light-mode', mapOpacity > 0.72);
                }
            } else {
                mapContainer.style.pointerEvents = 'none';
                if (locationHint) locationHint.classList.remove('light-mode');
            }
        }
    }
});

function updateLocationHintText() {
    const hint = document.getElementById('location-hint');
    if (!hint) return;

    hint.style.opacity = 1;
    if (currentLayer === 1) {
        hint.innerHTML = '📍 🔍 請選擇日本八大地方板塊';
    } else if (currentLayer === 2) {
        hint.innerHTML = `📍 ${regionNames[activeRegionClass]} ． 請選擇都道府縣`;
    } else if (currentLayer === 3 && activePrefectureGroup) {
        const title = getPrefectureTitle(activePrefectureGroup);
        hint.innerHTML = `📍 ${title} ． 請點擊綠色大頭針進入專題`;
    }
}

function getPrefectureTitle(g) {
    const titleEl = g ? g.querySelector('title') : null;
    return titleEl ? titleEl.textContent.split(' / ')[0] : '';
}

function getRegionClass(gElement) {
    const codeAttr = gElement.getAttribute('data-code');
    if (!codeAttr) return null;

    const code = parseInt(codeAttr, 10);
    if (code === 47) return 'region-okinawa';
    if (code === 1) return 'region-hokkaido';
    if (code >= 2 && code <= 7) return 'region-tohoku';
    if (code >= 8 && code <= 14) return 'region-kanto';
    if (code >= 15 && code <= 23) return 'region-chubu';
    if (code >= 24 && code <= 30) return 'region-kinki';
    if (code >= 31 && code <= 35) return 'region-chugoku';
    if (code >= 36 && code <= 39) return 'region-shikoku';
    if (code >= 40 && code <= 46) return 'region-kyushu';
    return null;
}

function setSvgMapClass(layerClass) {
    const svgMap = document.getElementById('japan-map');
    if (!svgMap) return;
    svgMap.setAttribute('class', `geolonia-svg-map ${layerClass}`.trim());
}

function setActiveMapFocus(prefectureGroup = null, albumIndex = null) {
    document.querySelectorAll('.prefectures g.prefecture').forEach(el => {
        el.classList.toggle('active-prefecture', el === prefectureGroup);
    });

    document.querySelectorAll('.spot-pin').forEach(pin => {
        pin.classList.toggle('active-spot', pin.getAttribute('data-album-index') === String(albumIndex));
    });
}

function setViewBox(box) {
    const svgMap = document.getElementById('japan-map');
    if (!svgMap) return;

    currentViewBox = { ...box };
    svgMap.setAttribute('viewBox', `${box.x} ${box.y} ${box.width} ${box.height}`);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function animateViewBox(targetBox, duration = 850) {
    if (viewBoxAnimationId) cancelAnimationFrame(viewBoxAnimationId);

    const startBox = { ...currentViewBox };
    const startTime = performance.now();

    function tick(now) {
        const rawProgress = Math.min((now - startTime) / duration, 1);
        const p = easeOutCubic(rawProgress);

        const nextBox = {
            x: startBox.x + (targetBox.x - startBox.x) * p,
            y: startBox.y + (targetBox.y - startBox.y) * p,
            width: startBox.width + (targetBox.width - startBox.width) * p,
            height: startBox.height + (targetBox.height - startBox.height) * p
        };

        setViewBox(nextBox);

        if (rawProgress < 1) {
            viewBoxAnimationId = requestAnimationFrame(tick);
        } else {
            viewBoxAnimationId = null;
            setViewBox(targetBox);
        }
    }

    viewBoxAnimationId = requestAnimationFrame(tick);
}

function getBoundsInSvg(elements) {
    const svgMap = document.getElementById('japan-map');
    if (!svgMap || !elements || !elements.length) return null;

    const svgScreenMatrix = svgMap.getScreenCTM();
    if (!svgScreenMatrix) return null;

    const screenToSvg = svgScreenMatrix.inverse();
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    elements.forEach(el => {
        if (!el || el.style.display === 'none') return;

        let box;
        try {
            box = el.getBBox();
        } catch (err) {
            return;
        }

        if (!box || box.width === 0 || box.height === 0) return;

        const localToScreen = el.getScreenCTM();
        if (!localToScreen) return;

        const corners = [
            { x: box.x, y: box.y },
            { x: box.x + box.width, y: box.y },
            { x: box.x, y: box.y + box.height },
            { x: box.x + box.width, y: box.y + box.height }
        ];

        corners.forEach(corner => {
            const point = svgMap.createSVGPoint();
            point.x = corner.x;
            point.y = corner.y;

            const screenPoint = point.matrixTransform(localToScreen);
            const svgPoint = screenPoint.matrixTransform(screenToSvg);

            minX = Math.min(minX, svgPoint.x);
            minY = Math.min(minY, svgPoint.y);
            maxX = Math.max(maxX, svgPoint.x);
            maxY = Math.max(maxY, svgPoint.y);
        });
    });

    if (!Number.isFinite(minX) || !Number.isFinite(minY) || !Number.isFinite(maxX) || !Number.isFinite(maxY)) {
        return null;
    }

    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}

function getRegionBounds(regionClass) {
    const members = Array.from(document.querySelectorAll(`.prefectures .${regionClass}`));
    return getBoundsInSvg(members);
}

function getPrefectureBounds(prefectureGroup) {
    return getBoundsInSvg([prefectureGroup]);
}

function fitMapToBounds(bounds, options = {}) {
    const svgMap = document.getElementById('japan-map');
    if (!svgMap || !bounds) return;

    const padding = options.padding ?? 1.45;
    const minWidth = options.minWidth ?? 0;
    const duration = options.duration ?? MAP_ANIMATION_FAST;

    const svgWidth = svgMap.clientWidth || originalViewBox.width;
    const svgHeight = svgMap.clientHeight || originalViewBox.height;
    const viewportRatio = svgWidth / svgHeight;

    let targetWidth = Math.max(bounds.width * padding, minWidth);
    let targetHeight = bounds.height * padding;

    if (targetWidth / targetHeight > viewportRatio) {
        targetHeight = targetWidth / viewportRatio;
    } else {
        targetWidth = targetHeight * viewportRatio;
    }

    if (targetWidth < minWidth) {
        targetWidth = minWidth;
        targetHeight = targetWidth / viewportRatio;
    }

    const centerX = bounds.x + bounds.width / 2;
    const centerY = bounds.y + bounds.height / 2;

    const targetBox = {
        x: centerX - targetWidth / 2,
        y: centerY - targetHeight / 2,
        width: targetWidth,
        height: targetHeight
    };

    animateViewBox(targetBox, duration);
}

function resetMapView() {
    animateViewBox(originalViewBox, MAP_ANIMATION_FAST);
}

function getCenterInsidePrefectureContainer(g) {
    const svgMap = document.getElementById('japan-map');
    if (!svgMap || !g) return { x: 500, y: 500 };

    let box;
    try {
        box = g.getBBox();
    } catch (err) {
        return { x: 500, y: 500 };
    }

    let matrix = svgMap.createSVGMatrix();
    if (g.transform && g.transform.baseVal && g.transform.baseVal.numItems > 0) {
        matrix = g.transform.baseVal.consolidate().matrix;
    }

    const point = svgMap.createSVGPoint();
    point.x = box.x + box.width / 2;
    point.y = box.y + box.height / 2;

    return point.matrixTransform(matrix);
}

function loadAndInitMap() {
    fetch('japan-map.svg')
        .then(response => response.text())
        .then(svgText => {
            const wrapper = document.getElementById('map-svg-wrapper');
            if (!wrapper) return;

            wrapper.innerHTML = svgText;

            const svgEl = wrapper.querySelector('svg');
            if (!svgEl) return;

            svgEl.setAttribute('id', 'japan-map');
            svgEl.setAttribute('class', 'geolonia-svg-map map-layer-1');
            svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');

            const initialBox = svgEl.viewBox.baseVal;
            originalViewBox = {
                x: initialBox.x || 0,
                y: initialBox.y || 0,
                width: initialBox.width || 1000,
                height: initialBox.height || 1000
            };
            currentViewBox = { ...originalViewBox };

            const zoomGroup = svgEl.querySelector('#map-zoom-group') || svgEl.querySelector('.svg-map');
            if (zoomGroup) {
                zoomGroup.setAttribute('id', 'map-zoom-group');
                zoomGroup.style.transform = 'none';
                zoomGroup.style.transformOrigin = '0 0';
            }

            const prefContainer = svgEl.querySelector('.prefectures');
            if (!prefContainer) return;

            const prefGroups = prefContainer.querySelectorAll('g.prefecture');
            prefGroups.forEach(g => {
                const rClass = getRegionClass(g);
                const dirtyClasses = ['hokkaido', 'tohoku', 'kanto', 'chubu', 'kinki', 'chugoku', 'shikoku', 'kyushu', 'okinawa', 'kyushu-okinawa'];
                dirtyClasses.forEach(c => g.classList.remove(c));

                if (rClass) {
                    if (rClass === 'region-okinawa') {
                        g.style.display = 'none';
                    } else {
                        g.classList.add(rClass);
                    }
                }
            });

            const spotsLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            spotsLayer.setAttribute('id', 'spots-layer');

            albums.forEach((album, idx) => {
                const pin = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                pin.setAttribute('class', 'map-pin spot-pin');
                pin.setAttribute('data-album-index', String(idx));
                pin.setAttribute('id', album.spotId);

                pin.innerHTML = `
                    <g transform="translate(-12, -22)">
                        <path d="M12,2 C7.03,2 3,6.03 3,11 C3,16.55 12,22 12,22 C12,22 21,16.55 21,11 C21,6.03 16.97,2 12,2 Z" fill="#2ed573"/>
                        <circle cx="12" cy="11" r="3" fill="#fff"/>
                    </g>
                    <text x="16" y="14" class="spot-label">${album.spotName}</text>
                `;
                spotsLayer.appendChild(pin);
            });
            prefContainer.appendChild(spotsLayer);

            requestAnimationFrame(() => {
                calculateGeometries();
                setupStageEvents();
            });
        })
        .catch(err => console.error('地圖加載失敗:', err));
}

function calculateGeometries() {
    const svgEl = document.getElementById('japan-map');
    const prefGroups = document.querySelectorAll('.prefectures g.prefecture');
    if (!svgEl) return;

    prefGroups.forEach(g => {
        if (g.style.display === 'none') return;

        const parts = Array.from(g.querySelectorAll('path, polygon'));
        if (parts.length === 0) return;

        let matrix = svgEl.createSVGMatrix();
        if (g.transform && g.transform.baseVal && g.transform.baseVal.numItems > 0) {
            matrix = g.transform.baseVal.consolidate().matrix;
        }

        let maxArea = 0;
        let mainlandCenter = { x: 0, y: 0 };

        const partData = parts.map(part => {
            const box = part.getBBox();
            const point = svgEl.createSVGPoint();
            point.x = box.x + box.width / 2;
            point.y = box.y + box.height / 2;
            const center = point.matrixTransform(matrix);
            return {
                part,
                area: box.width * box.height,
                cx: center.x,
                cy: center.y
            };
        });

        partData.forEach(d => {
            if (d.area > maxArea) {
                maxArea = d.area;
                mainlandCenter = { x: d.cx, y: d.cy };
            }
        });

        partData.forEach(d => {
            const distance = Math.hypot(d.cx - mainlandCenter.x, d.cy - mainlandCenter.y);
            if (distance > 220) d.part.remove();
        });

        const bounds = getPrefectureBounds(g);
        if (bounds) {
            g.dataset.mapX = String(bounds.x);
            g.dataset.mapY = String(bounds.y);
            g.dataset.mapWidth = String(bounds.width);
            g.dataset.mapHeight = String(bounds.height);
        }

        const center = getCenterInsidePrefectureContainer(g);
        g.setAttribute('data-center-x', String(center.x));
        g.setAttribute('data-center-y', String(center.y));
    });

    albums.forEach(album => {
        const prefG = document.querySelector(`.prefectures ${album.selector}`);
        const spotPin = document.getElementById(album.spotId);
        if (!prefG || !spotPin) return;

        const cx = parseFloat(prefG.getAttribute('data-center-x'));
        const cy = parseFloat(prefG.getAttribute('data-center-y'));
        if (Number.isFinite(cx) && Number.isFinite(cy)) {
            spotPin.setAttribute('transform', `translate(${cx}, ${cy})`);
        }
    });
}

function setupStageEvents() {
    const svgMap = document.getElementById('japan-map');
    const backBtn = document.getElementById('back-to-map-btn');
    if (!svgMap) return;

    document.querySelectorAll('.prefectures g.prefecture').forEach(g => {
        g.addEventListener('mouseenter', () => {
            if (g.style.display === 'none') return;
            const localRegion = getRegionClass(g);
            const hint = document.getElementById('location-hint');

            if (currentLayer === 1) {
                if (localRegion) {
                    document.querySelectorAll(`.prefectures .${localRegion}`).forEach(el => el.classList.add('region-hover-pulse'));
                    if (hint) hint.innerHTML = `📍 探索 ➔ ${regionNames[localRegion]}`;
                }
            } else if (currentLayer === 2) {
                if (localRegion && g.classList.contains(activeRegionClass)) {
                    g.classList.add('pref-hover-pulse');
                    if (hint) hint.innerHTML = `📍 ${regionNames[activeRegionClass]} ➔ ${getPrefectureTitle(g)}`;
                }
            }
        });

        g.addEventListener('mouseleave', () => {
            const localRegion = getRegionClass(g);

            if (currentLayer === 1) {
                if (localRegion) {
                    document.querySelectorAll(`.prefectures .${localRegion}`).forEach(el => el.classList.remove('region-hover-pulse'));
                }
            } else if (currentLayer === 2) {
                g.classList.remove('pref-hover-pulse');
            }

            updateLocationHintText();
        });

        g.addEventListener('click', (e) => {
            e.stopPropagation();
            if (g.style.display === 'none') return;

            if (currentLayer === 1) {
                activeRegionClass = getRegionClass(g);
                if (!activeRegionClass) return;

                const bounds = getRegionBounds(activeRegionClass);
                const fit = regionFitOptions[activeRegionClass] || { padding: 1.45, minWidth: 220 };
                fitMapToBounds(bounds, {
                    padding: fit.padding,
                    minWidth: fit.minWidth,
                    duration: MAP_ANIMATION_FAST
                });

                currentLayer = 2;
                activePrefectureGroup = null;
                setActiveMapFocus();
                setSvgMapClass(`map-layer-2 ${activeRegionClass}`);

                if (backBtn) {
                    backBtn.style.opacity = 1;
                    backBtn.style.pointerEvents = 'auto';
                }

                updateLocationHintText();
            } else if (currentLayer === 2) {
                if (!g.classList.contains(activeRegionClass)) return;

                const hasAlbum = albums.some(a => g.classList.contains(a.selector.replace('.', '')));
                if (!hasAlbum) return;

                activePrefectureGroup = g;
                const albumIndex = albums.findIndex(a => g.classList.contains(a.selector.replace('.', '')));
                setActiveMapFocus(g, albumIndex);
                const bounds = getPrefectureBounds(g);
                fitMapToBounds(bounds, {
                    padding: 2.55,
                    minWidth: 105,
                    duration: MAP_ANIMATION_FAST
                });

                currentLayer = 3;
                setSvgMapClass(`map-layer-3 ${activeRegionClass}`);
                updateLocationHintText();
            }
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            if (currentLayer === 3) {
                const bounds = getRegionBounds(activeRegionClass);
                const fit = regionFitOptions[activeRegionClass] || { padding: 1.45, minWidth: 220 };
                fitMapToBounds(bounds, {
                    padding: fit.padding,
                    minWidth: fit.minWidth,
                    duration: MAP_ANIMATION_FAST
                });

                currentLayer = 2;
                activePrefectureGroup = null;
                setActiveMapFocus();
                setSvgMapClass(`map-layer-2 ${activeRegionClass}`);
                hidePreview();
                updateLocationHintText();
            } else if (currentLayer === 2) {
                resetMapView();
                currentLayer = 1;
                activeRegionClass = null;
                activePrefectureGroup = null;
                setActiveMapFocus();
                setSvgMapClass('map-layer-1');

                backBtn.style.opacity = 0;
                backBtn.style.pointerEvents = 'none';

                document.querySelectorAll('.prefectures g.prefecture').forEach(el => {
                    el.classList.remove('region-hover-pulse', 'pref-hover-pulse');
                });

                hidePreview();
                updateLocationHintText();
            }
        });
    }

    document.querySelectorAll('.spot-pin').forEach(pin => {
        const albumIndex = parseInt(pin.getAttribute('data-album-index'), 10);
        const album = albums[albumIndex];

        pin.addEventListener('mousemove', (e) => {
            if (currentLayer !== 3) return;

            const previewCard = document.getElementById('map-preview-card');
            const previewImg = document.getElementById('map-preview-img');
            const previewTitle = document.getElementById('map-preview-title');
            if (!previewCard || !previewImg || !previewTitle) return;

            previewImg.src = album.photos[0];
            previewTitle.textContent = album.title;
            previewCard.style.left = `${e.clientX + 20}px`;
            previewCard.style.top = `${e.clientY + 20}px`;
            previewCard.style.opacity = 1;
        });

        pin.addEventListener('mouseleave', () => hidePreview());
        pin.addEventListener('click', (e) => {
            e.stopPropagation();
            hidePreview();
            openGalleryDirectly(albumIndex);
        });
    });
}

function hidePreview() {
    const card = document.getElementById('map-preview-card');
    if (card) card.style.opacity = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    updateAlbumCover(true);
    loadAndInitMap();
});
