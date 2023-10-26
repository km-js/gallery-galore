import { Box, Button, Modal, Typography } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PopUp({ photo, popupOpen, setPopupOpen }) {

    const [topics, setTopics] = useState([])
    const fetchTopics = async (query) => {
        let apiKey = 'wPUjz-naITz0wFjwIMooXqsvMSAofWta9iNdqbVd8ow'
        let apiUrl = !query ? 'https://api.unsplash.com/topics/?per_page=20' : `https://api.unsplash.com/search/photos?query=${query}&per_page=20&sort_by=popular`
        try {
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Client-ID ${apiKey}`
                }
            });
            console.log(apiUrl)
            console.log(response.data);
            setTopics(response.data.results || response.data);
        } catch (error) {
            console.log('Error fetching photos:', error)
        }
    };
    useEffect(() => {
        fetchTopics();
    }, [])

    const boxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        padding: '10px',
        maxWidth: {xs: '90vw', md:'900px'},
        width: '90%',
        height: '550px',
        padding: 0,
        borderRadius: '16px',
        border: '1px solid #E5E5E5',
        background: '#FFF',
        overflowY: 'auto',
        textAlign: 'center',
    }

    function downloadClicked() {
        const imageUrl = photo.links.download;

        const link = document.createElement('a');
        link.href = imageUrl;
        link.target = '_blank';
        link.download = 'downloaded_image.jpg';

        link.click();
    }



    return (
        <Modal open={popupOpen} onClose={() => setPopupOpen(false)}>
            <Box sx={boxStyle}>
                <img style={{
                    objectFit: 'cover',
                    width: '50%',
                    height: '80%',
                    display: 'inline-block',
                    objectPosition: 'center',
                }} src={photo.urls.regular} alt={photo.description} />

                {/* share and download box */}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: '-40px 5% 0' }}>
            
                    <Box>
                        <Button onClick={downloadClicked} variant="contained" sx={{
                            borderRadius: '4px',
                            background: '#3CB46E'
                        }}>Download Image</Button>
                    </Box>
                </Box>

                {/* name and likes box */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: '5%', marginRight: '5%' }}>
                    <Box sx={{ display: 'flex' }}>
                        <img
                            src={photo.user.profile_image.small}
                            alt={photo.user.first_name}
                            style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%', }} />

                        <Box sx={{ padding: '5px 10px' }}>
                            <Typography sx={{ textAlign: 'left', color: '#4F4F4F', fontWeight: 700, fontSize: '12px' }}>{photo.user.first_name}</Typography>
                            <Typography sx={{ textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#A7A7A7', fontStyle: 'italic' }}>@{photo.user.instagram_username}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', padding: '10px' }}>
                        <ThumbUpOffAltIcon sx={{ fontSize: '20px', color: '#4F4F4F' }} />
                        <Typography sx={{ fontSize: '15px', fontWeight: 700, color: '#4F4F4F', color: '#A7A7A7', padding: '0 4px' }}>{photo.likes}</Typography>
                    </Box>
                </Box>

                {/* extra info box */}
                <Box>
                    <Typography
                        sx={{
                            color: '#4F4F4F',
                            fontSize: '15px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            textAlign: 'left',
                            margin: '5px 5%'
                        }} id="info">
                        More Info
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', color: '#A7A7A7' }}>
                        <Typography sx={{ fontSize: '13px', textAlign: 'left', marginLeft: '5%' }}>Description: {photo.description}</Typography>
                        <Typography sx={{ fontSize: '13px', textAlign: 'left', marginLeft: '5%' }}>Date created: {photo.created_at}</Typography>

                    </Box>

                </Box>


                {/* related tags box */}
                <Box sx={{}}>
                    <Typography sx={{
                        color: '#4F4F4F',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        textAlign: 'left',
                        margin: '5px 5%'
                    }}>Trending Topics</Typography>
                    <Box sx={{display: 'flex', gap: '10px', margin: '0 5%', flexWrap: 'wrap'}}>
                        {topics.map(topic => (

                            <Box sx={{borderRadius: '4px',
                                background: '#ECECEC', padding:'5px'}}>

                                <a style={{textDecoration: 'none', color: '#4F4F4F',
                                fontSize: '14px',
                                fontWeight: 500, padding: '10px'}}
                                    href="#"
                                >
                                    {topic.title}
                                </a>
                            </Box>
                        ))}
                    </Box>
                </Box>

            </Box>
        </Modal >
    )
}

export default PopUp