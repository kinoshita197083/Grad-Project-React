import React, { useEffect } from 'react'
import './symptom_indicator_2nd.css'
import { Link } from 'react-router-dom';

export function Symptom_Indicator_2nd() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='s-i-main-container'>
            <video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsinline autoPlay muted loop>
                <source src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/production+ID_4126113.mp4" type="video/mp4" />
            </video>
            <div id="polina">
                <h1>Gentleman</h1> <br />
                <p style={{ marginBottom: '2%' }}>How does it affect you?</p> <br />
                <p>Monkeypox is known to spread via skin-to-skin contact which is experienced most by people in the service industry. Statistics have shown that Males are more commonly infected with the top 4 countries having the most cases in age ranges of 25-34!</p> <br /> <br />
                <p>Monkeypox's Impact in Victoria?</p> <br />
                <p>The delayed onset of the global outbreak has reached Australian shores with our first case occuring in May 2022. Since then, Victoria has the highest percentage of australias cases as of September 2022.</p>
                <Link to="/Stepper">
                    <a id='prevention-button'>Prevention</a>
                </Link>

            </div>
        </div>
    )
}