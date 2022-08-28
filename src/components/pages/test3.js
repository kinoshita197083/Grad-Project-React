import { color } from '@mui/system';
import React, { Component } from 'react'
import './test3.css'
import Tooltip from '@mui/material/Tooltip';



function Test3() {

    return (
        <div className='main-container' >
            <div className='image-container' >
                <Tooltip title="Lesions: 59.11%" placement='left'>
                    <div id="area1" className="area" ></div>
                </Tooltip>
                <Tooltip title="headache 10.84%" placement='top'>
                    <div id="area2" className="area" ></div>
                </Tooltip>
                <Tooltip title="Muscle ache: 11.33%" placement='right'>
                    <div id="area3" className='area'></div>
                </Tooltip>
                <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick1.jpg" width="640" height="590" />
            </div>
        </div >
    );


}


export default Test3;