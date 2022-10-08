import React, { Component } from 'react'
import { Intro_Hero } from '../../IntroHero/intro_hero'
import './game.css'

export function Game() {

    return (
        <div className='game-page-div'>
            <Intro_Hero
                image='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/game_character.png'
                heading='Learn As You Play'
            // style={{ backGroundColor: 'black' }}
            />
            <div id='game-main-section'>
                <div id='game-inner-section'>
                    <div className='game-img-div'>
                        <img className='game-img-1' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/game_layout.png'>
                        </img>
                    </div>

                    <div className='game-img-div-2'>
                        <img className='game-img-1' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/key.png'>
                        </img>
                    </div>

                    {/* <div className='game-img-div-3'>
                        <img className='game-img-1' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/key.png'>
                        </img>
                    </div> */}

                    <div id='game-sub-section-1'>
                        <h1 id='game-sub-section-heading-1'>Gym Goer</h1>
                        <p id='game-sub-section-p-1'>  The intention of the game is to check if the gym trainer is adhering to the protocols in a closed environment. The game also validates the knowledge of the user with the respect to the rising cases of monkeypox. If the user fails to answer the questions, they will not be handed over the key to progress through the game. In order to successfully reach the final checkpoint the user is required to interact with the objects and provide the right answers to the questions posed to them. </p>
                        <button id='game-main-section-button-1'>
                            <a target="_blank" href="https://game.charming-ape.click/" style={{ textDecoration: 'none', color: 'white' }}>
                                PLAY
                            </a>
                        </button>
                    </div>

                    {/* <button id='game-main-section-button-1'>
                        <a target="_blank" href="https://game.charming-ape.click/" style={{ textDecoration: 'none', color: 'white' }}>
                            PLAY
                        </a>
                    </button> */}
                </div>
            </div>

        </div>
    )
}