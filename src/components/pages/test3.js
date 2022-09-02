import React, { Component } from 'react'
import './test3.css'
import Tooltip from '@mui/material/Tooltip';
import SymptomIntro from '../symptom_intro';





function Test3() {

    return (

        <div className='main-container' >

            {/* col-xs-12 col-sm-12 col-md-12 */}

            <div className="row img-container">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading symptomh2">Symptoms & Indicators</h2>
                </div>
                <br /><br /><br />
                <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick2.svg'></img>
            </div>

            <div className='symptom-sub2'>
                <div >
                    <h4 className='sub-heading' style={{ marginTop: '15%' }}>Hover me</h4>
                    <p className='p'>Tip: move your mouse over to explore the symptoms in terms of body part</p>

                </div>
            </div>

            {/* Container for the SVG */}
            <div id="container" className="box" style={{ marginTop: '0%' }} >

                {/* The SVG - stickfigure */}
                <img id='stickfig' src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick1.svg" />


                {/* The areas for showing hover effect */}
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

                <Tooltip title="Muscle ache: 11.33%" placement='right'>
                    <div className="box bottom left"></div>
                </Tooltip>

                <Tooltip title="Rash: 30.05%" placement='right'>
                    <div className="box bottom right"></div>
                </Tooltip>
            </div>
            {/* Intro section */}
            <SymptomIntro></SymptomIntro>
        </div >


    );


}


export default Test3;