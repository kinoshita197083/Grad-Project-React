import React, { Component, useEffect, useState } from 'react'
import './test3.css'
import Tooltip from '@mui/material/Tooltip';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SymptomIntro from '../symptom_intro';
import Section_template from '../section_template';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';





export default function SymptomPage() {
    // >>>>>>> d5255831ba80e720312b5f3f43f267c405202cbf

    const [lesionClicked, setLesionClicked] = useState(false);
    const [rashClicked, setRashClicked] = useState(false);
    const [headacheClicked, setHeadacheClicked] = useState(false);
    const [muscleAcheClicked, setMusleAcheClicked] = useState(false);

    const [expanded, setExpanded] = React.useState();
    var changeState = (panel) => {
        if (panel == 'lesion') {
            setLesionClicked(!lesionClicked);
        } else if (panel == 'rash') {
            setRashClicked(!rashClicked);
        } else if (panel == 'headache') {
            setHeadacheClicked(!headacheClicked);
        } else if (panel == 'muscle') {
            setMusleAcheClicked(!muscleAcheClicked);
        }
    }

    const handleChange = (panel) => (event, newExpanded) => {
        changeState(expanded)
        setExpanded(newExpanded ? panel : false);
        if (panel == 'lesion') {
            setLesionClicked(!lesionClicked);
        } else if (panel == 'rash') {
            setRashClicked(!rashClicked);
        } else if (panel == 'headache') {
            setHeadacheClicked(!headacheClicked);
        } else if (panel == 'muscle') {
            setMusleAcheClicked(!muscleAcheClicked);
        }

    };

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            {...props}
        />
    ))(({ theme }) => ({
        backgroundColor:
            theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
        flexDirection: 'row-reverse',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(1),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));


    // Get Data from DB
    const [symptomList, setSymptoms] = useState([]);
    useEffect(() => {
        getAllSymptoms();
    }, []);

    const getAllSymptoms = () => {
        axios.get('https://dbuteonr98.execute-api.ap-southeast-2.amazonaws.com/test/').then((response) => {
            const allSymptoms = response.data.Items;
            setSymptoms(allSymptoms);
            console.log(response.data);
        })
            .catch(error => console.error('Error:$(error)'));
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
                    <p className='p'>Tip: move your mouse over the stick figure to explore the most common symptoms experienced from Monkeypox</p>
                </div>
            </div>
            {/* Container for the SVG */}
            <div id="container" className="box" style={{ marginTop: '0%' }} >
                <Grid container direction="row" spacing={{ xs: 2, md: 3 }} alignItems='center'>
                    <Grid item xs={8}>
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
                    </Grid>
                    <Grid item xs={4}>
                        {/* The accordance box on the right of stick figure */}
                        <div>
                            <Typography>Click a symptom below to find out more:</Typography>
                            <Accordion expanded={expanded === 'lesion'} onChange={handleChange('lesion')}>
                                <AccordionSummary aria-controls="lesiond-content" id="lesiond-header">
                                    <Typography>Skin Lesion</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        59.1% of people experience lesions
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'rash'} onChange={handleChange('rash')}>
                                <AccordionSummary aria-controls="rashd-content" id="rashd-header">
                                    <Typography>Rash</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        30.05% of people start with flat red rash
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'headache'} onChange={handleChange('headache')}>
                                <AccordionSummary aria-controls="headached-content" id="headached-header">
                                    <Typography>Headache</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        10.84% of people suffer from headache that is often described as throbbing or constant
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'muscle'} onChange={handleChange('muscle')}>
                                <AccordionSummary aria-controls="headached-content" id="headached-header">
                                    <Typography>Muscle ache</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        11.33% of people feel a deep, steady ache or random sharp pains on their muscle
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <SymptomIntro></SymptomIntro>
        </div>
    );
}
