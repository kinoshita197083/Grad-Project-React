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
                        <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt="" />
                        <h1>Tatto Artists</h1>
                        <p>Australia's first case occured in May 2022</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                        <h1>Masseuses</h1>
                        <p>To date, Victoria has the most cases</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                        <h1>Personal Trainers</h1>
                        <p>Look out for key indicators and symptoms</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                        <h1>Carers</h1>
                        <p>If infected, please isolate!</p>
                    </div>
                </li>
                <li class="pusher"></li>
            </ul>
        </div>
    )
}