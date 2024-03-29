
import './MpxInfoSlider.css'
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CardMedia, CardContent } from '@mui/material'

export function MpxInfoSlider() {
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
            <Carousel
                interval={null}
                navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        backgroundColor: 'navy',
                        borderRadius: 30,
                        opacity: 0.7,
                    }
                }}
                NextIcon={<span className="fas fa-chevron-right pointer" />}
                PrevIcon={<span className="fas fa-chevron-left pointer" />}>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

function Item(props) {
    return (
        <div className='mpx-card-container'>
            <div className='mpx-card-img'>
                <CardMedia
                    component="img"
                    image={props.item.image}
                    alt={props.item.imageDescription}
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                    height="600rem"
                />
            </div>
            <div>
                <CardContent className='mpx-intro-card'>
                    <h1 className='carousel-heading'>{props.item.name}</h1>
                    <p className='carousel-body'>{props.item.description}</p>
                </CardContent>
            </div>
        </div>
    )
}
