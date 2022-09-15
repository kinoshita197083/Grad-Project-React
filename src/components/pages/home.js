import React, { useEffect } from 'react'
import { Carousel } from '../carousel/carousel';
import HeroSection from '../HeroSection';
import HomeSectionIntro from '../HomeSectionIntro';
import { Counter } from '../number_count/number_count';
import Home_intro_section from '../home_intro_section/home_intro_section'
import './home.css'
import { Dashboard } from '../dashboard/dashboard';
import { MpxInfoSlider } from '../MpxInfoSlider/MpxInfoSlider'


function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='home-container'>
            <HeroSection />
            <MpxInfoSlider />

        </div>
    );
}

export default Home;