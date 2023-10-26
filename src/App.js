import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Hero from './components/Hero';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
  },
});

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchPhotos = async (query) => {
    let apiKey = 'wPUjz-naITz0wFjwIMooXqsvMSAofWta9iNdqbVd8ow'
    let apiUrl = !query ? 'https://api.unsplash.com/photos/?per_page=20' : `https://api.unsplash.com/search/photos?query=${query}&per_page=20&sort_by=popular`
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Client-ID ${apiKey}`
        }
      });
      //console.log(apiUrl)
      //console.log(response.data);
      setPhotos(response.data.results || response.data);
    } catch (error) {
      console.log('Error fetching photos:', error)
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, [])

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchPhotos(query);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar onSearch={handleSearch} />
        <Hero onSearch={handleSearch} />
        <Main photos={photos} />
      </div>
    </ThemeProvider>

  );
}

export default App;
