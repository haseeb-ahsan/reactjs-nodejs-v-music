import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [tracks, setTracks] = useState([]); // State to store track data
  const [keyword, setKeyword] = useState(""); // State to store search keyword
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status

  // Function to fetch tracks from the Spotify API
  const getTracks = async () => {
    setIsLoading(true); // Set loading to true before fetching data
    // Fetch data from the Spotify API, default to "trending" if no keyword is provided
    let data = await fetch(`https://v1.nocodeapi.com/haseebahsan/spotify/YekKOsSTueaNLEcw/search?q=${keyword === "" ? "trending" : keyword}&type=track`);
    let convertedData = await data.json(); // Convert the response to JSON
    console.log(convertedData.tracks.items);
    setTracks(convertedData.tracks.items); // Update the tracks state with fetched data
    setIsLoading(false); // Set loading to false after data is fetched
  }

  // useEffect hook to fetch tracks when the component mounts
  useEffect(() => {
    getTracks();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      {/* Navigation bar */}
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            vMusic
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
            {/* Search input */}
            <input
              value={keyword}
              onChange={event => { setKeyword(event.target.value) }}
              className="form-control me-2 w-75"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button onClick={getTracks} className="btn btn-outline-success">
              Search
            </button>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* Loading spinner */}
        <div className={`row ${isLoading ? "" : "d-none"}`}>
          <div className='col-12 py-5 text-center'>
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Displaying track cards */}
          {
            tracks.map((element) => {
              return (
                <div key={element.id} className='col-lg-3 col-md-6 py-2'>
                  <div className="card">
                    <img src={element.album.images[0].url} className="card-img-top" alt="Album cover" />
                    <div className="card-body">
                      <h5 className="card-title">{element.name}</h5>
                      <p className="card-text">
                        Artist: {element.album.artists[0].name}
                      </p>
                      <p className="card-text">
                        Release Date: {element.album.release_date}
                      </p>
                      <audio src={element.preview_url} controls className='w-100' />
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;

