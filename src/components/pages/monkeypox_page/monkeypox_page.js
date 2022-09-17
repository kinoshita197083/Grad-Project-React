import React, { useEffect } from 'react'
import './monkeypox_page.css'
import { Link } from 'react-router-dom';
import { Symptom_Article_2 } from '../../../symtom_article_2';

export function MonkeypoxPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className='s-i-main-container'>
                <video id="bgvid" playsinline autoPlay muted loop>
                    <source src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/production+ID_4126113.mp4" type="video/mp4" />
                </video>
                <div id="polina">
                    <h1>Gentleman</h1> <br />
                    <p style={{ marginBottom: '2%' }}>How does it affect you?</p> <br />
                    <p>Monkeypox is known to spread via skin-to-skin contact which is experienced most by people in the service industry. Statistics have shown that Males are more commonly infected with the top 4 countries having the most cases in age ranges of 25-34!</p> <br /> <br />

                    <Link to="/Stepper">
                        <a id='prevention-button'>Prevention</a>
                    </Link>

                </div>

            </div>

            <Symptom_Article_2 />
        </div>
    )
}