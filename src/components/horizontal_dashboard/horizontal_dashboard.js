import React, { useEffect, useState } from 'react'
import './horizontal_dashboard.css'
import UpdatedTagValue from '../dashboard/updatedTagValue';
import CountUp from 'react-countup';
import 'animate.css';

const fetchData = (endpoint) => {

    const axios = require('axios');
    const predictions = [];

    axios.get(endpoint)
        .then((response) => {
            const allPredictions = response.data.body;
            predictions.push(JSON.parse(allPredictions));
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

    const [lastUpdated, setLastUpdated] = useState([]);

    useEffect(() => {
        getPredictedData();
        console.log(lastUpdated)
    }, []);


    const getPredictedData = () => {
        axios.get('https://jnkntsb3gd.execute-api.ap-southeast-2.amazonaws.com/test')
            .then((response) => {
                const lastUpdate_date = JSON.parse(response.data.body)[0].Date_confirmation;
                const date_split = lastUpdate_date.split('-');
                const adjusted_date = date_split[2] + '-' + date_split[1] + '-' + date_split[0]
                const inputDates = new Date(adjusted_date)
                const monthValue = inputDates.toLocaleString('default', { month: 'short' }).slice(0, 3)
                const dayValue = inputDates.getDay()
                console.log(dayValue)
                setLastUpdated([monthValue, dayValue])
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <div className='horizontal-main-container '>
            <div className='horizontal-dash-container'>
                <UpdatedTagValue
                    endpoint='https://so937ufj91.execute-api.ap-southeast-2.amazonaws.com/prod/adjusted_mobility'
                    heading='Total Cases in Victoria'
                    icon='fa-solid fa-file-contract' />

                <UpdatedTagValue
                    endpoint='https://jnkntsb3gd.execute-api.ap-southeast-2.amazonaws.com/test'
                    heading='Predicted Cases'
                    icon='fa-solid fa-chart-line' />

                <UpdatedTagValue
                    endpoint='https://6hzhzcxuxd.execute-api.ap-southeast-2.amazonaws.com/test'
                    heading='Last Spike in Cases'
                    icon='fa-solid fa-fire' />

                <div style={{ fontSize: '1.5rem', display: 'flex', flexDirection: 'column', rowGap: '1rem', padding: '2rem', textAlign: 'center' }} className='count-container'>
                    <i class='fa-solid fa-clock'></i>
                    <p style={{ fontSize: '1rem' }}>Last Updated</p>
                    <p>{lastUpdated[0]} <CountUp end={lastUpdated[1]} /></p>
                </div>

            </div>
        </div>
    )
}

export default HorizontalDashboard;