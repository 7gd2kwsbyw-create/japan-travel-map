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
        title: "犬山城上望木曾川，午後光影裡的天守",
        location: "📍 愛知縣 ． 犬山城",
        selector: ".aichi",
        spotId: "spot-inuyama-castle",
        spotName: "犬山城",
        photos: [
            "images/inuyama-castle/01_inuyama_castle_keep.jpg",
            "images/inuyama-castle/02_inuyama_castle_window_kiso_river.jpg",
            "images/inuyama-castle/03_kiso_river_evening_bridge.jpg",
            "images/inuyama-castle/04_inuyama_castle_town_riverside.jpg",
            "images/inuyama-castle/05_kiso_river_city_panorama.jpg"
        ]
    },
    {
        title: "深秋楓紅的下呂街道，在加恵瑠神社祈求無事帰る",
        location: "📍 岐阜縣 ． 下呂溫泉與加恵瑠神社",
        selector: ".gifu",
        spotId: "spot-gero-kaeru-shrine",
        spotName: "下呂溫泉與加恵瑠神社",
        photos: [
            "images/gero-kaeru-shrine/01_kaeru_shrine_frog_ema.jpg",
            "images/gero-kaeru-shrine/02_gero_onsen_street_shop.jpg",
            "images/gero-kaeru-shrine/03_autumn_maple_lane.jpg",
            "images/gero-kaeru-shrine/04_red_maple_closeup.jpg",
            "images/gero-kaeru-shrine/05_frog_chozu_water_basin.jpg",
            "images/gero-kaeru-shrine/06_kaeru_shrine_ema_rack.jpg",
            "images/gero-kaeru-shrine/07_frog_statue_under_tree.jpg",
            "images/gero-kaeru-shrine/08_gero_pudding_shop.jpg",
            "images/gero-kaeru-shrine/09_frog_fire_hydrant_cover.jpg",
            "images/gero-kaeru-shrine/10_autumn_river_maples.jpg"
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
    },
    {
        title: "境港單車追日落，水木茂之道的日與夜",
        location: "📍 鳥取縣 ． 境港",
        selector: ".tottori",
        spotId: "spot-sakaiminato-mizuki",
        spotName: "境港與水木茂之道",
        photos: [
            "images/sakaiminato-mizuki/03_bicycles_by_harbor_sunset.jpg",
            "images/sakaiminato-mizuki/01_sakai_harbor_mountains_evening.jpg",
            "images/sakaiminato-mizuki/02_fishing_boat_sunflare.jpg",
            "images/sakaiminato-mizuki/04_stingray_under_harbor_water.jpg",
            "images/sakaiminato-mizuki/05_vertical_sea_sunset_reflection.jpg",
            "images/sakaiminato-mizuki/06_yokai_manju_night_street.jpg",
            "images/sakaiminato-mizuki/07_night_vending_machine_and_dogs.jpg",
            "images/sakaiminato-mizuki/08_red_signal_tatsumiya_shop.jpg",
            "images/sakaiminato-mizuki/09_blue_signal_tatsumiya_shop.jpg",
            "images/sakaiminato-mizuki/10_medama_oyaji_lantern.jpg",
            "images/sakaiminato-mizuki/11_mizuki_shrine_entrance.jpg",
            "images/sakaiminato-mizuki/12_market_delivery_van.jpg",
            "images/sakaiminato-mizuki/13_mitsubishi_battery_vending.jpg",
            "images/sakaiminato-mizuki/14_sakaiminato_street_cat.jpg"
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
const MAP_REVEAL_START = 2.75;
const MAP_REVEAL_LENGTH = 1.25;
const REGION_CLASSES = Object.keys(regionNames);

let homeAlbumIndex = 0;
let browsingAlbumIndex = 0;
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
let previewHideTimer = null;
let galleryReturnContext = 'home';
let photoTransitionId = 0;
let albumPreloadRunId = 0;

const imagePreloadCache = new Map();

function getPrefClassFromSelector(selector) {
    return selector ? selector.replace('.', '') : '';
}

function getAlbumsForPrefecture(prefectureGroup) {
    if (!prefectureGroup) return [];

    return albums
        .map((album, index) => ({ ...album, albumIndex: index }))
        .filter(album => prefectureGroup.classList.contains(getPrefClassFromSelector(album.selector)));
}

function getAlbumsForRegion(regionClass) {
    return albums
        .map((album, index) => ({ ...album, albumIndex: index }))
        .filter(album => {
            const pref = document.querySelector(`.prefectures g.prefecture${album.selector}`);
            return pref && pref.classList.contains(regionClass);
        });
}

function getAlbumsByPrefecture() {
    return albums.reduce((groups, album, index) => {
        const prefClass = getPrefClassFromSelector(album.selector);
        if (!groups[prefClass]) groups[prefClass] = [];
        groups[prefClass].push({ ...album, albumIndex: index });
        return groups;
    }, {});
}

function preloadImage(url) {
    if (!url) return Promise.resolve(null);

    const cached = imagePreloadCache.get(url);
    if (cached) return cached.promise;

    const img = new Image();
    img.decoding = 'async';
    const entry = { img, promise: null, loaded: false };

    const promise = new Promise(resolve => {
        img.onload = () => {
            entry.loaded = true;
            resolve(img);
        };
        img.onerror = () => {
            entry.loaded = true;
            resolve(img);
        };
    });

    entry.promise = promise;
    imagePreloadCache.set(url, entry);
    img.src = url;
    return promise;
}

function isImageReady(url) {
    const cached = imagePreloadCache.get(url);
    return Boolean(cached && cached.loaded);
}

function preloadPhotos(urls) {
    urls.forEach(url => preloadImage(url));
}

function preloadAlbumPhotos(albumIndex, startIndex = 0) {
    const album = albums[albumIndex];
    if (!album) return;

    const runId = ++albumPreloadRunId;
    const total = album.photos.length;
    const preferred = [
        startIndex,
        (startIndex + 1) % total,
        (startIndex - 1 + total) % total
    ];
    const rest = album.photos
        .map((_, index) => index)
        .filter(index => !preferred.includes(index));
    const ordered = [...preferred, ...rest]
        .filter((index, position, indexes) => indexes.indexOf(index) === position)
        .map(index => album.photos[index]);

    preloadPhotos(ordered.slice(0, 3));

    let index = 3;
    const loadNext = () => {
        if (runId !== albumPreloadRunId || index >= ordered.length) return;
        preloadImage(ordered[index]).then(() => {
            index += 1;
            setTimeout(loadNext, 90);
        });
    };

    setTimeout(loadNext, 180);
}

function preloadAlbumCovers() {
    preloadPhotos(albums.map(album => album.photos[0]));
}

function preloadGalleryNeighbors(album, index) {
    if (!album || !album.photos.length) return;

    const previousIndex = (index - 1 + album.photos.length) % album.photos.length;
    const nextIndex = (index + 1) % album.photos.length;
    preloadPhotos([
        album.photos[previousIndex],
        album.photos[index],
        album.photos[nextIndex]
    ]);
}

function changePhotoWithFade(newUrl, isInitial = false) {
    const bgPhotoEl = document.getElementById('bg-photo');
    if (!bgPhotoEl) return;
    const requestId = ++photoTransitionId;

    const applyPhoto = (img = null) => {
        if (requestId !== photoTransitionId) return;

        bgPhotoEl.style.backgroundImage = `url('${newUrl}')`;

        if (bgPhotoEl.classList.contains('gallery-layout')) {
            if (img && img.naturalWidth && img.naturalHeight) {
                bgPhotoEl.classList.toggle('portrait-layout', img.naturalHeight > img.naturalWidth);
            }
        } else {
            bgPhotoEl.classList.remove('portrait-layout');
        }
    };

    if (isInitial) {
        preloadImage(newUrl).then(applyPhoto);
        bgPhotoEl.style.opacity = 1;
        bgPhotoEl.style.transition = 'none';
        return;
    }

    const waitForImage = !isImageReady(newUrl);
    if (waitForImage && isGalleryMode) {
        bgPhotoEl.classList.add('photo-loading');
        bgPhotoEl.style.transition = 'opacity 0.16s ease';
        bgPhotoEl.style.opacity = 0.82;
    }

    preloadImage(newUrl).then(img => {
        if (requestId !== photoTransitionId) return;

        bgPhotoEl.classList.remove('photo-loading');
        bgPhotoEl.style.transition = 'opacity 0.22s ease-in-out';
        bgPhotoEl.style.opacity = 0;
        setTimeout(() => {
            applyPhoto(img);
            bgPhotoEl.style.opacity = 1;
            setTimeout(() => {
                if (!isGalleryMode) bgPhotoEl.style.transition = 'none';
            }, 230);
        }, 220);
    });
}

function updateAlbumCover(isInitial = false) {
    const titleEl = document.getElementById('main-title');
    currentAlbumIndex = homeAlbumIndex;
    const album = albums[homeAlbumIndex];
    if (titleEl && !isGalleryMode) titleEl.textContent = album.title;
    changePhotoWithFade(album.photos[0], isInitial);
    currentPhotoIndex = 0;
    if (!isGalleryMode) restoreHomeHint();
}

function restoreHomeHint() {
    const locationHintEl = document.getElementById('location-hint');
    if (!locationHintEl) return;

    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / window.innerHeight, 4);
    locationHintEl.classList.remove('light-mode');
    locationHintEl.innerHTML = albums[homeAlbumIndex].location;
    locationHintEl.style.opacity = progress <= 1 ? Math.min(progress * 1.5, 1) : 1;
}

function updateGalleryPhoto(index) {
    const counterEl = document.getElementById('gallery-counter');
    const locationHintEl = document.getElementById('location-hint');
    const album = albums[browsingAlbumIndex];
    currentPhotoIndex = index;

    if (locationHintEl) {
        locationHintEl.innerHTML = galleryReturnContext === 'home'
            ? `P. ${String(index + 1).padStart(2, '0')}`
            : '';
    }
    if (counterEl) counterEl.textContent = `${String(index + 1).padStart(2, '0')} / ${String(album.photos.length).padStart(2, '0')}`;

    preloadGalleryNeighbors(album, index);
    changePhotoWithFade(album.photos[index], false);
}

function buildIndexGrid() {
    const gridContainer = document.getElementById('index-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';
    const album = albums[browsingAlbumIndex];

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
            homeAlbumIndex = (homeAlbumIndex - 1 + albums.length) % albums.length;
            updateAlbumCover(false);
        } else {
            const album = albums[browsingAlbumIndex];
            currentPhotoIndex = (currentPhotoIndex - 1 + album.photos.length) % album.photos.length;
            updateGalleryPhoto(currentPhotoIndex);
        }
    });
}

