import React, { useEffect, useState } from 'react'
import { Memo } from '../memo/memo'
import { Counter } from '../number_count/number_count'
import { Popup } from '../popup/popup'
import './dashboard.scss'
import { Heatmap } from '../heatmap/heatmap'

export function Dashboard() {

    //Line 137 for popup window message

    useEffect(() => {
        window.addEventListener('click', closePop);
    }, []);

    function openPop(popup_number) {
        document.querySelector(popup_number).style.display = "Block";
    }

    function closePop(e) {
        if (e.target == document.querySelector(".popup")) {
            document.querySelector(".popup").style.display = "none";
        } else if (e.target == document.querySelector(".pop2")) {
            document.querySelector(".pop2").style.display = "none";
        } else if (e.target == document.querySelector(".pop3")) {
            document.querySelector(".pop3").style.display = "none";
        } else if (e.target == document.querySelector(".pop4")) {
            document.querySelector(".pop4").style.display = "none";
        } else if (e.target == document.querySelector(".pop5")) {
            document.querySelector(".pop5").style.display = "none";
        }
    }


    const heading = 'Popup Message Heading';
    const message = 'Popup Message Body';

    return (
        <div className='dashboard-container'>

            {/* Animated Background */}
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            {/* Dashboard */}
            <div className="phone">
                <header className="header">

                </header>
                <section className="dashboard-title">
                    <h1>Five Things You Need To Know To Start Your Day</h1>
                    <p>I will think of something to put here later</p>
                </section>

                <section className="playlists">


                    <article className="dashboard-card " onClick={() => openPop('.pop1')}>
                        <div className="card-inner" >
                            <span className="card-pin"></span>
                            <div className="dashboard-card-image" >
                                <img src="https://assets.codepen.io/285131/illustration-hand-with-cigarette-icon.jpg" />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">Data Viz</span>

                                </div>
                                <h2 className="card-title">New Cases</h2>
                            </div>
                        </div>
                    </article>


                    <article className="dashboard-card" onClick={() => openPop('.pop2')}>
                        <div className="card-inner">
                            <span className="card-pin"></span>
                            <div className="dashboard-card-image">
                                <img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">Data Viz</span>

                                </div>
                                <h2 className="card-title">Critical Cases</h2>
                            </div>
                        </div>
                    </article>

                    <article className="dashboard-card" id='card3' onClick={() => openPop('.pop3')}>
                        <div className="card-inner">
                            <span className="card-pin"></span>
                            <div className="dashboard-card-image">
                                <img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">Data Viz</span>

                                </div>
                                <h2 className="card-title">Critical Cases</h2>
                            </div>
                        </div>
                    </article>

                    <article className="dashboard-card" onClick={() => openPop('.pop4')}>
                        <div className="card-inner">
                            <span className="card-pin"></span>
                            <div className="dashboard-card-image">
                                <img src="https://assets.codepen.io/285131/illustration-hand-with-cigarette-icon.jpg" />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">Data Viz</span>

                                </div>
                                <h2 className="card-title">New Cases</h2>
                            </div>
                        </div>
                    </article>


                    {/* Popup Message: Replace Data Vis */}
                    <div className='popup pop1'>
                        <div className="popcard">
                            <h1>{heading}</h1>
                            <p>{message}</p>
                        </div>
                    </div>


                    <div className="popup pop2">
                        <div className="popcard">
                            <h1>{heading}</h1>
                            <p>{message}</p>
                        </div>
                    </div>

                    <div className="popup pop3">
                        <div className="popcard">
                            <h1>{heading}</h1>
                            <p>{message}</p>
                        </div>
                    </div>

                    <div className="popup pop4">
                        <div className="popcard">
                            <h1>{heading}</h1>
                            <p>{message}</p>
                        </div>
                    </div>

                    <div className="popup pop5">
                        <div className="popcard">
                            <h1>{heading}</h1>
                            <p>{message}</p>
                        </div>
                    </div>

                    {/* Sticky Memo */}
                    <div className='dashboard-memo-container' style={{ position: 'absolute', right: '3%', top: '3%' }}>

                        <Memo content={<Counter memo={true} />} />
                    </div>


                </section>


                <section className="currently-playing" onClick={() => openPop('.pop5')}>

                    <article className="dashboard-card horizontal" style={{ width: '100%' }}>
                        <div className="card-inner">
                            {/* <span className="card-pin simple"></span>
                            <div className="dashboard-card-image">
                                <img src="https://assets.codepen.io/285131/pink-pastel-juicy-banana.jpg" />
                            </div>
                            <div className="card-content">
                                <div class="card-meta">
                                    <span className="card-meta-artist">Data Viz</span>
                                </div>
                                <h2 className="card-title">Vaccination
                                    <span className="card-time">3:40</span>
                                </h2>
                            </div> */}
                            <Heatmap/>
                            <span className="card-pin simple"></span>
                        </div>
                    </article>
                </section>
            </div>
        </div>



    )
}