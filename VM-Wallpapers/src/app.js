const apiKey = 'Rwzeh7lN6tvQaTDKvvuVcDgLnuwA7a2A2Hy1XdfKkN5taiBLP8AeArFE';
const gallery = document.getElementById('wallpaper-gallery');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loadMoreBtn = document.getElementById('load-more-btn');
const previewModal = document.getElementById('preview-modal');
const previewImg = document.getElementById('preview-img');
const downloadLink = document.getElementById('download-link');
const closeModal = document.getElementById('close-modal');

let currentPage = 1;
let currentQuery = '';

// Close modal
closeModal.addEventListener('click', function () {
    previewModal.style.display = 'none';
});

// Fetch wallpapers from Pexels API
async function fetchWallpapers(query = '', page = 1) {
    const endpoint = query
        ? `https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=12`
        : `https://api.pexels.com/v1/curated?page=${page}&per_page=12`;

    try {
        const response = await fetch(endpoint, {
            headers: {
                Authorization: apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch wallpapers');
        }

        const data = await response.json();
        displayWallpapers(data.photos);
    } catch (error) {
        console.error('Error fetching wallpapers:', error);
    }
}

// Display wallpapers in the gallery
function displayWallpapers(wallpapers) {
    wallpapers.forEach(wallpaper => {
        const wallpaperItem = document.createElement('div');
        wallpaperItem.classList.add('wallpaper-item');

        wallpaperItem.innerHTML = `
            <img src="${wallpaper.src.large2x}" alt="${wallpaper.photographer}">
        `;

        // Open modal for image preview
        wallpaperItem.addEventListener('click', () => {
            openPreview(wallpaper);
        });

        gallery.appendChild(wallpaperItem);
    });
}

// Open preview modal
function openPreview(wallpaper) {
    previewModal.style.display = 'flex';
    previewImg.src = wallpaper.src.large2x;
    downloadLink.href = wallpaper.src.original;
}

// Search event listener
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        currentQuery = query;
        currentPage = 1;
        gallery.innerHTML = ''; // Clear gallery for new search
        fetchWallpapers(currentQuery, currentPage);
    }
});

// Load more event listener
loadMoreBtn.addEventListener('click', () => {
    currentPage++;
    fetchWallpapers(currentQuery, currentPage);
});

// Load curated wallpapers on page load
fetchWallpapers();
