const gamesData = [
  { id: 1, title: "BeamNG.drive Mobile", image: "https://avatars.githubusercontent.com/u/6404024?s=280&v=4", version: "v0.32.0.0", rating: 4.8, downloads: "50K+" },
  { id: 2, title: "GTA V Mobile", image: "https://i.pinimg.com/736x/8f/01/03/8f010359c57da7850e723fa17a53b55e.jpg", version: "v1.0.3095/1.68", rating: 4.9, downloads: "120K+" },
  { id: 19, title: "Speed Stars Mod", image: "https://i.postimg.cc/q7LSqhJv/Hard.png", version: "v2.1.0", rating: 4.2, downloads: "24K+" },
  { id: 3, title: "Forza Horizon Mobile", image: "https://images.seeklogo.com/logo-png/40/1/forza-horizon-5-logo-png_seeklogo-406612.png", version: "v2.0.1", rating: 4.7, downloads: "55K+" },
  { id: 4, title: "RUSH: Xtreme MOD  (Unlocked)", image: "https://images.appmagic.rocks/?uri=https://play-lh.googleusercontent.com/9G5Qe9rlbCNdRD-PrK5bn5s9v0ApdtR-d-Tog_sOyWoYT4tecoPhEBjX_23Qeyzluae5_9A1YG8rCpHfLzyXig=s98-c", version: "v1.3.1", rating: 4.6, downloads: "35K+" },
  { id: 5, title: "Dispatch Mobile", image: "https://i.postimg.cc/QNc8k2D9/Dispatch-art-jpg.webp", version: "v1.5.2", rating: 4.7, downloads: "28K+" },
  { id: 6, title: "Red Dead Redemption", image: "https://i.postimg.cc/Vs3RH8Y1/unnamed.webp", version: "v1.5.2", rating: 4.9, downloads: "75K+" },
  { id: 7, title: "Am a Monkey (No Ads", image: "https://i.postimg.cc/Qx3V7hRX/Untitled-design-1.png", version: "v1.0.4", rating: 4.5, downloads: "22K+" },
  { id: 8, title: "8 Ball Pool Aimbot MOD", image: "https://www.latestmodapks.com/wp-content/uploads/2022/10/com.miniclip.eightballpool.jpg", version: "v5.15.2", rating: 4.4, downloads: "45K+" },
  { id: 9, title: "Gorilla Tag Mobile", image: "https://img.tapimg.net/market/images/181c7a899a46a98dd93d07da84847a5f.jpg", version: "v1.2.5", rating: 4.3, downloads: "18K+" },
  { id: 10, title: "Euro Truck Simulator 2", image: "https://i.pinimg.com/564x/32/ae/e5/32aee5919f1c4e81da58627d21b3323a.jpg", version: "v1.48.2", rating: 4.6, downloads: "40K+" },
  { id: 11, title: "Highway Racer Pro", image: "https://play-lh.googleusercontent.com/hNugD_lGLRZAWnEss_Ue66J2NH2M2rNLJODh8Bpr8EGyOYZe05epjQ3EK2WdtmJsOoc", version: "v4.5.1", rating: 4.2, downloads: "30K+" },
  { id: 12, title: "Hitman: Absolution Mobile", image: "https://play-lh.googleusercontent.com/sZ2vcnPx2dGILYDxX4e6VIFZq1lWdBvekVFSGphJa2Lnreo7ghXsaP11nIKq77Rl775JN6zgf7v9whOmKwpWMoY", version: "v3.14.1", rating: 4.5, downloads: "25K+" },
  { id: 13, title: "Rooftops & Alleys", image: "https://i.postimg.cc/W1bm7TRt/Fh-T2ixl-Wyl9-TPswg-KLF0j-Pp9j-Nuq.png", version: "v2.3.0", rating: 4.4, downloads: "20K+" },
  { id: 14, title: "Fortnite Mobile", image: "https://pbs.twimg.com/media/GxGV7xRXMAAPHh0.jpg", version: "v27.10.0", rating: 4.8, downloads: "90K+" },
  { id: 15, title: "WWE 2K25 Mobile", image: "https://play-lh.googleusercontent.com/uD9hXMYt6fqwiSnTd6vqj0pi5JfTvIHbZR9OFllSPcuG_V1iGwNOJ26wwXd1b0z89zp-=w240-h480-rw", version: "v1.5.0", rating: 4.6, downloads: "35K+" },
  { id: 16, title: "CarX Street", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pqJlpezWAKhl0bwwWy1GIc_zVOGXjHvz9Q&s", version: "v1.2.3", rating: 4.5, downloads: "42K+" },
  { id: 17, title: "Baseball 9 Mod", image: "https://i.postimg.cc/j254nVy3/e21d66a4-4e0a-4a5b-9521-397d4cb5d383.png", version: "v3.8.0", rating: 4.3, downloads: "28K+" },
  { id: 18, title: "Hollow Knight Mobile", image: "https://i.postimg.cc/Vvj4G8nC/icon.webp", version: "v1.5.78", rating: 4.8, downloads: "38K+" },
  { id: 20, title: "Lamar Idle Vlogger", image: "https://i.postimg.cc/RFv1XQFq/Lamar-Idle-Vlogger-Mod-APK.webp", version: "v1.4.2", rating: 4.4, downloads: "19K+" },
  { id: 21, title: "Snake Clash", image: "https://i.postimg.cc/ZqFX5FJT/71dded537746e75207450ca40f71d089ff02df7c47300f91f5a7522ec910bdc3_200.webp", version: "v3.7.1", rating: 4.1, downloads: "31K+" },
  { id: 22, title: "Racing Ultimate", image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", version: "v2.0.5", rating: 4.3, downloads: "26K+" },
  { id: 23, title: "Project Brutality Doom", image: "https://static.doomworld.com/monthly_2023_06/51f3b0e3dcd1cf493fe29ac632aeec39.jpg.88231b2c110b31f13555d274b67c763e.jpg", version: "v0.1.0", rating: 4.7, downloads: "15K+" }
];

// URL helpers
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
let trackingSub1 = getUrlParameter('sub1') || '';
let clickId = getUrlParameter('clickid') || getUrlParameter('click_id') || '';
let transactionId = getUrlParameter('transaction_id') || '';
let urlParams = {};
const urlSearchParams = new URLSearchParams(window.location.search);
for (const [key, value] of urlSearchParams) urlParams[key] = value;

function getLockerApiUrl() {
  const baseUrl = 'https://d1y3y09sav47f5.cloudfront.net/public/offers/feed.php';
  const userId = '504359';
  const apiKey = '3b17a09c1ca2bba2d52ffadab4894374';
  const s1Value = currentGame ? currentGame.title : (trackingSub1 || '');
  const s2 = urlParams.sub2 || urlParams.s2 || '';
  return `${baseUrl}?user_id=${userId}&api_key=${apiKey}&s1=${encodeURIComponent(s1Value)}&s2=${encodeURIComponent(s2)}`;
}

let allOffers = [];
let currentGame = null;
let currentPlatform = null;

async function fetchOffers() {
  try {
    const apiUrl = getLockerApiUrl();
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data && data.offers && Array.isArray(data.offers)) {
      allOffers = data.offers;
    } else if (Array.isArray(data)) {
      allOffers = data;
    }
  } catch (error) {
    console.error('Error fetching offers:', error);
    allOffers = [];
  }
}

function renderStars(rating) {
  let stars = '';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < 5; i++) {
    if (i < full) stars += '<i class="fas fa-star"></i>';
    else if (i === full && half) stars += '<i class="fas fa-star-half-alt"></i>';
    else stars += '<i class="far fa-star"></i>';
  }
  return stars;
}

