import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';

function UpdatedTagValue(props) {

    const axios = require('axios');

    //Where predictions data store
    const [predictions, getPredictions] = useState([]);

    useEffect(() => {
        getPredictedData();
    }, []);


    //The GET request
    const getPredictedData = () => {
        axios.get(props.endpoint)
            .then((response) => {
                const allPredictions = response.data.body;
                getPredictions(JSON.parse(allPredictions));
                //console.log(JSON.parse(allPredictions));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    if (predictions.length == 1) {
        var countValue = String(predictions.map(item => Object.values(item)))
        console.log(countValue)
    } else {
        var countValue = String(predictions.map(item => Object.values(item)[1])[0])
        var returnDate;
        if (countValue.includes('-')) {
            const inputDates = new Date(countValue)
            const monthValue = inputDates.toLocaleString('default', { month: 'short' }).slice(0, 3)
            const dayValue = inputDates.getDay()
            returnDate = monthValue + ' ' + dayValue
        }
    }

    return (
        <div style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', rowGap: '1rem', padding: '2rem', textAlign: 'center' }}>
            <i class={props.icon}></i>
            <p style={{ fontSize: '1rem' }}>{props.heading}</p>
            {countValue.includes('-') ? <p>{returnDate}</p> : <CountUp end={countValue}
                duration={4}
                useEasing='true' />}
        </div>
    )
}

export default UpdatedTagValue