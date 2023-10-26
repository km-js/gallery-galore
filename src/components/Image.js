import React, { useState } from 'react'
import { Card, CardContent,Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PopUp from './PopUp';

function Image({ photo }) {
    let [popupOpen, setPopupOpen] = useState(false)

    function handleImageClicked() {
        setPopupOpen(true)
    }

    return (
        <>
            <Card key={photo.id} onClick={handleImageClicked} sx={{ borderRadius: '8px 8px 0px 0px', marginBottom: '18px', cursor: 'pointer' }}>
                <img style={{
                    objectFit: 'cover', width: '100%',
                    height: 'auto'
                }} src={photo.urls.regular} alt={photo.description} />
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '-15px' }}>
                    <div style={{ display: 'flex' }}>
                        <img
                            src={photo.user.profile_image.small}
                            alt={photo.user.first_name}
                            style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%', }} />
                        <div style={{ padding: '5px 10px' }}>
                            <Typography sx={{ textAlign: 'left', color: '#4F4F4F', fontWeight: 700, fontSize: '12px' }}>{photo.user.first_name}</Typography><Typography sx={{ textAlign: 'left', fontSize: '10px', fontWeight: '600', color: '#A7A7A7', fontStyle: 'italic' }}>@{photo.user.instagram_username}</Typography>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <ThumbUpOffAltIcon sx={{ fontSize: '20px', color: '#4F4F4F' }} />
                        <Typography sx={{ fontSize: '15px', fontWeight: 700, color: '#4F4F4F', color: '#A7A7A7', padding: '0 4px' }}>{photo.likes}</Typography>
                    </div>

                </CardContent></Card>
            <PopUp photo={photo} popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
        </>
    )
}

export default Image