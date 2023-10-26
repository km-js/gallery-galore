import { AppBar, Box, Container, IconButton, Toolbar, Typography, InputBase, MenuItem, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useEffect } from 'react'

const pages = []

function Navbar({ onSearch }) {
  const [anchorEl, setAnchorEl] = useState(null);
  let [query, setQuery] = useState('');

  useEffect(() => {
    onSearch(query)
  }, [query])

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  function searchChanged(event) {
    console.log("Search Changed:", event.target.value)
    setQuery(event.target.value);
  }

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Toolbar disableGutters sx={{ color: "#000", display: "flex", justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{
            mr: 2, display: { xs: 'none', md: 'flex' }, textDecoration: 'none', color: '#333',
            fontFamily: 'Pattaya',
            fontSize: '30px',
            fontWeight: 400
          }}>Gallery Galore</Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            ></Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>))}
          </Box>

          <Box class="search">
            <Box class="SearchIconWrapper" sx={{ width: '500px' }}>
              <InputBase onChange={searchChanged} placeholder='Search Images here' startAdornment={
                <SearchIcon style={{ color: 'grey', position: "absolute", left: "10px" }} />} sx={{
                  '& .MuiInputBase-input': {
                    border: '1px solid black',
                    borderRadius: '8px',
                    paddingLeft: '35px',
                    width: { xs: '250px', md: '419px' },
                    textAlign: 'left'
                  },
                }} />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar