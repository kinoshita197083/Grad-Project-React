import React, { Component } from 'react'
import './home_section.css'

export function HomeSection() {

    return (
        <div className='home-section-container'>
            <div className='home-section-intro'>
                <h1 id='home-section-heading'>"Be safe, be aware, be prepared!"</h1>
                <div className='display-circle' />
                <div className='display-circle2' />
                <p id='home-section-p'>
                    Monkeypox is most commonly transmitted via skin-to-skin contact resulting in occupations involved in this department being a high risk community!
                </p>
            </div>
            <ul id="categories" className="clr">
                <li class="pusher"></li>
                <li>
                    <div>
                        <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/bw-tattoo.png" alt="" />
                        <h1>Tattoo</h1>
                        <p>Artists</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/bw-spa.png" alt="" />
                        <h1>Massage</h1>
                        <p>Therapists</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/bw-boxing.png" alt="" />
                        <h1>Personal</h1>
                        <p>Trainers</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/bw-carer.png" alt="Personal Carers" />
                        <h1>Personal</h1>
                        <p>Carers</p>
                    </div>
                </li>
                <li className="pusher"></li>
            </ul>
        </div>
    )
}