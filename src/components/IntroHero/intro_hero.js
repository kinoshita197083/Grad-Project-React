import React, { Component } from 'react'
// import './intro_hero.css'

export function Intro_Hero(props) {

    const container_style = {
        background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),' + "url(" + props.image + ")",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '30rem',
        width: '100%',
        boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.5)',
        objectFit: 'contain',
        position: 'relative',
        textAlign: 'center',
        paddingTop: '17rem',
        boxShadow: '0px 3px 5px rgb(93, 93, 94)',
        top: '0'
    };

    const h1Style = {
        color: 'white',
        fontSize: '4.5rem'
    }

    return (
        <div className='intro-hero-container' style={container_style}>
            <h1 className='intro-hero-heading' style={h1Style}>{props.heading}</h1>
        </div>
    )


}