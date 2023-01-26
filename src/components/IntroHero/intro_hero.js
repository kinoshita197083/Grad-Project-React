import React, { Component } from 'react'
import 'animate.css';
import './intro_hero.css'

export function Intro_Hero(props) {

    const container_style = {
        background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),' + "url(" + props.image + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };


    return (
        <div className='intro-hero-container' style={container_style}>
            <h1 className='intro-hero-heading animate__animated animate__fadeInDown'>{props.heading}</h1>
        </div>
    )


}