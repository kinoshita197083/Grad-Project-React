import React, { useEffect, useRef } from 'react'
import './monkeypox_page.css'
import { Link } from 'react-router-dom';
import { Symptom_Article_2 } from '../../../symtom_article_2';
import { MpxInfoSlider } from '../../MpxInfoSlider/MpxInfoSlider';
import 'animate.css';
import Tooltip from '@mui/material/Tooltip';


export function MonkeypoxPage() {

    //Handle Smooth Scroll
    const ref = useRef(null);

    const handleScroll = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='s-i-main-container'>
                <div className='video-container'>
                    <video id="bgvid" playsinline autoPlay muted loop>
                        <source src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/production+ID_4126113.mp4" type="video/mp4" />
                    </video>
                </div>
                <div id='bolina'>
                    <h1 className='animate__animated animate__flipInX' >
                        Monkeypox
                    </h1>
                    <p style={{ marginTop: '0%', fontWeight: 'bold', fontStyle: 'normal', fontSize: '3.2rem' }}>Service Squad</p>
                    <p style={{ marginTop: '1%' }}>
                        make it your mission,
                        to work in safe conditions
                    </p>
                    <Link to='/Prevention'>
                        <Tooltip title="Learn about best practice for prevention" placement="bottom">
                            <button className='hero-button' onClick={handleScroll}>
                                Get Started
                            </button>
                        </Tooltip>
                    </Link>

                </div>
            </div>
        </div >
    )
}