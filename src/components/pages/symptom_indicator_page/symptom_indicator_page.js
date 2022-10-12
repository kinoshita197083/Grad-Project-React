import React, { useRef, useEffect, useState } from 'react'
import './symptom_indicator_page.css'
import Tooltip from '@mui/material/Tooltip';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import SymptomIntro from '../symptom_intro';
// import Section_template from '../section_template';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
// import { textAlign } from '@mui/system';
import { Ripple } from '../../ripple/ripple';
import { Intro_Hero } from '../../IntroHero/intro_hero';
// import { Symptom_Article } from '../../symptom_article';
import SymptomPageIntro from '../../symptom_page_intro/symptom_page_intro';
import { Timeline } from '../../timeline/timeline';
import Slide from '@mui/material/Slide';
import { ComparisonSection } from '../../comparison_section/comparison_section';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function SymptomPage() {

    const ref = useRef(null);

    const handleScroll = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

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

    // For ripple effect
    const [show, setShow] = useState('block');

    // Accordion Expanding
    const [expanded, setExpanded] = React.useState();
    var changeState = (panel) => {
        if (panel === 'lesion') {
            setLesionClicked(!lesionClicked);
        } else if (panel === 'rash') {
            setRashClicked(!rashClicked);
        } else if (panel === 'headache') {
            setHeadacheClicked(!headacheClicked);
        } else if (panel === 'muscle') {
            setMusleAcheClicked(!muscleAcheClicked);
        }
    }

    //Handle expand of accordion
    const handleChange = (panel) => (event, newExpanded) => {
        changeState(expanded)
        setExpanded(newExpanded ? panel : false);
        if (panel === 'lesion') {
            setLesionClicked(!lesionClicked);
        } else if (panel === 'rash') {
            setRashClicked(!rashClicked);
        } else if (panel === 'headache') {
            setHeadacheClicked(!headacheClicked);
        } else if (panel === 'muscle') {
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

    //Handle ripple
    const handleRippleShow = () => {
        setShow('block');
    }

    //Handle ripple
    const handleRippleNone = () => {
        setShow('none');
    }

    const disclaimer_p1 = "The data gathered from confirmed cases didn't have all the symptoms recorded per case. However with the data that was present, the following information was gathered in regards to the most experienced symptoms to form a inference on the major indicators of Monkeypox witnessed globally.";
    const symptom_p1 = "Symptoms usually begin 7-14 days after exposure. This can be as short as a few days or as long as 21 days. However, some people may experience a rash or sores first, followed by other symptoms. Monkeypox symptoms may include: ";
    const symptom_p2 = "Monkeypox symptoms usually start within 3 weeks of exposure to the virus. If someone has flu-like symptoms, they will usually develop a rash 1-4 days later.";
    const symptom_p3 = "Monkeypox can be spread from the time symptoms start until the rash has healed, all scabs have fallen off, and a fresh layer of skin has formed. The illness typically lasts 2-4 weeks.";
    const symptom_source = "Source: Centers for Disease Control and Prevention & NSW Health 2022";

    const hero_url = 'https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/pexels-engin-akyurt-3331486-modified.jpg';
    const hero_heading = 'Symptoms and Indicators';

    return (
        <div className='s-i-page-main'>
            <Intro_Hero image={hero_url} heading={hero_heading} />
            <div ref={ref} />
            <SymptomPageIntro />

            <Timeline />
            <div className='main-container' >

                {/* <div className="row img-container">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading symptomh2">Symptoms & Indicators</h2>
                    </div>

                    <br /><br /><br />
                    <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick2.svg'></img>
                </div> */}

                {/* <Section_template heading="Disclaimer" p1={disclaimer_p1} show='none' /> */}

                {/* <Section_template heading="Signs and Symtoms" p1={symptom_p1} li1="Skin Lesions" li2="Fever" li3="Muscle ache" li4="Fatigue" li5="Swollen lymph node" p2={symptom_p2} p3={symptom_p3} source={symptom_source} /> */}


                <div className='symptom-sub2'>
                    <div >
                        <h4 className='sub-heading' style={{ marginTop: '0%', color: 'black', fontFamily: 'sans-serif', fontSize: '3.5rem' }}>Explore the indicators</h4>
                        {/* <p className='p' style={{ textAlign: 'left' }}>
                            Tip: Move your mouse over the stick figure to explore the most common symptoms and indicators of Monkeypox or click on the drop downs on the right
                            for additional information
                        </p> */}
                        <p className='caution'><i class="fa-solid fa-triangle-exclamation"></i>Warning: The figure contains images that may cause discomfort</p>
                    </div>
                </div>

                {/* Container for the SVG */}
                <div id="container" className="box" style={{ marginTop: '0%' }} >
                    <Grid container direction="row" spacing={{ xs: 2, md: 3 }} alignItems='center'>

                        {/* The image to show up when hovering for rash symptoms */}
                        {/* The image needs to be changed!!!!!! */}

                        <div className={showLesionPic ? 'hover-image1-container show' : 'hover-image1-container'}>
                            <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/mpx_skin_lesion.png'></img>
                        </div>

                        <div className={showRashPic ? 'hover-image2-container show' : 'hover-image1-container'}>
                            <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/mpx_rash.png'></img>
                        </div>

                        <div className={showHeadAchePic ? 'hover-image3-container show' : 'hover-image1-container'}>
                            <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/headache.png'></img>
                        </div>

                        <div className={showMuscleAchePic ? 'hover-image4-container show' : 'hover-image1-container'}>
                            <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/muscle_ache.png'></img>
                        </div>

                        <div className={showRashLegPic ? 'hover-image5-container show' : 'hover-image1-container'}>
                            <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/rash_leg.jpg'></img>
                        </div>

                        <div className={showRashLegPic ? 'hover-image6-container show' : 'hover-image1-container'}>
                            <img className='hover-image' src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/rash_leg2.jpg'></img>
                        </div>

                        {/* Ripple Effect */}

                        <div style={{ top: '11%', left: '5%', position: 'absolute', display: show }} >
                            <Ripple />
                        </div>

                        <div style={{ top: '11%', right: '39%', position: 'absolute', display: show }} >
                            <Ripple />
                        </div>

                        <div style={{ bottom: '11%', left: '5%', position: 'absolute', display: show }} >
                            <Ripple />
                        </div>

                        <div style={{ bottom: '11%', right: '41%', position: 'absolute', display: show }} >
                            <Ripple />
                        </div>

                        <div style={{ top: '33%', left: '23%', position: 'absolute', display: show }} >
                            <Ripple />
                        </div>

                        <div style={{ top: '11%', left: '24%', position: 'absolute', display: show }} >
                            <Ripple />
                        </div>

                        <Grid item xs={8}>
                            {/* The SVG - stickfigure */}
                            <img id='stickfig' src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick1.svg" />

                            {/* The areas for showing hover effect */}




                            <Tooltip title="skin lesions" placement='top'>
                                <div className={lesionClicked ? 'box top left show' : 'box top left'} onMouseOver={() => { handleLesionHover(); handleRippleNone() }} onMouseLeave={() => { setShowLesionPic(!showLesionPic); handleRippleShow() }}></div>
                            </Tooltip>


                            <Tooltip title="headache" placement='top'>
                                <div className={headacheClicked ? "box top center show" : 'box top center'} onMouseOver={() => { handleHeadAcheHover(); handleRippleNone() }} onMouseLeave={() => { setShowHeadAchePic(!showHeadAchePic); handleRippleShow() }}></div>
                            </Tooltip>

                            <Tooltip title="Muscle ache" placement='right'>
                                <div className={muscleAcheClicked ? "box top right show" : "box top right"} id={lesionClicked ? 'show' : ''} onMouseOver={() => { handleMuscleAcheHover(); handleRippleNone() }} onMouseLeave={() => { setShowMuscleAchePic(!showMuscleAchePic); handleRippleShow() }}></div>
                            </Tooltip>

                            <Tooltip title="Rash" placement='left' >
                                <div className={rashClicked ? "box middle center show" : "box middle center"} id={muscleAcheClicked ? 'show' : ''} onMouseOver={() => { handleRashHover(); handleRippleNone() }} onMouseLeave={() => { setShowRashPic(!showRashPic); handleRippleShow() }}></div>
                            </Tooltip>

                            <Tooltip title="Rash on Legs" placement='left'>
                                <div className={rashClicked ? "box bottom left show" : "box bottom left"} id={lesionClicked ? 'show' : ''} onMouseOver={() => { handleRashLegHover(); handleRippleNone() }} onMouseLeave={() => { setShowRashLegPic(!showRashLegPic); handleRippleShow() }}></div>
                            </Tooltip>

                            <Tooltip title="Rash: 30.05%" placement='right'>
                                <div className={rashClicked ? "box bottom right box show" : "box bottom right"} id={lesionClicked ? 'show' : ''} onMouseOver={() => { handleRashLegHover(); handleRippleNone() }} onMouseLeave={() => { setShowRashLegPic(!showRashLegPic); handleRippleShow() }}></div>

                            </Tooltip>
                        </Grid>
                        <Grid item xs={3.5}>
                            {/* The accordance box on the right of stick figure */}
                            <div className='w3-col l9 m12 s12'>
                                {/* <Typography align='left'>Click for drop downs below:</Typography> */}
                                <Accordion expanded={expanded === 'lesion'} onChange={handleChange('lesion')}>
                                    <AccordionSummary aria-controls="lesiond-content" id="lesiond-header">
                                        <Typography>Skin Lesion</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='w3-hide-small'>
                                        <Typography align='left'>
                                            <ul style={{ 'padding-left': '1rem' }}>
                                                <li><b>59.1%</b> of cases experience <b>skin lesions</b></li>
                                                <li>Skin lesions most commonly found on the groinal region</li>
                                                <li>Skin lesions can be <b>found anywhere on the body</b></li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'rash'} onChange={handleChange('rash')}>
                                    <AccordionSummary aria-controls="rashd-content" id="rashd-header">
                                        <Typography>Rash</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='w3-hide-small'>
                                        <Typography align='left'>
                                            <ul style={{ 'padding-left': '1rem' }}>
                                                <li><b>30.05%</b> of cases start with flat <b>red rash</b></li>
                                                <li>Rashes can be <b>found anywhere on the body</b></li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'headache'} onChange={handleChange('headache')}>
                                    <AccordionSummary aria-controls="headached-content" id="headached-header">
                                        <Typography>Headache</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='w3-hide-small'>
                                        <Typography align='left'>
                                            <ul style={{ 'padding-left': '1rem' }}>
                                                <li><b>10.84%</b> of cases suffer from <b>headaches</b> that are often described as throbbing or constant</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'muscle'} onChange={handleChange('muscle')}>
                                    <AccordionSummary aria-controls="headached-content" id="headached-header">
                                        <Typography>Muscle ache</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className='w3-hide-small'>
                                        <Typography align='left'>
                                            <ul style={{ 'padding-left': '1rem' }}>
                                                <li><b>11.33%</b> of cases experience deep, sharp or steady<b> muscle aches</b></li>
                                                <li>Muscle aches commonly felt in the back however can be <b>experienced anywhere</b></li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <ComparisonSection />
            <button onClick={handleScroll} className='back-to-top-button bounce-1'>Back to top</button>
        </div>
    );
}
