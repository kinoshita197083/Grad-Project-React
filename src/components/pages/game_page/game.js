import React, { Component } from 'react'
import { Intro_Hero } from '../../IntroHero/intro_hero'
import './game.css'

export function Game() {

    return (
        <div className='game-page-div'>
            <Intro_Hero
                image=''
                heading='Game'
            />
            <div id='game-main-section'>
                <div id='game-inner-section'>
                    <div className='game-img-div'>
                        <img className='game-img-1' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/pexels-alena-shekhovtcova-6075004.jpg'>
                        </img>
                    </div>
                    <div id='game-sub-section-1'>
                        <h1 id='game-sub-section-heading-1'>Introduction</h1>
                        <p id='game-sub-section-p-1'>  Line 1:17:   'Component' is defined but never used                                                                      no-unused-vars
                            Line 9:13:   Imported JSX component Intro_Hero must be in PascalCase or SCREAMING_SNAKE_CASE                            react/jsx-pascal-case
                            Line 15:21:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
                            Line 19:21:  Headings must have content and the content must be accessible by a screen reader    </p>
                    </div>
                    <button id='game-main-section-button-1'>
                        <a target="_blank" href="https://game.charming-ape.click/" style={{ textDecoration: 'none', color: 'white' }}>
                            PLAY
                        </a>
                    </button>
                </div>
            </div>

        </div>
    )
}