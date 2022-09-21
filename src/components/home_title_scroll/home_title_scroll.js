import React, { Component } from 'react'
import './home_title_scroll.css'

export function HomeTitleScroll() {

    return (
        <section class='section' id='home-title-scroll'>
            <div class='masthead-image' id='master-container'>
                <div class='content center'>
                    <h1 id='master'>
                        <div>Hello</div>
                        <div id='master-container-scroller'>
                            <div class='master-container-scroller_item'>
                                Trainer
                            </div>
                            <div class='master-container-scroller_item'>
                                Coach
                            </div>
                            <div class='master-container-scroller_item'>
                                Tattoo Artist
                            </div>
                            <div class='master-container-scroller_item'>
                                Carer
                            </div>
                            <div class='master-container-scroller_item'>
                                Spa attendant
                            </div>
                            <div class='master-container-scroller_item'>
                                Nurse
                            </div>
                            <div class='master-container-scroller_item'>
                                Physiotherapist
                            </div>
                            <div class='master-container-scroller_item'>
                                Hair dresser
                            </div>
                            <div class='master-container-scroller_item'>
                                Flight attendant
                            </div>
                            <div class='master-container-scroller_item'>
                                {/* Trainer */}
                            </div>
                        </div>
                        <div>Nice to see you.</div>
                    </h1>
                </div>
            </div>
        </section>
    )
}