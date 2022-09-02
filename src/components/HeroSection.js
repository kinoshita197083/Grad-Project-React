import React, { Component } from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <header>
            <div className='hero-container'>
                {/* <img className='image' src='https://i.postimg.cc/HnnS2Tw8/mp.jpg'></img> */}
                <h1 className='hero-container-title'>Monkeypox</h1>
                <p className='hero-container-p1'>Learn about symptoms, treatment and prevention</p>
            </div>
        </header>
    )
}

export default HeroSection