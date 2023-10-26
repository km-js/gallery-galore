import { Box, InputBase, Typography, useMediaQuery } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react';

const imageUrl = "https://img.freepik.com/free-photo/brown-green-leafed-forest-during-night-time_198169-235.jpg?w=740&t=st=1697993192~exp=1697993792~hmac=8365e630d741d6c44cfc1260ff7333451daf462427039d1881f233ac5e62b7c1";

function Hero({ onSearch }) {

  let [query, setQuery] = useState('');

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    onSearch(query)
  }, [query])

  function searchChanged(event) {
    console.log("Search Changed:", event.target.value)
    setQuery(event.target.value);
  }

  return (
    <>
      <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px', width: '100vw' }}>
        <div>
          <Typography color="#fff" sx={{ fontSize: '32px', fontWeight: '700', paddingTop: { xs: '25%', md: '15%' } }}>Download High Quality Images by creators</Typography>
          <Typography style={{
            color: '#C4C4C4',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '20px'
          }}>Over 2.4 million+ stock Images by our talented community</Typography>

          <Box class="search">
            <InputBase onChange={searchChanged} placeholder={!isSmallScreen ? 'Search high resolution images, categories, wallpapers' : 'Search Images here'} startAdornment={
              <SearchIcon style={{ color: 'grey', position: 'absolute', left: '10px' }} />} sx={{
                '& .MuiInputBase-input': {
                  paddingLeft: '45px',
                  minWidth: { md: '819px', sx: '100px' },
                  width: '100%',
                  height: '50px',
                  color: 'grey',
                  background: '#fff',
                  textAlign: 'left',
                  letterSpacing: '1px'
                },
              }} />
          </Box>
        </div>
      </div>
    </>
  )
}

export default Hero