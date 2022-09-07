import React, { useEffect } from 'react'
import HeroSection from '../HeroSection_iter_1';
import HomeSectionIntro from '../HomeSectionIntro_iter_1';
import './home_iter_1.css'

function Home_iter_1() {
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

export default Home_iter_1;