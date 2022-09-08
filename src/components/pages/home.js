import React, { useEffect } from 'react'
import { Carousel } from '../carousel/carousel';
import HeroSection from '../HeroSection';
import HomeSectionIntro from '../HomeSectionIntro';
import { Counter } from '../number_count/number_count';
import Home_intro_section from '../home_intro_section/home_intro_section'
import './home.css'


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='home-container'>
            <HeroSection />
            {/* <Home_intro_section /> */}
            {/* <HomeSectionIntro /> */}
            {/* <Carousel /> */}
            <Counter />
            <div style={{ height: '5rem' }}></div>

        </div>
    );
}

export default Home;