if (btnNext) {
    btnNext.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isGalleryMode) {
            homeAlbumIndex = (homeAlbumIndex + 1) % albums.length;
            updateAlbumCover(false);
        } else {
            const album = albums[browsingAlbumIndex];
            currentPhotoIndex = (currentPhotoIndex + 1) % album.photos.length;
            updateGalleryPhoto(currentPhotoIndex);
        }
    });
}

function openGalleryDirectly(albumIndex, returnContext = 'home') {
    browsingAlbumIndex = albumIndex;
    currentAlbumIndex = albumIndex;
    currentPhotoIndex = 0;
    isGalleryMode = true;
    galleryReturnContext = returnContext;
    hideMapHoverLabel();

    const bgPhotoEl = document.getElementById('bg-photo');
    if (bgPhotoEl) {
        bgPhotoEl.classList.add('gallery-layout');
        bgPhotoEl.style.opacity = 1;
    }

    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        mapContainer.style.opacity = 0;
        mapContainer.style.pointerEvents = 'none';
    }

    const backToMapBtn = document.getElementById('back-to-map-btn');
    if (backToMapBtn) {
        backToMapBtn.style.opacity = 0;
        backToMapBtn.style.pointerEvents = 'none';
    }

    hidePreview(true);
    document.getElementById('main-title-container').style.opacity = 0;
    document.getElementById('main-title-container').style.pointerEvents = 'none';
    document.getElementById('dark-overlay').style.opacity = 0;
    document.getElementById('gallery-counter').style.opacity = 1;
    document.getElementById('open-index-btn').style.opacity = 1;

    if (btnPrev) { btnPrev.style.opacity = '1'; btnPrev.style.pointerEvents = 'auto'; }
    if (btnNext) { btnNext.style.opacity = '1'; btnNext.style.pointerEvents = 'auto'; }

    const locationHint = document.getElementById('location-hint');
    if (locationHint) {
        locationHint.classList.remove('light-mode');
        locationHint.style.opacity = returnContext === 'home' ? 1 : 0;
    }

    const closeGalleryBtn = document.getElementById('close-gallery-mode-btn');
    if (closeGalleryBtn) {
        closeGalleryBtn.style.opacity = 1;
        closeGalleryBtn.style.pointerEvents = 'auto';
    }

    document.body.style.overflowY = 'hidden';
    preloadAlbumPhotos(albumIndex, 0);
    updateGalleryPhoto(0);
}

