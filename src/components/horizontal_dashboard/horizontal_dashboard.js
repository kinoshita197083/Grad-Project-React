import React, { useEffect, useState } from 'react'
import './horizontal_dashboard.css'
import UpdatedTagValue from '../dashboard/updatedTagValue';

const fetchData = (endpoint) => {

    const axios = require('axios');

    // const [predictions, getPredictions] = useState([]);
    const predictions = [];

    axios.get(endpoint)
        .then((response) => {
            const allPredictions = response.data.body;
            predictions.push(JSON.parse(allPredictions));
            //console.log(JSON.parse(allPredictions));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    if (predictions.length == 1) {
        var countValue = String(predictions.map(item => Object.values(item)))
        console.log(countValue)
    } else {
        var countValue = String(predictions.map(item => Object.values(item)[1])[0])
        if (countValue.includes('-')) {
            const inputDates = new Date(countValue)
            const monthValue = inputDates.toLocaleString('default', { month: 'short' }).slice(0, 3)
            const dayValue = inputDates.getDay()
            countValue = monthValue + ' ' + dayValue
        }
    }
    console.log(countValue)
    return (
        countValue
    );
}


function HorizontalDashboard() {

    const axios = require('axios');

    const [predictions, getPredictions] = useState();

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

    return (
        <div className='horizontal-main-container'>
            <div className='horizontal-dash-container'>
                <UpdatedTagValue
                    endpoint='https://so937ufj91.execute-api.ap-southeast-2.amazonaws.com/prod/adjusted_mobility'
                    heading='Total Cases in Victoria'
                    icon='fa-solid fa-earth-americas' />

                <UpdatedTagValue
                    endpoint='https://jnkntsb3gd.execute-api.ap-southeast-2.amazonaws.com/test'
                    heading='Predicted Cases'
                    icon='fa-solid fa-user' />

                <UpdatedTagValue
                    endpoint='https://6hzhzcxuxd.execute-api.ap-southeast-2.amazonaws.com/test'
                    heading='Last Spike in Victorian Cases'
                    icon='fa-solid fa-user' />

                <UpdatedTagValue
                    // endpoint='https://6hzhzcxuxd.execute-api.ap-southeast-2.amazonaws.com/test'
                    heading='Last Updated'
                    icon='fa-solid fa-clock' />

            </div>
        </div>
    )
}

export default HorizontalDashboard;