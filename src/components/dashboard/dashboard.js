import React from 'react'
import { Memo } from '../memo/memo'
import { Counter } from '../number_count/number_count'
import './dashboard.scss'

export function Dashboard() {

    return (
        <div className='dashboard-container'>

            {/* Animated Background */}
            <ul class="circles">
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


                    <article className="dashboard-card">
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


                    <article className="dashboard-card">
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

                    <article className="dashboard-card">
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

                    {/* Sticky Memo */}
                    <div className='dashboard-memo-container' style={{ position: 'absolute', right: '3%', top: '3%' }}>

                        <Memo content={<Counter memo={true} />} />
                    </div>


                    <div style={{ marginLeft: '3%' }}></div>

                    <article className="dashboard-card" >
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



                </section>


                <section className="currently-playing">

                    <article className="dashboard-card horizontal">
                        <div className="card-inner">
                            <span className="card-pin simple"></span>
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
                            </div>
                            <span className="card-pin simple"></span>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
}