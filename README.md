# vMusic

vMusic is a simple React application that fetches and displays tracks from the Spotify API. You can search for tracks by keywords and view details such as album cover, artist, release date, and preview the track.

![Screenshot from 2024-05-25 17-18-49](https://github.com/haseeb-ahsan/reactjs-nodejs-v-music/assets/84566594/95701742-154c-46fd-a74d-0773c37588ff)


## Features

- Search for tracks using keywords.
- Displays track details including album cover, artist, and release date.
- Preview track audio.
- Loading spinner while fetching data.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/vmusic.git
    cd vmusic
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.

## Usage

1. Upon loading, the app will display trending tracks by default.
2. Use the search bar to find specific tracks by keywords.
3. View track details and listen to previews by clicking the play button on each track card.

## Code Overview

### `App.js`

- **State Management**:
  - `tracks`: Stores the track data fetched from the Spotify API.
  - `keyword`: Stores the search keyword entered by the user.
  - `isLoading`: Manages the loading state while fetching data.

- **Functions**:
  - `getTracks`: An asynchronous function that fetches track data from the Spotify API based on the search keyword.

- **useEffect**:
  - Calls `getTracks` once when the component mounts to fetch initial data.

### Components

- **Navigation Bar**: Contains the search input and button to trigger the search.
- **Loading Spinner**: Displays while data is being fetched.
- **Track Cards**: Displays each track's album cover, name, artist, release date, and an audio preview.

### API Integration

The application fetches data from the Spotify API using the NoCodeAPI endpoint:

```javascript
let data = await fetch(`https://v1.nocodeapi.com/username/spotify/YekKOsSTueaNLEcw/search?q=${keyword === "" ? "trending" : keyword}&type=track`);

 
