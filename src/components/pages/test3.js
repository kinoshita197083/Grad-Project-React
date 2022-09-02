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

    const [symptomClicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(!symptomClicked)
    }

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
                    <div className={{ symptomClicked } ? 'box top left show' : 'box top left'}></div>
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

            <button onClick={handleClick}>Test</button>

            <div className='symptom-container'>
                <Accordion onClick={() => setClicked(!symptomClicked)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Lesion</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            The lesions start as a flat red rash that develops into pustules, which then form crusts or scabs and fall off
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Rash</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion disabled>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography>Disabled Accordion</Typography>
                    </AccordionSummary>
                </Accordion>
            </div>

            {/* Intro section */}
            <SymptomIntro></SymptomIntro>
        </div >



    );


}


export default Test3;