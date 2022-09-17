import React, { useEffect, useState } from 'react'
import ReactEcharts from 'echarts-for-react';
import axios from 'axios';

export function LineChart(props) {
    //dummy values for testing purposes
    // var values = [{ 'Month': 'Jan', 'value': 820 },
    // { 'Month': 'Feb', 'value': 263 },
    // { 'Month': 'Mar', 'value': 184 },
    // { 'Month': 'Apr', 'value': 372 },
    // { 'Month': 'May', 'value': 493 }];

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

    //console.log(predictions.map(item => Object.values(item)[0]))

    return (
        <ReactEcharts
            option={{
                xAxis: {
                    type: 'category',
                    data: predictions.map(item => Object.values(item)[0]),
                    name: 'Date',
                    nameLocation: "middle",
                    nameTextStyle: {
                        fontSize: '1.5rem',
                        padding: [10, 0, 0, 0]
                    },
                },
                yAxis: {
                    type: 'value',
                },
                series: [{
                    data: predictions.map(item => Object.values(item)[1]),
                    type: 'line',
                    lineStyle: {
                        color: '#25f1f5',
                        width: 2
                    },
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: '#a5b0af'
                    }
                }]
            }}
        />
    );
};


// Function to get data from the backend and rdbs
// function extractData() {

//     return dataOutput
// }