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

                {/* <div id="polina">
                    <h1>Gentlemen</h1> <br />
                    <b><p style={{ marginBottom: '2%', fontSize: '1.5rem' }}>How does it affect you?</p> <br /></b>
                    <p>
                        Globally, <b style={{ fontSize: '1.1rem' }}>over 98%</b> of Monkeypox cases have statistically occur in <b style={{ fontSize: '1.1rem' }}>males!</b>
                        <br /><br />
                        The top 4 countries having <b style={{ fontSize: '1.1rem' }}>majority</b> of their cases occuring in <b style={{ fontSize: '1.1rem' }}>age groups between 25-34!</b>
                        <br /> <br />
                        Click below to see the data driven symptoms & indicators of Monkeypox or scroll down for more information on monkeypox!
                    </p>
                    <Link to="/Data">
                        <a id='prevention-button'>Symptoms & Indicators</a>
                    </Link>
                </div> */}
                <div id='bolina'>
                    <h1 className='animate__animated animate__flipInX' >
                        Monkeypox
                    </h1>
                    <p>
                        Make it your mission, to work in safe conditions
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
            {/* <div class="arrow-wrap"  onClick={handleScroll}>
                <span class="arrow"></span>
            </div>
            <div style={{ marginBottom: '2.5rem' }} ref={ref} /> */}
            {/* <Symptom_Article_2 /> */}
        </div >
    )
}