import './App.css';
import Login from './components/LoginView/Login';
import Gallery from './components/GalleryView/Gallery';
import Artist from './components/ArtistView/Artist';
import Genre from './components/GenreView/Genre';
import Painting from './components/PaintingsView/Painting';
import PaintingDetails from './components/PaintingModal/PaintingDetails';
import Favorites from './components/Favorite';
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';

function App() {
  const [artData, setArtData] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [galleryPaintings, setGalleryPaintings] = useState([]);
  const [genrePaintings, setGenrePaintings] = useState([]);

  // ARTIST FETCH
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const url = import.meta.env.VITE_URL + '/artists';
        const resp = await fetch(url, {
          headers: {
            APIKEY: import.meta.env.VITE_API_KEY,
          },
        });

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const fetchedData = await resp.json();
        setArtData(fetchedData);
      } catch (err) {
        setError(err);
      }
    };
    fetchArtists();
  }, []);

  // ARTIST PAINTING FETCH
  const fetchPaintingsByArtist = async (artistId) => {
    if (artistId) {
      try {
        const url = import.meta.env.VITE_URL + '/paintings/artist/' + artistId;
        const resp = await fetch(url, {
          headers: {
            APIKEY: import.meta.env.VITE_API_KEY,
          },
        });

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const fetchedData = await resp.json();
        setPaintings(fetchedData);
      } catch (err) {
        setError(err);
        console.error('Error fetching paintings: ', err);
      }
    } else {
      setPaintings([]);
    }
  };

  // GALLERY FETCH
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const url = import.meta.env.VITE_URL + '/galleries';
        const resp = await fetch(url, {
          headers: {
            APIKEY: import.meta.env.VITE_API_KEY,
          },
        });

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const fetchedData = await resp.json();
        setGalleryData(fetchedData);
      } catch (err) {
        setError(err);
      }
    };
    fetchGalleries();
  }, []);

  // GALLERY PAINTINGS FETCH
  const fetchPaintingsByGallery = async (galleryId) => {
    if (galleryId) {
      try {
        const url = import.meta.env.VITE_URL + '/paintings/galleries/' + galleryId;
        const resp = await fetch(url, {
          headers: {
            APIKEY: import.meta.env.VITE_API_KEY,
          },
        });

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const fetchedData = await resp.json();
        setGalleryPaintings(fetchedData);
      } catch (err) {
        setError(err);
        console.error('Error fetching gallery paintings: ', err);
      }
    } else {
      setGalleryPaintings([]);
    }
  };

  // GENRE FETCH
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    const fetchGenreData = async () => {
      try {
        const url = import.meta.env.VITE_URL + '/genres';
        const resp = await fetch(url, {
          headers: {
            APIKEY: import.meta.env.VITE_API_KEY,
          },
        });

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const fetchedData = await resp.json();
        setGenreData(fetchedData);
      } catch (err) {
        setError(err);
      }
    };
    fetchGenreData();
  }, []);

  // GENRE PAINTINGS
  const fetchPaintingsByGenre = async (genreId) => {
    if (genreId) {
      try {
        const url = import.meta.env.VITE_URL + '/paintings/genre/' + genreId;
        const resp = await fetch(url, {
          headers: {
            APIKEY: import.meta.env.VITE_API_KEY,
          },
        });

        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }

        const fetchedData = await resp.json();
        setGenrePaintings(fetchedData);
      } catch (err) {
        setError(err);
        console.error('Error fetching paintings: ', err);
      }
    } else {
      setGenrePaintings([]);
    }
  };

  // Create a wrapper function
  const handleGenreSelection = (genreId) => {
    fetchPaintingsByGenre(genreId);
  };

  const [favArtists, setFavArtists] = useState([])
  const artAddToFavorites = (firstName, lastName) => {
    setFavArtists(prevFavArtists => [...prevFavArtists, { firstName, lastName }])
  }

  const [favGalleries, setFavGalleries] = useState([])
  const galleriesAddToFavorites = (name) => {
    setFavGalleries(prevFavGalleries => [...prevFavGalleries, {name}])
  }

  const [favPaintings, setFavPaintings] = useState([])
  const paintingsAddToFavorites = (title) => {
    setFavPaintings(prevFavPaintings => [...prevFavPaintings, {title}])
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" />
        <Route
          path="/gallery"
          element={
            <Gallery
              data={galleryData}
              fetchPaintings={fetchPaintingsByGallery}
              paintings={galleryPaintings}
              update={galleriesAddToFavorites}
            />
          }
        />
        <Route
          path="/artist"
          element={
            <Artist
              data={artData}
              fetchPaintings={fetchPaintingsByArtist}
              paintings={paintings}
              update={artAddToFavorites}
            />
          }
        />
        <Route
          path="/genre"
          element={
            <Genre
              data={genreData}
              fetchPaintings={handleGenreSelection} // Pass the wrapper
              paintings={genrePaintings}
              update={paintingsAddToFavorites}
            />
          }
        />
        <Route path="/painting" element={<Painting />} />
        <Route path="/paintingdetails" element={<PaintingDetails />} />
        <Route path="/favorites" element={
          <Favorites
            artists={favArtists}
            galleries={favGalleries}
            paintings={favPaintings}
          />} />
      </Routes>
    </main>
  );
}

export default App;