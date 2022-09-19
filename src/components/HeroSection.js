import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './HeroSection.css'

function HeroSection() {
    return (
        <header>
            <div className='hero-container'>
                {/* <img className='image' src='https://i.postimg.cc/HnnS2Tw8/mp.jpg'></img> */}
                <h1 className='hero-container-title'>Monkeypox</h1>
                <p className='hero-container-p1'>Learn about symptoms, treatment and prevention</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
                    <Link to='/Dashboard' style={{ textDecoration: 'none' }}>
                        <div className='button1' >
                            <Button variant="contained" size='large' >Dashboard</Button>
                        </div>
                    </Link>

                    {/* <Link to='/Monkeypox' style={{ textDecoration: 'none' }}> */}
                    <a href='http://fit5120ta10game.s3-website-ap-southeast-2.amazonaws.com/' target='_blank' style={{ textDecoration: 'none' }}>
                        <div className='button1' >
                            <Button variant="contained" size='large' color='secondary' >Gym Simulator</Button>
                        </div>
                    </a>

                    {/* </Link> */}
                </div>


            </div>
        </header>
    )
}

export default HeroSection