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
                    <h1>Today's Risk of Monkeypox Cases</h1>
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
                    <ol>
                        <li>Wear masks and gloves whenever working with clients and change your gloves between each client</li>
                        <li>Wash your hands regularly with soap or hand sanitiser</li>
                        <li>Don't shake any used linen when handling them</li>
                        <li>Try to avoid bringing in house pets to work</li>
                        <li>Disinfect communal areas regularly</li>
                    </ol>
                </div>
            </div>}


            {/* Medium Level */}
            {countValue >= 10 && predicted_cases < 20 && <div className='recommendation-grid-layout'>
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
                    <ol>
                        <li>Wear masks and gloves whenever working with clients and change your gloves between each client</li>
                        <li>If possible use disposable sheets for areas where clients are being served</li>
                        <li>Disinfect communal areas between customers</li>
                        <li>Thoroughly disinfect communal items between use</li>
                        <li>Avoid clients using soft surfaces as these may not be sanitisable and may need to be disposed</li>
                    </ol>
                </div>
            </div>}



            {/* High Level */}
            {countValue >= 20 && <div className='recommendation-grid-layout'>
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
                    <ol>
                        <li>Wear masks and gloves whenever working with clients and change your gloves between each client</li>
                        <li>Immediately clean used linen after use and do not shake the linen when handling</li>
                        <li>Keep the working environment well ventilated</li>
                        <li>Thoroughly cover suspicious areas of skin with bandages when working on clients</li>
                        <li>Encourage customers to wear masks and not come in if they have suspicious rashes or experiencing flu-like symptoms</li>
                    </ol>
                </div>
            </div>}
        </div>
    )
}

export default Fill_Meter;