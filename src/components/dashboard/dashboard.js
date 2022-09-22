import React, { useEffect, useState } from 'react'
import { Memo } from '../memo/memo'
import { Counter } from '../number_count/number_count'
import { Popup } from '../popup/popup'
import './dashboard.scss'
import { Heatmap } from '../heatmap/heatmap'
import { LineChart } from '../linechart/linechart'
import '../counter/counter'
import { TagValue } from './tagvalue'

export function Dashboard() {

    const axios = require('axios');
    // PUT ALL DATA DUMPING HERE THE INDEX IS RESPECTIVE TO EACH POPUP
    const lineData = ['https://6hzhzcxuxd.execute-api.ap-southeast-2.amazonaws.com/test',
        'https://6bgf6f5gx8.execute-api.ap-southeast-2.amazonaws.com/prod/',
        'https://so937ufj91.execute-api.ap-southeast-2.amazonaws.com/prod/adjusted_mobility',
        'https://jnkntsb3gd.execute-api.ap-southeast-2.amazonaws.com/test']

    // const [predictions, getPredictions] = useState([]);

    // useEffect(() => {
    //     getPredictedData();
    // }, []);


    // const getPredictedData = () => {
    //     axios.get('https://6bgf6f5gx8.execute-api.ap-southeast-2.amazonaws.com/prod')
    //         .then((response) => {
    //             const allPredictions = response.data.body;
    //             // getPredictions(allPredictions);
    //             console.log(JSON.parse(allPredictions));
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    // }

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

    // Put here the values to be extracted and pushed into each visusalisation 
    const tagValues = ['21/9', '100', '0', '5']
    const heading = ['Community mobility during the last spike',
        'Cases in Victoria in the past 7 days',
        'Deaths in Victoria in the past 7 days',
        'Forecasted cases in the next 5 days',
        'Popup Message Heading5'];
    const message = ['Find below the top 5 locations which were busy!',
        '',
        'Popup Message Body3',
        'The data is inclusive of today',
        'Popup Message Body5'];

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
                    <h1>Your daily Monkeypox update!</h1>
                    <p>
                        Find below key information of Monkeypox cases in Victoria and our predictions!
                        <br></br><br></br>
                        Click for more information!
                    </p>
                </section>

                <section className="playlists">


                    <article className="dashboard-card " onClick={() => openPop('.pop1')}>
                        <div className="card-inner" >
                            <span className="card-pin"></span>
                            <div className="dashboard-card-image" >
                                <TagValue endpoint={lineData[0]} />
                                {/* <div className='counter'>{tagValues[0]}</div> */}
                                {/* <img src="https://assets.codepen.io/285131/illustration-hand-with-cigarette-icon.jpg" /> */}
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">Previous data</span>

                                </div>
                                <h2 className="card-title">Last spike in Victorian cases</h2>
                            </div>
                        </div>
                    </article>


                    <article className="dashboard-card" onClick={() => openPop('.pop2')}>
                        <div className="card-inner">
                            <span className="card-pin"></span>
                            <div className="dashboard-card-image">
                                <TagValue endpoint={lineData[2]} />
                                <div className='counter'>{tagValues[1]}</div>
                                {/* < CustomCounter id='counter1' props={countValues[0]} /> */}
                                {/* <img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" /> */}
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">Current data (live)</span>

                                </div>
                                <h2 className="card-title">Total cases in Victoria</h2>
                            </div>
                        </div>
                    </article>

                    {/* <article className="dashboard-card" id='card3' onClick={() => openPop('.pop3')}>
                        <div className="card-inner">
                            <span className="card-pin"></span>
                            <div className="dashboard-card-image">
                                <TagValue endpoint={lineData[2]} />
                                <div className='counter'>{tagValues[2]}</div>
                                < CustomCounter id='counter2' props = {countValues[1]} />
                                <img src="https://assets.codepen.io/285131/hand-drawn-monster-milkshake.jpg" />
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">Current data (live)</span>

                                </div>
                                <h2 className="card-title">Total deaths in Victoria</h2>
                            </div>
                        </div>
                    </article> */}

                    <article className="dashboard-card" onClick={() => openPop('.pop4')}>
                        <div className="card-inner">
                            <span className="card-pin"></span>
                            <div className="dashboard-card-image">
                                <TagValue endpoint={lineData[3]} />
                                {/* <div className='counter'>{tagValues[3]}</div> */}
                                {/* < CustomCounter id='counter3' props={countValues[2]} /> */}
                                {/* <img src="https://assets.codepen.io/285131/illustration-hand-with-cigarette-icon.jpg" /> */}
                            </div>
                            <div className="card-content">
                                <div className="card-meta">
                                    <span className="card-meta-number">Forecast data</span>

                                </div>
                                <h2 className="card-title">Victoria's predicted case count (today)</h2>
                            </div>
                        </div>
                    </article>


                    {/* Popup Message: Replace Data Vis */}
                    <div className='popup pop1'>
                        <div className="popcard">
                            <h1>{heading[0]}</h1>
                            <p>{message[0]}</p>
                            <Heatmap />
                        </div>
                    </div>


                    <div className="popup pop2">
                        <div className="popcard">
                            <h1>{heading[1]}</h1>
                            <p>{message[1]}</p>
                            <LineChart endpoint={lineData[1]} />
                        </div>
                    </div>

                    <div className="popup pop3">
                        <div className="popcard">
                            <h1>{heading[2]}</h1>
                            <p>{message[2]}</p>
                            <LineChart endpoint={lineData[2]} />
                        </div>
                    </div>

                    <div className="popup pop4">
                        <div className="popcard">
                            <h1>{heading[3]}</h1>
                            <p>{message[3]}</p>
                            <LineChart endpoint={lineData[3]} />
                        </div>
                    </div>

                    <div className="popup pop5">
                        <div className="popcard">
                            <h1>{heading[4]}</h1>
                            <p>{message[4]}</p>
                        </div>
                    </div>

                    {/* Sticky Memo */}
                    {/* <div className='dashboard-memo-container' style={{ position: 'absolute', right: '3%', top: '3%' }}>
                        <Memo content={<Counter memo={true} />} />
                    </div> */}


                </section>


                {/* <section className="currently-playing" onClick={() => openPop('.pop5')}>

                    <article className="dashboard-card horizontal" style={{ width: '100%' }}>
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
                </section> */}
            </div>
        </div>



    )
}