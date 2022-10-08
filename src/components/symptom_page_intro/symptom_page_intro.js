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
                    <p id='header-above-p'>Monkeypox Symptoms</p>
                    <h1>A Danger Forseen is Half Avoided</h1>
                    <p>
                        Symptoms are usually experienced <b>7-14 days after exposure</b>. However this duration can vary between <b>a few days to as long as 21 days</b>.
                        Individuals with <b>flu-like symptoms</b>, will usually develop rashes <b>1-4 days later</b>. But it isn't uncommon for individuals to experience rashes or sores prior to other symptoms.
                        The most common Monkeypox symptoms experienced by documented cases are:
                    </p>
                    <ul>
                        <li>Skin Lesions</li>
                        <li>Fever</li>
                        <li>Muscle ache</li>
                        <li>Fatigue</li>
                        <li>Swollen lymph node</li>
                    </ul>
                    <p>
                        Monkeypox can be transmissted from the first signs of symptoms
                        til all scabs have fallen off and a new layer of skin has formed. The virus <b>typically lasts 2-4 weeks</b> but may vary on a case to case basis.
                    </p>
                    <button onClick={handleScroll} className='s-i-intro-button'>Timeline</button>
                </div>
            </div>
            <div style={{ marginBottom: '8%' }} ref={ref} />
        </div>

    )
}

export default SymptomPageIntro;