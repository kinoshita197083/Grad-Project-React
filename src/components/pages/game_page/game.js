import React, { useEffect } from 'react'
import { Intro_Hero } from '../../IntroHero/intro_hero'
import './game.css'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'black',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 620,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export function Game() {

    // Auto scroll to top everytime entering the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        <p id='game-sub-section-p-1'>
                            Check your knowledge and select the best practices for prevention and sanitising in this gym environment to combat monkeypox.
                            <br /><br />
                            Interact with the various objects in the level and correctly answer the questions to collect the keys and escape the room to complete the level.
                        </p>
                        <HtmlTooltip
                            title={
                                // <React.Fragment>
                                <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/keyboard_key_gym.png' width='500' height='100'></img>
                                // </React.Fragment>
                            }
                        >
                            <button id='game-main-section-button-1'>
                                <a target="_blank" href="https://game.charming-ape.click/" style={{ textDecoration: 'none', color: 'white' }}>
                                    PLAY
                                </a>
                            </button>
                        </HtmlTooltip>
                        {/* <button id='game-main-section-button-1'>
                            <a target="_blank" href="https://game.charming-ape.click/" style={{ textDecoration: 'none', color: 'white' }}>
                                PLAY
                            </a>
                        </button> */}
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