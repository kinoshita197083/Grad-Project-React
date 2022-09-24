import React, { Component } from 'react'
import './home_section.css'

export function HomeSection() {

    return (
        <div className='home-section-container'>
            <div>
                <h1 id='home-section-heading'>"Be safe, be aware, be prepared!"</h1>
                <div className='display-circle' />
                <div className='display-circle2' />
                <p id='home-section-p'>
                    {/* Its critical that we're all do our part when it comes to infection control especially in relation to Monkeppox which has become a global outbreak! */}
                    Monkeypox is most commonly transmitted via skin-to-skin contact resulting in occupations involved in this department being a high risk community!
                </p>

                {/* <div className='display-circle' />
                <div className='display-circle' /> */}
            </div>
            <ul id="categories" class="clr">
                <li class="pusher"></li>
                <li>
                    <div>
                        <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/bw-tattoo.png" alt="" />
                        <h1>Tattoo</h1>
                        <p style={{ fontSize: '1.5rem', 'font-style': 'italic', 'font-weight': 'normal' }}>Artists</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/bw-spa.png" alt="" />
                        <h1>Massage</h1>
                        <p style={{ fontSize: '1.5rem', 'font-style': 'italic', 'font-weight': 'normal' }}>Therapists</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/bw-boxing.png" alt="" />
                        <h1>Personal</h1>
                        <p style={{ fontSize: '1.5rem', 'font-style': 'italic', 'font-weight': 'normal' }}>Trainers</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/bw-carer.png" alt="Personal Carers" />
                        <h1>Personal</h1>
                        <p style={{ fontSize: '1.5rem', 'font-style': 'italic', 'font-weight': 'normal' }}>Carers</p>
                    </div>
                </li>
                <li class="pusher"></li>
            </ul>
        </div>
    )
}