import React from 'react'
import { Counter } from '../number_count/number_count'
import './home_intro_section.css'

function Home_intro_section() {

    return (
        <section className='home-intro-container'>
            <div className='home-intro'>
                <h1>
                    What is Monkeypox?
                </h1>
            </div>
            <Counter />
        </section>
    )
}

export default Home_intro_section;