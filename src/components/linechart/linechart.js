import React from 'react';
import ReactEcharts from 'echarts-for-react';

export function LineChart() {
    //dummy values for testing purposes
    var values = [{ 'Month': 'Jan', 'value': 820 },
    { 'Month': 'Feb', 'value': 263 },
    { 'Month': 'Mar', 'value': 184 },
    { 'Month': 'Apr', 'value': 372 },
    { 'Month': 'May', 'value': 493 }];
    return (
        <ReactEcharts
            option={{
                xAxis: {
                    type: 'category',
                    data: values.map(item => Object.values(item)[0])
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: values.map(item => Object.values(item)[1]),
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