const mainTitleEl = document.getElementById('main-title');
if (mainTitleEl) mainTitleEl.addEventListener('click', () => openGalleryDirectly(homeAlbumIndex));

const closeGalleryBtnEl = document.getElementById('close-gallery-mode-btn');
if (closeGalleryBtnEl) {
    closeGalleryBtnEl.addEventListener('click', () => {
        isGalleryMode = false;
        const shouldReturnToMap = galleryReturnContext === 'map';
        galleryReturnContext = 'home';

        const bgPhotoEl = document.getElementById('bg-photo');
        if (bgPhotoEl) {
            bgPhotoEl.classList.remove('gallery-layout');
            bgPhotoEl.classList.remove('portrait-layout');
            bgPhotoEl.style.transition = 'none';
        }

        document.getElementById('gallery-counter').style.opacity = 0;
        document.getElementById('open-index-btn').style.opacity = 0;
        document.getElementById('gallery-index-panel').classList.remove('open');
        closeGalleryBtnEl.style.opacity = 0;
        closeGalleryBtnEl.style.pointerEvents = 'none';
        document.body.style.overflowY = 'scroll';

        if (btnPrev) { btnPrev.style.opacity = '0'; btnPrev.style.pointerEvents = 'none'; }
        if (btnNext) { btnNext.style.opacity = '0'; btnNext.style.pointerEvents = 'none'; }

        if (shouldReturnToMap) {
            returnToMapAfterGallery();
        } else {
            document.getElementById('main-title-container').style.opacity = 1;
            document.getElementById('main-title-container').style.pointerEvents = 'auto';
            document.getElementById('dark-overlay').style.opacity = 0.4;
            if (btnPrev) { btnPrev.style.opacity = '1'; btnPrev.style.pointerEvents = 'auto'; }
            if (btnNext) { btnNext.style.opacity = '1'; btnNext.style.pointerEvents = 'auto'; }
            updateAlbumCover(true);
            restoreHomeHint();
        }
    });
}

