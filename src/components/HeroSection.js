import React, { Component } from 'react'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <img className='image' src='public/mp.jpg'></img>
            <h1>Endemic</h1>
            <p>Monkeypox Virus Infection in Humans across 16 Countries</p>
        </div>
    )
}

export default HeroSection