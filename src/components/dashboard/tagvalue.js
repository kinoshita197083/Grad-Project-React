import React, { useEffect, useState } from 'react'
import ReactEcharts from 'echarts-for-react';
import axios from 'axios';
import '../counter/counter.css'

export function TagValue(props) {

    //Where predictions data store
    const [predictions, getPredictions] = useState([]);

    useEffect(() => {
        getPredictedData();
    }, []);


    //The GET request
    const getPredictedData = () => {
        // axios.get('https://jnkntsb3gd.execute-api.ap-southeast-2.amazonaws.com/test')
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

    var countValue = String(predictions.map(item => Object.values(item)[1])[0])

    return (
        <div className = 'counter'>{countValue}</div>
    );
};