import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';
import './updatedTagValue.css'
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

function UpdatedTagValue(props) {

    const divStyles = {
        fontSize: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1rem',
        padding: '2rem',
        textAlign: 'center',
        width: '25%',
        zIndex: '+5'
    }

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
    if (predictions.length == 1 && !String(predictions.map(item => Object.values(item))).includes('-')) {
        var countValue = String(predictions.map(item => Object.values(item)))
        console.log(countValue)
    } else if (predictions.length == 1 && String(predictions.map(item => Object.values(item))).includes('-')) {
        var countValue = String(predictions.map(item => Object.values(item)))
        var returnDate
        // const inputDates = new Date(countValue)
        // const monthValue = inputDates.toLocaleString('default', { month: 'short' }).slice(0, 3)
        // const dayValue = inputDates.getDay() + 18
        // returnDate = [monthValue, dayValue]

        const inputDates = countValue.split('-')
        const year = inputDates[0]
        const month = inputDates[1]
        const day = inputDates[2]
        returnDate = [year, month, day]
    } else {
        var countValue = String(predictions.map(item => Object.values(item)[1])[0])
        var returnDate
        if (countValue.includes('-')) {
            const inputDates = new Date(countValue)
            const monthValue = inputDates.toLocaleString('default', { month: 'short' }).slice(0, 3)
            const dayValue = inputDates.getDay()
            returnDate = [monthValue, dayValue]
        }

    }

    return (
        <Tooltip title={props.tooltip} placement="top" arrow>

            <div style={divStyles} className='count-container'>
                <Link to={props.link} style={{ zIndex: '+5', textDecoration: 'inherit' }}>
                    <i className={props.icon}></i>

                    <p className='w3-hide-small' style={{ fontSize: '1rem', marginBottom: '5%' }}>{props.heading}</p>
                    {/* {countValue.includes('-') ? <p>{returnDate[0]} <CountUp end={returnDate[1]} /></p> : <CountUp end={countValue}
                    duration={6}
                    useEasing='true' />} */}
                    {countValue.includes('-') ? <p>{returnDate[0]}-<CountUp end={returnDate[1]} />-<CountUp end={returnDate[2]} /></p> : <CountUp end={countValue}
                        duration={6}
                        useEasing='true' />}
                </Link>
            </div>


        </Tooltip>
    )
}

export default UpdatedTagValue