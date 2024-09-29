# VM-Wallpapers

A simple wallpaper gallery website that fetches high-quality images from the Pexels API. Users can search for wallpapers, view them in full-screen preview, and download their favorite images.

## Features

- **Curated Wallpapers:** Displays a curated collection of wallpapers from Pexels on the homepage.
- **Search Functionality:** Users can search for specific wallpapers based on keywords.
- **Full-Screen Preview:** Click on any wallpaper to view it in full-screen mode.
- **Download Option:** Direct download of the high-resolution version of the wallpaper.

## Technologies Used

- **HTML5** for structuring the webpage.
- **CSS3** for styling and layout.
- **JavaScript (ES6)** for dynamic content fetching and interactivity.
- **Pexels API** for fetching wallpaper images.

## How It Works

1. The homepage displays curated wallpapers fetched from the Pexels API.
2. Users can search for specific images using the search bar.
3. The website automatically loads more wallpapers when the "Load More" button is clicked.
4. Clicking on any wallpaper opens a full-screen preview with a download option.

## Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/vrushal09/vmwallpapers.git
    ```

2. Open the project folder:

    ```bash
    cd wallpaper-gallery
    ```

3. Open `index.html` in your browser.

    Alternatively, you can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code to launch the website locally.

## API Key Configuration

1. Go to [Pexels API](https://www.pexels.com/api/) and sign up to get your API key.
2. Replace the placeholder `apiKey` in the JavaScript file with your Pexels API key.

    ```javascript
    const apiKey = 'YOUR_API_KEY_HERE';
    ```

## Folder Structure