function renderGamesGrid(games = gamesData) {
  const grid = document.getElementById('gamesGrid');
  grid.innerHTML = '';
  games.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.onclick = () => openPlatformModal(game);
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}" class="game-icon" onerror="this.src='https://via.placeholder.com/80/1e1e1e/ffffff?text=Game'">
      <div class="game-info">
        <div class="game-title">${game.title}</div>
        <div class="game-version">${game.version}</div>
        <div class="game-rating">${renderStars(game.rating)}</div>
      </div>`;
    grid.appendChild(card);
  });
}

function renderGamesList(games = gamesData) {
  const list = document.getElementById('gamesList');
  list.innerHTML = '';
  games.forEach(game => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.onclick = () => openPlatformModal(game);
    item.innerHTML = `
      <div class="list-item-icon">
        <img src="${game.image}" alt="${game.title}" onerror="this.src='https://via.placeholder.com/150/1a1a1a/ffffff?text=Game'">
      </div>
      <div class="list-item-info">
        <div class="list-item-title">${game.title}</div>
        <div class="list-item-version">${game.version}</div>
        <div class="list-item-rating">${renderStars(game.rating)}</div>
      </div>`;
    list.appendChild(item);
  });
}

function renderGames() {
  const isGrid = document.getElementById('gridBtn').classList.contains('active');
  if (isGrid) renderGamesGrid(); else renderGamesList();
}

function switchView(view) {
  const gridBtn = document.getElementById('gridBtn');
  const listBtn = document.getElementById('listBtn');
  const grid = document.getElementById('gamesGrid');
  const list = document.getElementById('gamesList');

  if (view === 'grid') {
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
    grid.style.display = 'grid';
    list.classList.remove('active');
    renderGamesGrid();
  } else {
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
    grid.style.display = 'none';
    list.classList.add('active');
    renderGamesList();
  }
}

function openPlatformModal(game) {
  currentGame = game;
  const modal = document.getElementById('platformModal');
  const icon = document.getElementById('platformGameIcon');
  const title = document.getElementById('platformGameTitle');

  icon.src = game.image;
  icon.onerror = function () { this.src = 'https://via.placeholder.com/150/1a1a1a/ffffff?text=Game'; };
  title.textContent = game.title;

  document.body.classList.add('modal-open');
  modal.classList.add('active');
}

function closePlatformModal() {
  const modal = document.getElementById('platformModal');
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

function selectPlatform(platform) {
  currentPlatform = platform;
  closePlatformModal();
  setTimeout(() => openLocker(), 300);
}

function openLocker() {
  if (!currentGame) return;
  const modal = document.getElementById('lockerModal');
  const logo = document.getElementById('lockerGameLogo');
  const title = document.getElementById('lockerGameTitle');

  logo.src = currentGame.image;
  logo.onerror = function () { this.src = 'https://via.placeholder.com/150/1a1a1a/ffffff?text=Game'; };
  title.textContent = currentGame.title;

  fetchOffers().then(() => displayOffers());
  document.body.classList.add('modal-open');
  modal.classList.add('active');
}

function closeLocker() {
  const modal = document.getElementById('lockerModal');
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

function addParamsToUrl(url, params) {
  if (!url || url === '#') return url;
  try {
    const urlObj = new URL(url);
    Object.keys(params).forEach(key => { if (params[key]) urlObj.searchParams.set(key, params[key]); });
    return urlObj.toString();
  } catch (e) {
    const separator = url.includes('?') ? '&' : '?';
    const paramString = Object.keys(params)
      .filter(key => params[key])
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
    return url + separator + paramString;
  }
}

function displayOffers() {
  const offersList = document.getElementById('offersList');
  if (!allOffers || allOffers.length === 0) {
    offersList.innerHTML = '<div class="no-offers">No offers available at the moment. Please try again later.</div>';
    return;
  }

  // Show only first 2 offers
  const offersToShow = allOffers.slice(0, 2);
  offersList.innerHTML = '';

  offersToShow.forEach((offer, index) => {
    const button = document.createElement('button');
    button.className = 'offer-button';

    const offerImage = offer.network_icon || offer.image || offer.logo || offer.icon || offer.thumbnail || 'https://via.placeholder.com/40/00ff88/000000?text=Offer';
    const offerText = offer.anchor || offer.name || offer.title || `Offer ${index + 1}`;
    let offerUrl = offer.url || offer.link || '#';

    if (offerUrl !== '#') {
      const finalSub1 = currentGame ? currentGame.title : (trackingSub1 || '');
      const trackingParams = {};
      if (finalSub1) trackingParams.sub1 = finalSub1;
      if (urlParams.sub2 || urlParams.s2) trackingParams.sub2 = urlParams.sub2 || urlParams.s2;
      if (urlParams.sub3 || urlParams.s3) trackingParams.sub3 = urlParams.sub3 || urlParams.s3;
      if (urlParams.sub4 || urlParams.s4) trackingParams.sub4 = urlParams.sub4 || urlParams.s4;
      if (urlParams.sub5 || urlParams.s5) trackingParams.sub5 = urlParams.sub5 || urlParams.s5;
      if (clickId || transactionId) {
        trackingParams.clickid = clickId || transactionId;
        trackingParams.transaction_id = transactionId || clickId;
      }
      console.log('Adding sub1 to offer URL:', { sub1: finalSub1, game: currentGame ? currentGame.title : 'No game', trackingSub1, offerUrl });
      offerUrl = addParamsToUrl(offerUrl, trackingParams);
    }

    button.innerHTML = `
      <img src="${offerImage}" alt="${offerText}" class="offer-logo" onerror="this.src='https://via.placeholder.com/40/00ff88/000000?text=Offer'">
      <span class="offer-text">${offerText}</span>`;
    button.onclick = () => openOffer(offerUrl, offer);
    offersList.appendChild(button);
  });
}

function openOffer(url, offer) {
  if (url && url !== '#') {
    window.open(url, '_blank');
    console.log('Offer clicked:', {
      url,
      game: currentGame ? currentGame.title : '',
      sub1: currentGame ? currentGame.title : (trackingSub1 || ''),
      clickid: clickId || transactionId
    });
  }
}

// Search
document.getElementById('searchInput').addEventListener('input', function (e) {
  const term = e.target.value.toLowerCase().trim();
  if (term === '') { renderGames(); return; }
  const filtered = gamesData.filter(game => game.title.toLowerCase().includes(term));
  const isGrid = document.getElementById('gridBtn').classList.contains('active');
  if (isGrid) renderGamesGrid(filtered); else renderGamesList(filtered);
});

// Close modals on outside click
document.getElementById('platformModal').addEventListener('click', e => { if (e.target === e.currentTarget) closePlatformModal(); });
document.getElementById('lockerModal').addEventListener('click', e => { if (e.target === e.currentTarget) closeLocker(); });

// Disable right-click
document.addEventListener('contextmenu', e => { e.preventDefault(); return false; });

// Disable double-tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', e => {
  const now = Date.now();
  if (now - lastTouchEnd <= 300) e.preventDefault();
  lastTouchEnd = now;
}, false);

// Init
document.addEventListener('DOMContentLoaded', () => {
  console.log('Tracking Info:', { sub1: trackingSub1, clickid: clickId, transaction_id: transactionId, urlParams });
  renderGames();
  fetchOffers().catch(err => console.error('Error fetching offers (games will still show):', err));
});

// Expose functions to global
window.switchView = switchView;
window.openPlatformModal = openPlatformModal;
window.closePlatformModal = closePlatformModal;
window.selectPlatform = selectPlatform;
window.closeLocker = closeLocker;
window.openOffer = openOffer;
