
import './MpxInfoSlider.css'
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Card, CardMedia, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';

export function MpxInfoSlider(props) {
    var items = [
        {
            image: 'https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/MicrosoftTeams-image+(7).png',
            imageDescription: 'What is monkeypox?',
            name: "What is Monkeypox?",
            description: "Monkeypox is a virus which can infect anybody if sufficiently exposed. The virus had its first outbreak in USA in 2003. "
        },
        {
            image: 'https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/MicrosoftTeams-image+(8).png',
            imageDescription: 'Impact in Victoria',
            name: "Monkeypox's Impact in Victoria?",
            description: "The delayed onset of the global outbreak has reached Australian shores with our first case occuring in May 2022. Since then, Victoria has the highest percentage of australias cases as of September 2022."
        },
        {
            image: 'https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/MicrosoftTeams-image+(3).png',
            imageDescription: 'How does this effect you?',
            name: "How does it effect you?",
            description: "Monkeypox is known to spread via skin-to-skin contact which is experienced most by people in the service industry. Statistics have shown that Males are more commonly infected with the top 4 countries having the most cases in age ranges of 25-34!"
        }
    ]

    return (
        <div className='mpx-container'>
            {/* <Typography fontSize={40} align='center' sx={{pb: '1rem'}}>
                Lets take a look into monkeypox!
            </Typography> */}
            <div style={{ height: '1rem' }}></div>
            <Carousel
                interval={null}
                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        backgroundColor: 'cornflowerblue',
                        borderRadius: 0,
                        opacity: 1,
                    }
                }}
                NextIcon={<span class="fas fa-chevron-right" />}
                PrevIcon={<span class="fas fa-chevron-left" />}>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

function Item(props) {
    return (
        <Grid container direction="row" alignItems='center' sx={{ pr: '5rem', pl: '5rem' }}>
            <Grid item xs={8}>
                <CardMedia
                    component="img"
                    image={props.item.image}
                    alt={props.item.imageDescription}
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                    height="800rem"
                />
            </Grid>
            <Grid item xs={4}>
                <CardContent className='introCard' height='100%'>
                    <Typography fontSize={30}>{props.item.name}</Typography>
                    <Typography fontSize={20}>{props.item.description}</Typography>
                </CardContent>
            </Grid>
        </Grid>
    )
}
