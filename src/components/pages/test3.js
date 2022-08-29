import React, { Component } from 'react'
import './test3.css'
import Tooltip from '@mui/material/Tooltip';





function Test3() {

    return (
        <div className='main-container' >
            {/* <div className='image-container' >
                <Tooltip title="Lesions: 59.11%" placement='left'>
                    <div id="area1" className="area" ></div>
                </Tooltip>
                <Tooltip title="headache 10.84%" placement='top'>
                    <div id="area2" className="area" ></div>
                </Tooltip>
                <Tooltip title="Muscle ache: 11.33%" placement='right'>
                    <div id="area3" className='area'></div>
                </Tooltip>
                <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick1.svg" width="640" height="590" />
            </div> */}

            {/* col-xs-12 col-sm-12 col-md-12 */}

            <div id="container" className="box" >
                <Tooltip title="Lesions: 59.11%" placement='left'>
                    <div className="box top left"></div>
                </Tooltip>
                <Tooltip title="headache 10.84%" placement='top'>
                    <div className="box top center"></div>
                </Tooltip>
                <Tooltip title="Lesions: 59.11%" placement='right'>
                    <div className="box top right"></div>
                </Tooltip>
                <img id='stickfig' src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick1.svg" />
                <Tooltip title="Muscle ache: 11.33%" placement='right'>
                    <div className="box middle center "></div>
                </Tooltip>


                <div className="box bottom left"></div>

                <div className="box bottom right"></div>
            </div>
        </div >


    );


}


export default Test3;