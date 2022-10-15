import React, { useEffect, useState } from 'react'
import './symptom_form.css'
import { Intro_Hero } from '../../IntroHero/intro_hero'
import FormControl from '@mui/material/FormControl';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@mui/material/Tooltip';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import { Link } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function SymptomChecklist() {

    //Symptoms within checklist
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    // const [email, setEmail] = useState('');
    const [gender, setGender] = useState('Choose');
    const [rashItchy, setRashItchy] = useState(false);
    const [rashPainful, setRashPainful] = useState(false);


    const [lesionPrimary, setLesionPrimary] = useState(false);
    const [lesionSecondary, setLesionSecondary] = useState(false);
    const [headache, setHeadache] = useState(false);
    const [muscleAche, setMuscleAche] = useState(false);
    const [fatigue, setFatigue] = useState(false);

    const [soreThroat, setSoreThroat] = useState(false);
    const [fever, setFever] = useState(false);
    const [cough, setCough] = useState(false);

    const [swollen, setSwollen] = useState(false);
    const [other, setOther] = useState('');

    useEffect(() => {
        disclaimer();
        window.scrollTo(0, 0);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    const disclaimer = () => {
        if (sessionStorage.getItem('popChecklist') !== 'shown') {
            handleClickOpen();
            sessionStorage.setItem('popChecklist', 'shown')
        }
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const translateBoolean = (symptom) => {
        if (symptom)
            return '✓'
        else
            return '✗'
    }

    //open up email client and fillup all the details within the form
    const openEmail = () => {
        window.open('mailto:?subject=Symptom Form' + '&body=' + body);
    }

    //Take a screenshot of the current form and export into a pdf for downloading
    const exportPDF = () => {
        const input = document.getElementById('symptom-form-pdf')
        html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save("symptom_form.pdf")
        })
    }

    //Email content
    //%0D%0A means linebreak
    const body = 'Please find my symptom checklist below:%0D%0A%0D%0A      • Skin Rash:%0D%0A%0D%0A            -Itchy: ' + translateBoolean(rashItchy) + '%0D%0A            -Painful: ' + translateBoolean(rashPainful) + '%0D%0A%0D%0A      • Skin Lesions:%0D%0A%0D%0A            -Primary: ' + translateBoolean(lesionPrimary) + '%0D%0A            -Secondary: ' + translateBoolean(lesionSecondary) + '%0D%0A%0D%0A      • Persist Symptoms:%0D%0A%0D%0A            -Headache: ' + translateBoolean(headache) + '%0D%0A%0D%0A            - Muscle ache:  ' + translateBoolean(muscleAche) + '%0D%0A%0D%0A            - Fatigue:  ' + translateBoolean(fatigue) + '%0D%0A%0D%0A      • Flu-Like Symptoms:%0D%0A%0D%0A            -Sore Throat: ' + translateBoolean(soreThroat) + '%0D%0A%0D%0A            -Coughing:  ' + translateBoolean(cough) + '%0D%0A%0D%0A            -Fever (37.5+):  ' + translateBoolean(fever) + '%0D%0A%0D%0A      • Infection Symptoms:%0D%0A%0D%0A            -Swollen Lymph Nodes: ' + translateBoolean(swollen) + '%0D%0A%0D%0A      • Additional Details:%0D%0A%0D%0A            ' + other + '%0D%0A%0D%0A%0D%0AKind regards%0D%0A' + firstName + ' ' + secondName;



    return (
        <div id='prediction-page-main'>
            <Intro_Hero
                heading='Preparing To Visit A Doctor?'
                image='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/medical_cert-modified.jpg'
            />

            <div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Symptom Checklist"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Seeing a doctor? Feel free to use our symptom autofiller!
                            <br /><br />
                            Check the boxes for any symptoms that your concerned you may be experiencing and note down any additional concerns
                            in the "other" textbox. Once you are done, either email this to yourself or someone eles via the "share" button or
                            download the form in a PDF format via the "download" button.
                            <br /><br />
                            Rest assured, no data here will be stored on this platform.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {/* <Button onClick={handleClose}>Disagree</Button> */}
                        <Button onClick={handleClose}>OK</Button>
                    </DialogActions>
                </Dialog>
            </div>

            <h1 className='form-page-headings'>Seeing some strange symptoms?</h1>
            <p className='form-page-p1'>
                Before meeting your doctor either in person or via telehealth, it's always a good idea to be well prepared. Think about your medical history,
                consider bringing a family member or friend to the visit and of course to record your symptoms.
                <br /><br /><span style={{ color: '#268CFF' }}>
                    Feel free to book a telehealth appointment <a href='https://www.doctorsondemand.com.au/patients/telehealth-doctors?gclid=CjwKCAjwqJSaBhBUEiwAg5W9p-_-MKYvdcFPClm4bkxyCuYdSdCOj7zPi7cnzVS0jvCircAI1T1FFRoCcIUQAvD_BwE' target='_blank'>here</a>.</span>
            </p>

            <header id='symptom-form-pdf'>
                <div id='form-wrapper'>
                    <div className='card-layout'>
                        <div id='ribbon'>
                            <h1>PoxBros</h1>
                            <h2>Symptom Checklist</h2>
                        </div>

                        {/* The form */}
                        <form className='form-layout'>

                            {/* Personal details section */}
                            <div id='personal-details'>
                                <TextField
                                    label="First Name"
                                    // helperText="Full Name"
                                    value={firstName}
                                    onChange={(event) => { setFirstName(event.target.value); }}
                                    name="to_name"
                                />

                                <TextField
                                    label="Second Name"
                                    // helperText="Full Name"
                                    value={secondName}
                                    onChange={(event) => { setSecondName(event.target.value); }}
                                    name="to_name"
                                />
                            </div>

                            <div className='gender-field'>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native"
                                    value={gender}
                                    onChange={(event) => { setGender(event.target.value) }}
                                >
                                    Gender
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'Female'}
                                    inputProps={{
                                        name: 'age',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value={'Male'}>Male</option>
                                    <option value={'Female'}>Female</option>
                                    <option value={'Prefer not to say'}>Prefer not to say</option>
                                </NativeSelect>

                            </div>

                            {/* Symptoms Section */}
                            <div id='symptoms'>
                                <div className='symptom 1'>
                                    <div className='symptom-label'>Skin Rash</div>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={rashItchy} onChange={() => { setRashItchy(!rashItchy) }} name="gilad" />
                                        }
                                        label="Is the rash itchy?"
                                        value={rashItchy}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={rashPainful} onChange={() => { setRashPainful(!rashPainful) }} />
                                        }
                                        label="Is the rash painful?"
                                        value={rashPainful}
                                    />
                                </div>

                                <div className='symptom 2'>
                                    <div className='symptom-label'>Skin Lesions</div>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={lesionPrimary} onChange={() => { setLesionPrimary(!lesionPrimary) }} />
                                        }
                                        label="Primary Lesions (e.g. Pustle)"
                                        value={lesionPrimary}
                                        name='lesion'
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={lesionSecondary} onChange={() => { setLesionSecondary(!lesionSecondary) }} />
                                        }
                                        label="Secondary Lesions (e.g. Crust)"
                                        value={lesionSecondary}
                                        name='lesion'
                                    />
                                </div>


                                <div className='symptom 3'>
                                    <div className='symptom-label'>Persist Symptoms</div>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={headache} onChange={() => { setHeadache(!headache) }} name="gilad" />
                                        }
                                        label="Headache"
                                        value={headache}
                                        name='headache'
                                    />

                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={muscleAche} onChange={() => { setMuscleAche(!muscleAche) }} name="gilad" />
                                        }
                                        label="Muscle ache"
                                        value={muscleAche}
                                        name='muscle_ache'
                                    />

                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={fatigue} onChange={() => { setFatigue(!fatigue) }} name="gilad" />
                                        }
                                        label="Fatigue"
                                        value={fatigue}
                                        name='exhaustion'
                                    />
                                </div>

                                <div className='symptom 5'>
                                    <div className='symptom-label'>Flu-Like Symptoms</div>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={soreThroat} onChange={() => { setSoreThroat(!soreThroat) }} />
                                        }
                                        label="Sore throat"
                                        value={soreThroat}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={cough} onChange={() => { setCough(!cough) }} />
                                        }
                                        label="Coughing"
                                        value={cough}
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={fever} onChange={() => { setFever(!fever) }} />
                                        }
                                        label="Fever (37.5 above)"
                                        value={fever}
                                    />
                                </div>

                                <div className='symptom 7'>
                                    <div className='symptom-label'>Infection Symptoms</div>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={swollen} onChange={() => { setSwollen(!swollen) }} name="gilad" />
                                        }
                                        label="Swollen Lymph Nodes"
                                        value={swollen}
                                    />
                                </div>
                                <div />
                            </div>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Additional details for the symptoms"
                                    multiline
                                    rows={6}
                                    defaultValue="Additional Notes"
                                    value={other}
                                    onChange={(event) => { setOther(event.target.value); }}
                                />
                            </FormControl>
                        </form>
                    </div>
                </div>
            </header>
            <div className='form-button-group'>
                <Tooltip title="Screenshot and save as a PDF" placement="bottom">
                    <button className='form-button' onClick={() => { exportPDF() }}>Download <i className="fa-solid fa-download"></i></button>
                </Tooltip>
                <Tooltip title="Currently only support local email client" placement="bottom">
                    <button className='form-button' onClick={() => { openEmail() }}>Share <i className="fa-regular fa-envelope"></i></button>
                </Tooltip>
            </div>

            <div className='to-game'>

                <Link to='/Game'>
                    <Tooltip title="Relax while you wait" placement="top">
                        <button className='back-to-top-button bounce-1'><i className="fa-solid fa-gamepad game-symbol"></i></button>
                    </Tooltip>
                </Link>

            </div>
        </div>
    )
}