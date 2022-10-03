import React, { useState, useEffect } from 'react'
import './prediction_page.css'
import { Intro_Hero } from '../../IntroHero/intro_hero'
import Fill_Meter from '../../fill_meter/fill_meter';
// import axios from 'axios';

export function Prediction_page() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id='prediction-page-main'>
            <Intro_Hero
                heading='Five Things You Need to Know Today'
                image='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/forcast1-modified.jpg'
            />
            <h1 className='prediction-page-headings'>Predicted level of monkeypox cases</h1>
            <div className='fill-meter-container'>
                <Fill_Meter />
            </div>
        </div>
    )
}