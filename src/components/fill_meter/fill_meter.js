import React, { useState, useEffect } from 'react'
import './fill_meter.scss'
import axios from 'axios';

function Fill_Meter(props) {

    const [predicted_cases, setPredictedCases] = useState([]);

    useEffect(() => {
        getPredictions();
    }, []);

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

    return (
        <div className='fill-meter-main'>
            {countValue < 10 && <div>
                <div className="fu-progress-low">
                    <div className="fu-inner-low">
                        <div className="fu-percent-low percent"><span>Low</span></div>
                        <div className="water-low"></div>
                        <div className="glare-low"></div>
                    </div>
                </div>
            </div>}

            {countValue >= 10 && predicted_cases < 50 && <div>
                <div className="fu-progress-medium">
                    <div className="fu-inner-medium">
                        <div className="fu-percent-medium percent"><span>Low</span></div>
                        <div className="water-medium"></div>
                        <div className="glare-medium"></div>
                    </div>
                </div>
            </div>}

            {countValue >= 50 && <div>
                <div className="fu-progress-high">
                    <div className="fu-inner-high">
                        <div className="fu-percent-high percent"><span>Low</span></div>
                        <div className="water-high"></div>
                        <div className="glare-high"></div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Fill_Meter;