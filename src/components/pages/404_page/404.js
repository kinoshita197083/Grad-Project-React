import React, { useEffect } from 'react'
import './404.css'
import { Intro_Hero } from '../../IntroHero/intro_hero'


export function NotFound() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='prediction-page-main'>
            <Intro_Hero
                heading='We are working on it :D'
                image='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/forcast1-modified.jpg'
            />
            <h1 className='prediction-page-headings'>This page is currently unavailable</h1>
        </div>
    )
}