import React, { useEffect, useState } from 'react'
import './test3_iter_1.css'
import Tooltip from '@mui/material/Tooltip';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SymptomIntro from '../symptom_intro_iter_1';
import Section_template from '../section_template_iter_1';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import { textAlign } from '@mui/system';





export default function SymptomPage_iter_1() {

    //For Clicking on Accordion
    const [lesionClicked, setLesionClicked] = useState(false);
    const [rashClicked, setRashClicked] = useState(false);
    const [headacheClicked, setHeadacheClicked] = useState(false);
    const [muscleAcheClicked, setMusleAcheClicked] = useState(false);

    // For hovering; Image pops up
    const [showRashPic, setShowRashPic] = useState(false);
    const [showLesionPic, setShowLesionPic] = useState(false);
    const [showHeadAchePic, setShowHeadAchePic] = useState(false);
    const [showMuscleAchePic, setShowMuscleAchePic] = useState(false);
    const [showRashLegPic, setShowRashLegPic] = useState(false);

    // Accordion Expanding
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

    //Handle expand of accordion
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
        window.scrollTo(0, 0);
    }, []);

    const getAllSymptoms = () => {
        axios.get('https://dbuteonr98.execute-api.ap-southeast-2.amazonaws.com/test/').then((response) => {
            const allSymptoms = response.data.Items;
            setSymptoms(allSymptoms);
            console.log(response.data);
        })
            .catch(error => console.error('Error:$(error)'));
    }

    //Handle Rash hovering
    const handleRashHover = () => {
        setShowRashPic(!showRashPic);
    }

    //Handle Lesion hovering
    const handleLesionHover = () => {
        setShowLesionPic(!showLesionPic);
    }

    //Handle Head ache hovering
    const handleHeadAcheHover = () => {
        setShowHeadAchePic(!showHeadAchePic);
    }

    //Handle Muscle ache hovering
    const handleMuscleAcheHover = () => {
        setShowMuscleAchePic(!showMuscleAchePic);
    }

    //Handle Rash on Leg hovering
    const handleRashLegHover = () => {
        setShowRashLegPic(!showRashLegPic);
    }

    const disclaimer_p1 = "The data gathered from confirmed cases didn't have all the symptoms recorded per case. However with the data that was present, the following information was gathered in regards to the most experienced symptoms to form a inference on the major indicators of Monkeypox witnessed globally.";
    const symptom_p1 = "Symptoms usually begin 7-14 days after exposure. This can be as short as a few days or as long as 21 days. However, some people may experience a rash or sores first, followed by other symptoms. Monkeypox symptoms may include: ";
    const symptom_p2 = "Monkeypox symptoms usually start within 3 weeks of exposure to the virus. If someone has flu-like symptoms, they will usually develop a rash 1-4 days later.";
    const symptom_p3 = "Monkeypox can be spread from the time symptoms start until the rash has healed, all scabs have fallen off, and a fresh layer of skin has formed. The illness typically lasts 2-4 weeks.";
    const symptom_source = "Source: Centers for Disease Control and Prevention & NSW Health 2022";

    return (
        <div className='main-container' >
            <div className="row img-container">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading symptomh2">Symptoms & Indicators</h2>
                </div>

                <br /><br /><br />
                <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick2.svg'></img>
            </div>

            <Section_template heading="Disclaimer" p1={disclaimer_p1} show='none' />

            <Section_template heading="Signs and Symtoms" p1={symptom_p1} li1="Skin Lesions" li2="Fever" li3="Muscle ache" li4="Fatigue" li5="Swollen lymph node" p2={symptom_p2} p3={symptom_p3} source={symptom_source} />

            <div className='symptom-sub2'>
                <div >
                    <h4 className='sub-heading' style={{ marginTop: '8%' }}>Explore the indicators</h4>
                    <p className='p' style={{ textAlign: 'left' }}>
                        Tip: Move your mouse over the stick figure to explore the most common symptoms and indicators of Monkeypox or click on the drop downs on the right
                        for additional information
                    </p>
                    <p className='caution'><i class="fa-solid fa-triangle-exclamation"></i>Warning: The figure contains images that may cause discomfort</p>
                </div>
            </div>

            {/* Container for the SVG */}
            <div id="container" className="box" style={{ marginTop: '0%' }} >
                <Grid container direction="row" spacing={{ xs: 2, md: 3 }} alignItems='center'>

                    {/* The image to show up when hovering for rash symptoms */}
                    {/* The image needs to be changed!!!!!! */}

                    <div className={showLesionPic ? 'hover-image1-container show' : 'hover-image1-container'}>
                        <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/lesion.jpg'></img>
                    </div>

                    <div className={showRashPic ? 'hover-image2-container show' : 'hover-image1-container'}>
                        <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/rash2.jpg'></img>
                    </div>

                    <div className={showHeadAchePic ? 'hover-image3-container show' : 'hover-image1-container'}>
                        <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/sadness-g4765139b4_640.jpg'></img>
                    </div>

                    <div className={showMuscleAchePic ? 'hover-image4-container show' : 'hover-image1-container'}>
                        <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/istockphoto-1132925581-1024x1024.jpg'></img>
                    </div>

                    <div className={showRashLegPic ? 'hover-image5-container show' : 'hover-image1-container'}>
                        <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/rash_leg.jpg'></img>
                    </div>

                    <div className={showRashLegPic ? 'hover-image6-container show' : 'hover-image1-container'}>
                        <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/rash_leg2.jpg'></img>
                    </div>

                    <Grid item xs={8}>
                        {/* The SVG - stickfigure */}
                        <img id='stickfig' src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick1.svg" />

                        {/* The areas for showing hover effect */}

                        <Tooltip title="skin lesions" placement='top'>
                            <div className={lesionClicked ? 'box top left show' : 'box top left'} onMouseOver={handleLesionHover} onMouseLeave={() => { setShowLesionPic(!showLesionPic) }}></div>
                        </Tooltip>


                        <Tooltip title="headache" placement='top'>
                            <div className={headacheClicked ? "box top center show" : 'box top center'} onMouseOver={handleHeadAcheHover} onMouseLeave={() => { setShowHeadAchePic(!showHeadAchePic) }}></div>
                        </Tooltip>

                        <Tooltip title="Muscle ache" placement='right'>
                            <div className={muscleAcheClicked ? "box top right show" : "box top right"} id={lesionClicked ? 'show' : ''} onMouseOver={handleMuscleAcheHover} onMouseLeave={() => { setShowMuscleAchePic(!showMuscleAchePic) }}></div>
                        </Tooltip>

                        <Tooltip title="Rash" placement='left' >
                            <div className={rashClicked ? "box middle center show" : "box middle center"} id={muscleAcheClicked ? 'show' : ''} onMouseOver={handleRashHover} onMouseLeave={() => { setShowRashPic(!showRashPic) }}></div>
                        </Tooltip>

                        <Tooltip title="Rash on Legs" placement='left'>
                            <div className={rashClicked ? "box bottom left show" : "box bottom left"} id={lesionClicked ? 'show' : ''} onMouseOver={handleRashLegHover} onMouseLeave={() => { setShowRashLegPic(!showRashLegPic) }}></div>
                        </Tooltip>

                        <Tooltip title="Rash: 30.05%" placement='right'>
                            <div className={rashClicked ? "box bottom right box show" : "box bottom right"} id={lesionClicked ? 'show' : ''}></div>

                        </Tooltip>
                    </Grid>
                    <Grid item xs={3.5}>
                        {/* The accordance box on the right of stick figure */}
                        <div>
                            <Typography align='left'>Click for drop downs below:</Typography>
                            <Accordion expanded={expanded === 'lesion'} onChange={handleChange('lesion')}>
                                <AccordionSummary aria-controls="lesiond-content" id="lesiond-header">
                                    <Typography>Skin Lesion</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography align='left'>
                                        <ul style={{ 'padding-left': '1rem' }}>
                                            <li>59.1% of cases experience skin lesions</li>
                                            <li>Skin lesions most commonly found on the groinal region</li>
                                            <li>Skin lesions can be found anywhere on the body</li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'rash'} onChange={handleChange('rash')}>
                                <AccordionSummary aria-controls="rashd-content" id="rashd-header">
                                    <Typography>Rash</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography align='left'>
                                        <ul style={{ 'padding-left': '1rem' }}>
                                            <li>30.05% of cases start with flat red rash</li>
                                            <li>Rashes can be found anywhere on the body</li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'headache'} onChange={handleChange('headache')}>
                                <AccordionSummary aria-controls="headached-content" id="headached-header">
                                    <Typography>Headache</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography align='left'>
                                        <ul style={{ 'padding-left': '1rem' }}>
                                            <li>10.84% of cases suffer from headache that is often described as throbbing or constant</li>
                                        </ul>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'muscle'} onChange={handleChange('muscle')}>
                                <AccordionSummary aria-controls="headached-content" id="headached-header">
                                    <Typography>Muscle ache</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography align='left'>
                                        <ul style={{ 'padding-left': '1rem' }}>
                                            <li>11.33% of cases feel a deep, steady ache or random sharp pains on their muscle</li>
                                            <li>Muscle aches commonly felt in the back however can be experienced anywhere</li>
                                        </ul>
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
