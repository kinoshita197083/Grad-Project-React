import React, { useState, useEffect } from 'react'
import './fill_meter.scss'
import axios from 'axios';

function Fill_Meter(props) {

    //Store the fetched data from GET request
    const [predicted_cases, setPredictedCases] = useState([]);

    //Call the GET request everytime the page loads up
    useEffect(() => {
        getPredictions();
    }, []);

    //GET request
    const getPredictions = () => {
        axios.get('https://jnkntsb3gd.execute-api.ap-southeast-2.amazonaws.com/test').then((response) => {
            const allPredictions = response.data.body;
            setPredictedCases(JSON.parse(allPredictions));
            console.log(allPredictions);
        })
            .catch(error => console.error('Error:$(error)'));
    }

    if (predicted_cases.length != 1) {
        var countValue = predicted_cases.map(item => Object.values(item)[1])[0]
    }
    else {
        var countValue = String(predicted_cases.map(item => Object.values(item)))
    }

    return (
        //I've coded 3 versions of the contents: Low, Medium, High 
        //The result from GET request (boundary) decides which version will be rendered


        //Low Level
        <div className='fill-meter-main'>
            {/* countValue refers to boundary :D */}
            {countValue < 10 && <div className='recommendation-grid-layout'>
                <div className='recommendation-main-card'>
                    <h1>Predicted Level of Monkeypox Cases</h1>
                    <div className='meter-wrapper'>
                        <div className="fu-progress-low">
                            <div className="fu-inner-low">
                                <div className="fu-percent-low percent"><span>Low</span></div>
                                <div className="water-low"></div>
                                <div className="glare-low"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommendations */}
                <div className='recommendation-card'>
                    <h1>Recommendations</h1>
                    <ul>
                        <li>recommendation1</li>
                        <li>recommendation2</li>
                        <li>recommendation3</li>
                        <li>recommendation4</li>
                        <li>recommendation5</li>
                    </ul>
                </div>
            </div>}


            {/* Medium Level */}
            {countValue >= 10 && predicted_cases < 50 && <div className='recommendation-grid-layout'>
                <div className='recommendation-main-card'>
                    <h1>Predicted Level of Monkeypox Cases</h1>
                    <div className='meter-wrapper'>
                        <div className="fu-progress-medium">
                            <div className="fu-inner-medium">
                                <div className="fu-percent-medium percent"><span>Medium</span></div>
                                <div className="water-medium"></div>
                                <div className="glare-medium"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommendations */}
                <div className='recommendation-card'>
                    <h1>Recommendations</h1>
                    <ul>
                        <li>recommendation1</li>
                        <li>recommendation2</li>
                        <li>recommendation3</li>
                        <li>recommendation4</li>
                        <li>recommendation5</li>
                    </ul>
                </div>
            </div>}



            {/* High Level */}
            {countValue >= 50 && <div className='recommendation-grid-layout'>
                <div className='recommendation-main-card'>
                    <h1>Predicted Level of Monkeypox Cases</h1>
                    <div className='meter-wrapper'>
                        <div className="fu-progress-high">
                            <div className="fu-inner-high">
                                <div className="fu-percent-high percent"><span>High</span></div>
                                <div className="water-high"></div>
                                <div className="glare-high"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommendations */}
                <div className='recommendation-card'>
                    <h1>Recommendations</h1>
                    <ul>
                        <li>recommendation1</li>
                        <li>recommendation2</li>
                        <li>recommendation3</li>
                        <li>recommendation4</li>
                        <li>recommendation5</li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default Fill_Meter;