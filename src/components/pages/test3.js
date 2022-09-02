import React, { Component, useState } from 'react'
import './test3.css'
import Tooltip from '@mui/material/Tooltip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SymptomIntro from '../symptom_intro';






function Test3() {

    const [lesionClicked, setLesionClicked] = useState(false);
    const [rashClicked, setRashClicked] = useState(false);
    const [headacheClicked, setHeadacheClicked] = useState(false);
    const [muscleAcheClicked, setMusleAcheClicked] = useState(false);


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
                    <div className={lesionClicked ? 'box top left show' : 'box top left'}></div>
                </Tooltip>
                <Tooltip title="headache 10.84%" placement='top'>
                    <div className={headacheClicked ? "box top center show" : 'box top center'}></div>
                </Tooltip>
                <Tooltip title="Lesions: 59.11%" placement='right'>
                    <div className={muscleAcheClicked ? "box top right show" : "box top right"} id={lesionClicked ? 'show' : ''}></div>
                </Tooltip>

                <Tooltip title="Muscle ache: 11.33%" placement='right'>
                    <div className={rashClicked ? "box middle center show" : "box middle center"} id={muscleAcheClicked ? 'show' : ''}></div>
                </Tooltip>

                <Tooltip title="Muscle ache: 11.33%" placement='right'>
                    <div className={rashClicked ? "box bottom left show" : "box bottom left"} id={lesionClicked ? 'show' : ''}></div>
                </Tooltip>

                <Tooltip title="Rash: 30.05%" placement='right'>
                    <div className={rashClicked ? "box bottom right show" : "box bottom right"} id={lesionClicked ? 'show' : ''}></div>
                </Tooltip>

                {/* The accordance box on the right of stick figure */}

                <div className='symptom-container'>
                    <Accordion onClick={() => setLesionClicked(!lesionClicked)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Lesion</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                59.1% of people experience lesions
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion onClick={() => setRashClicked(!rashClicked)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Rash</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                30.05% of people start with flat red rash
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion onClick={() => setHeadacheClicked(!headacheClicked)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>Headache</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                10.84% of people suffer from headache that is often described as throbbing or constant
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion onClick={() => setMusleAcheClicked(!muscleAcheClicked)}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>Muscle ache</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                11.33% of people feel a deep, steady ache or random sharp pains on their muscle
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>


            </div>

            {/* Intro section */}
            <SymptomIntro></SymptomIntro>
        </div >



    );


}


export default Test3;