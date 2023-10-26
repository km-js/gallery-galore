import React from 'react'
import { ImageList } from '@mui/material';
import Image from './Image';
import { useTheme, useMediaQuery } from '@mui/material'

function Main({ photos }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <ImageList variant="masonry" cols={!isSmallScreen ? 3 : 2} gap={18} sx={{ padding: '30px' }}>
            {photos.map(photo => (
                <Image photo={photo} />
            ))}
        </ImageList>
    )
}

export default Main