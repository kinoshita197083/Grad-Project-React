import React, { Component } from 'react'
import HeroSection from '../HeroSection';
import HomeSectionIntro from '../HomeSectionIntro';
import './home.css'

function Home() {
    return (
        <div className='home-container'>
            <HeroSection />
            <HomeSectionIntro />

        </div>
    );
}

export default Home;