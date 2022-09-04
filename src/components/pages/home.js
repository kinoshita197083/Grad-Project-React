import React, { useEffect } from 'react'
import HeroSection from '../HeroSection';
import HomeSectionIntro from '../HomeSectionIntro';
import './home.css'

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='home-container'>
            <HeroSection />
            <HomeSectionIntro />
            <div style={{ height: '5rem' }}></div>

        </div>
    );
}

export default Home;