function returnToMapAfterGallery() {
    const mainTitleContainer = document.getElementById('main-title-container');
    const darkOverlay = document.getElementById('dark-overlay');
    const bgPhoto = document.getElementById('bg-photo');
    const mapContainer = document.getElementById('map-container');
    const locationHint = document.getElementById('location-hint');
    const backBtn = document.getElementById('back-to-map-btn');

    updateAlbumCover(true);

    if (mainTitleContainer) {
        mainTitleContainer.style.opacity = 0;
        mainTitleContainer.style.pointerEvents = 'none';
    }
    if (darkOverlay) darkOverlay.style.opacity = 0;
    if (bgPhoto) {
        bgPhoto.style.transition = 'none';
        bgPhoto.style.opacity = 0;
    }
    if (mapContainer) {
        mapContainer.style.opacity = 1;
        mapContainer.style.pointerEvents = 'auto';
    }
    if (locationHint) {
        locationHint.classList.add('light-mode');
        locationHint.innerHTML = '';
        locationHint.style.opacity = 0;
    }
    if (backBtn && currentLayer > 1) {
        backBtn.style.opacity = 1;
        backBtn.style.pointerEvents = 'auto';
    }

    updateLocationHintText();
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

    const album = albums[browsingAlbumIndex];
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
    const currentAlbum = albums[homeAlbumIndex];

    if (progress < 0.2) {
        if (btnPrev) { btnPrev.style.opacity = '1'; btnPrev.style.pointerEvents = 'auto'; }
        if (btnNext) { btnNext.style.opacity = '1'; btnNext.style.pointerEvents = 'auto'; }
    } else {
        if (btnPrev) { btnPrev.style.opacity = '0'; btnPrev.style.pointerEvents = 'none'; }
        if (btnNext) { btnNext.style.opacity = '0'; btnNext.style.pointerEvents = 'none'; }
    }

    if (progress <= 1) {
        hideMapHoverLabel();
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
    } else if (progress > 1 && progress <= MAP_REVEAL_START) {
        hideMapHoverLabel();
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (locationHint) {
            locationHint.innerHTML = currentAlbum.location;
            locationHint.style.opacity = 1;
            locationHint.classList.remove('light-mode');
        }
        if (bgPhoto) { bgPhoto.style.transition = 'none'; bgPhoto.style.opacity = 1; }
        if (mapContainer) { mapContainer.style.opacity = 0; mapContainer.style.pointerEvents = 'none'; }
    } else if (progress > MAP_REVEAL_START) {
        const stage3Progress = Math.min((progress - MAP_REVEAL_START) / MAP_REVEAL_LENGTH, 1);
        if (mainTitleContainer) { mainTitleContainer.style.opacity = 0; mainTitleContainer.style.pointerEvents = 'none'; }
        if (darkOverlay) darkOverlay.style.opacity = 0;
        if (bgPhoto) { bgPhoto.style.transition = 'none'; bgPhoto.style.opacity = Math.max(0, 1 - stage3Progress * 2.5); }
        if (locationHint) {
            locationHint.innerHTML = '';
            locationHint.style.opacity = 0;
        }

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

    hint.innerHTML = '';
    hint.style.opacity = 0;
}

function getPrefectureTitle(g) {
    if (!g) return '';
    const rawTitle = g.dataset.prefTitle || '';
    return rawTitle ? rawTitle.split(' / ')[0] : '';
}

function getPrefectureTitleForPin(pin) {
    const prefClass = pin ? pin.getAttribute('data-pref-class') : '';
    const pref = prefClass ? document.querySelector(`.prefectures g.prefecture.${prefClass}`) : null;
    return getPrefectureTitle(pref);
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

function getCombinedScreenRect(elements) {
    const visibleRects = elements
        .filter(el => el && el.style.display !== 'none')
        .map(el => (typeof el.getBoundingClientRect === 'function' ? el.getBoundingClientRect() : null))
        .filter(rect => rect && rect.width > 0 && rect.height > 0);

    if (visibleRects.length === 0) return null;

    return visibleRects.reduce((merged, rect) => ({
        left: Math.min(merged.left, rect.left),
        top: Math.min(merged.top, rect.top),
        right: Math.max(merged.right, rect.right),
        bottom: Math.max(merged.bottom, rect.bottom),
        width: Math.max(merged.right, rect.right) - Math.min(merged.left, rect.left),
        height: Math.max(merged.bottom, rect.bottom) - Math.min(merged.top, rect.top)
    }), {
        left: visibleRects[0].left,
        top: visibleRects[0].top,
        right: visibleRects[0].right,
        bottom: visibleRects[0].bottom,
        width: visibleRects[0].width,
        height: visibleRects[0].height
    });
}

function showMapHoverLabel(text, anchor, hasAlbums = false, preferredSide = 'auto') {
    const label = document.getElementById('map-hover-label');
    if (!label || !text) return;

    const rect = Array.isArray(anchor)
        ? getCombinedScreenRect(anchor)
        : (anchor && typeof anchor.getBoundingClientRect === 'function' ? anchor.getBoundingClientRect() : null);

    if (!rect) return;

    label.textContent = text;
    label.classList.toggle('has-albums', hasAlbums);
    label.classList.add('visible');

    const gap = 14;
    const labelWidth = label.offsetWidth || 120;
    const labelHeight = label.offsetHeight || 32;
    const placeLeft = preferredSide === 'left'
        || (preferredSide !== 'right' && rect.right + gap + labelWidth > window.innerWidth - 16);
    const x = placeLeft ? rect.left - labelWidth - gap : rect.right + gap;
    const y = rect.top + rect.height / 2 - labelHeight / 2;

    label.style.left = `${Math.max(16, Math.min(window.innerWidth - labelWidth - 16, x))}px`;
    label.style.top = `${Math.max(16, Math.min(window.innerHeight - labelHeight - 16, y))}px`;
}

function hideMapHoverLabel() {
    const label = document.getElementById('map-hover-label');
    if (!label) return;

    label.classList.remove('visible', 'has-albums');
}

function getRegionMembers(regionClass) {
    return Array.from(document.querySelectorAll(`.prefectures g.prefecture.${regionClass}`));
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
    const members = Array.from(document.querySelectorAll(`.prefectures g.prefecture.${regionClass}`));
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
                const titleEl = g.querySelector('title');
                if (titleEl) {
                    g.dataset.prefTitle = titleEl.textContent;
                    titleEl.remove();
                }

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

            svgEl.querySelectorAll('title').forEach(title => title.remove());

            const regionBadgesLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            regionBadgesLayer.setAttribute('id', 'region-badges-layer');
            prefContainer.appendChild(regionBadgesLayer);

            const spotsLayer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            spotsLayer.setAttribute('id', 'spots-layer');

            Object.entries(getAlbumsByPrefecture()).forEach(([prefClass, prefAlbums]) => {
                const representative = prefAlbums[0];
                const prefG = prefContainer.querySelector(`.${prefClass}`);
                const regionClass = prefG ? getRegionClass(prefG) : '';

                const pin = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                pin.setAttribute('class', `map-pin spot-pin ${regionClass} ${prefClass}`.trim());
                pin.setAttribute('data-pref-class', prefClass);
                pin.setAttribute('data-album-indexes', prefAlbums.map(album => album.albumIndex).join(','));
                pin.setAttribute('id', representative.spotId);

                pin.innerHTML = `
                    <g transform="translate(-12, -22)">
                        <path d="M12,2 C7.03,2 3,6.03 3,11 C3,16.55 12,22 12,22 C12,22 21,16.55 21,11 C21,6.03 16.97,2 12,2 Z" class="pin-body"/>
                        <circle cx="12" cy="11" r="3" fill="#fff"/>
                    </g>
                    ${prefAlbums.length > 1 ? `<circle cx="9" cy="-21" r="7" class="pin-count-bg"/><text x="9" y="-18.4" class="pin-count">${prefAlbums.length}</text>` : ''}
                `;
                spotsLayer.appendChild(pin);
            });
            prefContainer.appendChild(spotsLayer);

            markAlbumRegions();
            positionAlbumPins();
            positionRegionBadges();

            requestAnimationFrame(() => {
                try {
                    calculateGeometries();
                } catch (err) {
                    console.warn('地圖標記定位略過，保留基本相簿提示:', err);
                    markAlbumRegions();
                    positionAlbumPins();
                    positionRegionBadges();
                }
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
        const prefG = document.querySelector(`.prefectures g.prefecture${album.selector}`);
        if (!prefG) return;

        const cx = parseFloat(prefG.getAttribute('data-center-x'));
        const cy = parseFloat(prefG.getAttribute('data-center-y'));
        const prefClass = getPrefClassFromSelector(album.selector);
        const spotPin = document.querySelector(`.spot-pin[data-pref-class="${prefClass}"]`);

        if (Number.isFinite(cx) && Number.isFinite(cy)) {
            if (spotPin) spotPin.setAttribute('transform', `translate(${cx}, ${cy}) scale(1.18)`);
        }
    });

    markAlbumRegions();
    positionAlbumPins();
    positionRegionBadges();
}

function markAlbumRegions() {
    const albumRegionClasses = new Set();

    albums.forEach(album => {
        const prefG = document.querySelector(`.prefectures g.prefecture${album.selector}`);
        if (!prefG) return;

        const regionClass = getRegionClass(prefG);
        if (regionClass) albumRegionClasses.add(regionClass);
        prefG.classList.add('album-prefecture');
    });

    albumRegionClasses.forEach(regionClass => {
        document.querySelectorAll(`.prefectures .${regionClass}`).forEach(pref => {
            pref.classList.add('album-region');
        });
    });
}

function positionAlbumPins() {
    Object.entries(getAlbumsByPrefecture()).forEach(([prefClass]) => {
        const prefG = document.querySelector(`.prefectures g.prefecture.${prefClass}`);
        const spotPin = document.querySelector(`.spot-pin[data-pref-class="${prefClass}"]`);
        if (!prefG || !spotPin) return;

        const center = getCenterInsidePrefectureContainer(prefG);
        if (Number.isFinite(center.x) && Number.isFinite(center.y)) {
            spotPin.setAttribute('transform', `translate(${center.x}, ${center.y}) scale(1.18)`);
        }
    });
}

function positionRegionBadges() {
    const layer = document.getElementById('region-badges-layer');
    if (!layer) return;

    layer.innerHTML = '';

    REGION_CLASSES.forEach(regionClass => {
        const regionAlbums = getAlbumsForRegion(regionClass);
        if (regionAlbums.length === 0) return;

        const bounds = getRegionBounds(regionClass);
        if (!bounds) return;

        const badge = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        badge.setAttribute('class', `region-album-badge ${regionClass}`);
        badge.setAttribute('transform', `translate(${bounds.x + bounds.width / 2}, ${bounds.y + bounds.height / 2})`);
        badge.innerHTML = `
            <circle r="19" class="region-badge-halo"></circle>
            <circle r="12" class="region-badge-dot"></circle>
            <text y="0" class="region-badge-count">${regionAlbums.length}</text>
        `;
        layer.appendChild(badge);
    });
}

function setupStageEvents() {
    const svgMap = document.getElementById('japan-map');
    const backBtn = document.getElementById('back-to-map-btn');
    if (!svgMap) return;

    const previewCard = document.getElementById('map-preview-card');
    if (previewCard) {
        previewCard.addEventListener('mouseenter', cancelPreviewHide);
        previewCard.addEventListener('mouseleave', schedulePreviewHide);
    }

    document.querySelectorAll('.prefectures g.prefecture').forEach(g => {
        g.addEventListener('mouseenter', (e) => {
            if (isGalleryMode) return;
            if (g.style.display === 'none') return;
            const localRegion = getRegionClass(g);

            if (currentLayer === 1) {
                if (localRegion) {
                    document.querySelectorAll(`.prefectures .${localRegion}`).forEach(el => el.classList.add('region-hover-pulse'));
                    const regionAlbums = getAlbumsForRegion(localRegion);
                    const labelText = regionAlbums.length > 0
                        ? `${regionNames[localRegion]} · ${regionAlbums.length} 本相簿`
                        : regionNames[localRegion];
                    showMapHoverLabel(labelText, getRegionMembers(localRegion), regionAlbums.length > 0);
                }
            } else if (currentLayer === 2) {
                if (localRegion && g.classList.contains(activeRegionClass)) {
                    g.classList.add('pref-hover-pulse');
                    const prefAlbums = getAlbumsForPrefecture(g);
                    if (prefAlbums.length > 0) {
                        hideMapHoverLabel();
                        showAlbumPreview(prefAlbums, getPrefectureTitle(g), g);
                    } else {
                        showMapHoverLabel(getPrefectureTitle(g), g);
                    }
                }
            }
        });

        g.addEventListener('mouseleave', () => {
            if (isGalleryMode) return;
            const localRegion = getRegionClass(g);

            if (currentLayer === 1) {
                if (localRegion) {
                    document.querySelectorAll(`.prefectures .${localRegion}`).forEach(el => el.classList.remove('region-hover-pulse'));
                }
            } else if (currentLayer === 2) {
                g.classList.remove('pref-hover-pulse');
                schedulePreviewHide();
            }

            hideMapHoverLabel();
            updateLocationHintText();
        });

        g.addEventListener('mousemove', () => {
            if (isGalleryMode) return;
            if (currentLayer !== 2 || g.style.display === 'none') return;

            const localRegion = getRegionClass(g);
            if (!localRegion || !g.classList.contains(activeRegionClass)) return;

            const prefAlbums = getAlbumsForPrefecture(g);
            if (prefAlbums.length === 0) return;

            hideMapHoverLabel();
            showAlbumPreview(prefAlbums, getPrefectureTitle(g), g);
        });

        g.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isGalleryMode) return;
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
                hideMapHoverLabel();

                if (backBtn) {
                    backBtn.style.opacity = 1;
                    backBtn.style.pointerEvents = 'auto';
                }

                updateLocationHintText();
            } else if (currentLayer === 2) {
                if (!g.classList.contains(activeRegionClass)) return;

                const prefAlbums = getAlbumsForPrefecture(g);
                if (prefAlbums.length === 0) return;

                showAlbumPreview(prefAlbums, getPrefectureTitle(g), g);
                return;
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
                hidePreview(true);
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

                hidePreview(true);
                hideMapHoverLabel();
                updateLocationHintText();
            }
        });
    }

    document.querySelectorAll('.spot-pin').forEach(pin => {
        const albumIndexes = (pin.getAttribute('data-album-indexes') || '')
            .split(',')
            .map(value => parseInt(value, 10))
            .filter(Number.isFinite);
        const pinAlbums = albumIndexes.map(index => ({ ...albums[index], albumIndex: index })).filter(Boolean);

        pin.addEventListener('mouseenter', () => {
            if (isGalleryMode) return;
            if (currentLayer !== 2 && currentLayer !== 3) return;
            showAlbumPreview(pinAlbums, getPrefectureTitleForPin(pin), pin);
        });
        pin.addEventListener('mousemove', () => {
            if (!isGalleryMode) cancelPreviewHide();
        });

        pin.addEventListener('mouseleave', () => {
            if (!isGalleryMode) schedulePreviewHide();
        });
        pin.addEventListener('click', (e) => {
            e.stopPropagation();
            if (isGalleryMode) return;
            showAlbumPreview(pinAlbums, getPrefectureTitleForPin(pin), pin);
        });
    });
}

