import React, { useRef } from 'react'
import './symptom_page_intro.css'
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function SymptomPageIntro() {

    const ref = useRef(null);

    const handleScroll = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div id='s-i-intro-wrapper'>
                <div id='left-half'>
                    <div className='main-img-wrapper'>
                        <img className='responsive' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/pexels-cottonbro-4125597.jpg' ></img>
                    </div>

                    <div className='second-img-wrapper'>
                        <img className='responsive' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/pexels-alena-shekhovtcova-6075004.jpg' ></img>
                    </div>

                    <div className='third-img-wrapper' />
                    <div className='forth-img-wrapper' />
                </div>

                <div id='right-half'>
                    <p id='header-above-p'>Monkeypox Symptom</p>
                    <h1>A Danger Forseen is Half Avoided</h1>
                    <p>Symptoms usually begin 7-14 days after exposure. This can be as short as a few days or as long as 21 days. However, some people may experience a rash or sores first, followed by other symptoms. Monkeypox symptoms may include:</p>
                    <ul>
                        <li>Skin Lesions</li>
                        <li>Fever</li>
                        <li>Muscle ache</li>
                        <li>Fatigue</li>
                        <li>Swollen lymph node</li>
                    </ul>
                    <p>If someone has flu-like symptoms, they will usually develop a rash 1-4 days later. Monkeypox can be spread from the time symptoms start until the rash has healed, all scabs have fallen off, and a fresh layer of skin has formed. The illness typically lasts 2-4 weeks.</p>
                    <button onClick={handleScroll} className='s-i-intro-button'>Timeline</button>
                </div>
            </div>
            <div style={{ marginBottom: '8%' }} ref={ref} />
        </div>

    )
}

export default SymptomPageIntro;