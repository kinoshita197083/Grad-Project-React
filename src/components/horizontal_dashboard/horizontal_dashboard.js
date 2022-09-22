import React, { useEffect, useState } from 'react'
import './horizontal_dashboard.css'
import CountUp from 'react-countup';


function HorizontalDashboard() {

    const axios = require('axios');

    const [predictions, getPredictions] = useState([]);

    useEffect(() => {
        getPredictedData();
    }, []);


    const getPredictedData = () => {
        axios.get('https://6bgf6f5gx8.execute-api.ap-southeast-2.amazonaws.com/prod/')
            .then((response) => {
                const allPredictions = response.data.body;
                getPredictions(JSON.parse(allPredictions));
                console.log(JSON.parse(allPredictions));
                console.log(predictions.legnth)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    // const getListLength = (case) => {
    //     var sum = 0;
    //     // introduce new properties to the current stage
    //     case.yettoanswer = 0;
    //     case.answered = 0;
    //     // sum up the values of reviewSets
    //     stage.reviewSets.forEach(function (child) {
    //         stage.yettoanswer += child.yettoanswer;
    //         stage.answered += child.answered;
    //     });
    //     // call this function for each stage and then
    //     // sum up the values of stages
    //     stage.stages.forEach(function (child) {
    //         sumAnswers(child);
    //         stage.yettoanswer += child.yettoanswer;
    //         stage.answered += child.answered;
    //     });
    //     return sum;
    // }


    return (
        <div className='horizontal-main-container'>
            <div className='horizontal-dash-container'>
                <div style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', rowGap: '1rem', padding: '2rem', textAlign: 'center' }}>
                    <i class="fa-solid fa-earth-americas"></i>
                    <p style={{ fontSize: '1rem' }}>Total Cases in Victoria</p>
                    <CountUp end={predictions.length}
                        duration={4}
                        useEasing='true' />
                </div>
                <div style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', rowGap: '1rem', padding: '2rem', textAlign: 'center' }}>
                    <i class="fa-solid fa-earth-americas"></i>
                    <p style={{ fontSize: '1rem' }}>Total Cases in Victoria</p>
                    <CountUp end={400} duration={4} useEasing='true' />
                </div>

            </div>
        </div>
    )
}

export default HorizontalDashboard;