function showAlbumPreview(albumList, heading, anchor = null) {
    const card = document.getElementById('map-preview-card');
    if (!card || !albumList || albumList.length === 0) return;
    cancelPreviewHide();

    const countText = albumList.length > 1 ? `共 ${albumList.length} 本相簿` : '1 本相簿';
    const coverStack = albumList.slice(0, 3).map((album, index) => `
        <img class="preview-stack-img preview-stack-${index}" src="${album.photos[0]}" alt="${album.spotName}">
    `).join('');
    const albumItems = albumList.map(album => `
        <button class="preview-album-btn" type="button" data-album-index="${album.albumIndex}">
            <img src="${album.photos[0]}" alt="">
            <span>
                <strong>${album.spotName}</strong>
                <small>${album.title}</small>
            </span>
        </button>
    `).join('');

    card.classList.add('choice-mode');
    card.innerHTML = `
        <div class="preview-cover-stack">${coverStack}</div>
        <div class="preview-kicker">${countText}</div>
        <div class="preview-title">${heading || getPrefectureTitle(anchor) || '相簿'}</div>
        <div class="preview-subtitle">選擇一本相簿開始回味</div>
        <div class="preview-album-list">${albumItems}</div>
    `;

    card.querySelectorAll('.preview-album-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const albumIndex = parseInt(button.getAttribute('data-album-index'), 10);
            hidePreview(true);
            openGalleryDirectly(albumIndex, 'map');
        });
    });

    if (anchor) {
        const rect = typeof anchor.getBoundingClientRect === 'function' ? anchor.getBoundingClientRect() : null;
        if (rect) {
            const left = Math.min(rect.right + 18, window.innerWidth - 260);
            const top = Math.min(rect.top + rect.height / 2 - 116, window.innerHeight - 250);
            card.style.left = `${Math.max(16, left)}px`;
            card.style.top = `${Math.max(16, top)}px`;
        }
    } else {
        const left = Math.min(window.innerWidth * 0.62, window.innerWidth - 260);
        const top = Math.min(window.innerHeight * 0.42, window.innerHeight - 250);
        card.style.left = `${Math.max(16, left)}px`;
        card.style.top = `${Math.max(16, top)}px`;
    }

    card.style.opacity = 1;
}

function cancelPreviewHide() {
    if (previewHideTimer) {
        clearTimeout(previewHideTimer);
        previewHideTimer = null;
    }
}

function schedulePreviewHide() {
    cancelPreviewHide();
    previewHideTimer = setTimeout(() => hidePreview(true), 320);
}

function hidePreview(force = false) {
    const card = document.getElementById('map-preview-card');
    if (card) {
        if (card.classList.contains('choice-mode') && !force) return;
        card.style.opacity = 0;
        card.classList.remove('choice-mode');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    preloadAlbumCovers();
    updateAlbumCover(true);
    loadAndInitMap();
});
