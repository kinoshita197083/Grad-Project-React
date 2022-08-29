import React, { Component } from 'react'
import './test3.css'
import Tooltip from '@mui/material/Tooltip';
import SymptomIntro from '../symptom_intro';





function Test3() {

    return (

        <div className='main-container' >

            {/* Intro section */}
            <SymptomIntro></SymptomIntro>
            {/* col-xs-12 col-sm-12 col-md-12 */}


            {/* Container for the SVG */}
            <div id="container" className="box" >

                {/* The SVG - stickfigure */}
                <img id='stickfig' src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick1.svg" />


                {/* The div for hover effect */}
                <Tooltip title="Lesions: 59.11%" placement='left'>
                    <div className="box top left"></div>
                </Tooltip>
                <Tooltip title="headache 10.84%" placement='top'>
                    <div className="box top center"></div>
                </Tooltip>
                <Tooltip title="Lesions: 59.11%" placement='right'>
                    <div className="box top right"></div>
                </Tooltip>

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