import React, { Component } from 'react'
import './home_title_scroll.css'

export function HomeTitleScroll() {

    return (
        <section class='section' id='home-title-scroll'>
            <div class='masthead-image' id='master-container'>
                <div class='content center'>
                    <h1 id='master'>
                        <div>Learn about</div>
                        <div id='master-container-scroller'>
                            <div class='master-container-scroller_item'>
                                Vulnerable communities
                            </div>
                            <div class='master-container-scroller_item'>
                                Symptoms
                            </div>
                            <div class='master-container-scroller_item'>
                                Indicators
                            </div>
                            <div class='master-container-scroller_item'>
                                Prevention
                            </div>
                            <div class='master-container-scroller_item'>
                                Vulnerable communities
                            </div>
                            <div class='master-container-scroller_item'>
                                Sanitising tips and tricks
                            </div>
                            <div class='master-container-scroller_item'>
                                Current accumulated cases
                            </div>
                            <div class='master-container-scroller_item'>
                                Case predictions
                            </div>
                            <div class='master-container-scroller_item'>
                                Data driven statistics
                            </div>
                            <div class='master-container-scroller_item'>
                                {/* Trainer */}
                            </div>
                        </div>
                        <div>with CharmingApe</div>
                    </h1>
                </div>
            </div>
        </section>
    )
}