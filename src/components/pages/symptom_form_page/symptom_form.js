import React, { useEffect, useState, useRef } from 'react'
import './symptom_form.css'
import { Intro_Hero } from '../../IntroHero/intro_hero'
// import { SymptomForm } from '../../form/form';
import FormControl from '@mui/material/FormControl';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import emailjs from 'emailjs-com';

import Checkbox from '@mui/material/Checkbox';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';

// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//For gender selection
const gender_list = [
    {
        value: 'Female',
        label: 'Female',
    },
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Other',
        label: 'other',
    }
];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export function SymptomChecklist() {

    //Symptoms within checklist
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('Choose');
    const [rash, setRash] = useState(false);
    const [lesion, setLesion] = useState(false);
    const [headache, setHeadache] = useState(false);
    const [muscleAche, setMuscleAche] = useState(false);
    const [fatigue, setFatigue] = useState(false);
    const [respiratory, setRespiratory] = useState(false);
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
        window.open('mailto:' + email + '?subject=Symptom Form' + '&body=' + body);
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
    const body = 'Please find my symptom checklist below:%0D%0A%0D%0A      • Rash:  ' + translateBoolean(rash) + '%0D%0A%0D%0A      • Lesions:  ' + translateBoolean(lesion) + '%0D%0A%0D%0A      • Headache:  ' + translateBoolean(headache) + '%0D%0A%0D%0A      • Muscle ache:  ' + translateBoolean(muscleAche) + '%0D%0A%0D%0A      • Flu-Like symptoms:  ' + translateBoolean(respiratory) + '%0D%0A%0D%0A      • Fatigue:  ' + translateBoolean(fatigue) + '%0D%0A%0D%0A      • Swollen Lymph Nodes:  ' + translateBoolean(swollen) + '%0D%0A%0D%0A      • Additional Notes:  ' + other + '%0D%0A%0D%0A%0D%0AKind regards%0D%0A' + firstName + ' ' + secondName;



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
                <br /><br />
                Feel free to book a telehealth appointment <a href='https://www.doctorsondemand.com.au/patients/telehealth-doctors?gclid=CjwKCAjwqJSaBhBUEiwAg5W9p-_-MKYvdcFPClm4bkxyCuYdSdCOj7zPi7cnzVS0jvCircAI1T1FFRoCcIUQAvD_BwE' target='_blank'>here</a>.
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

                                {/* <TextField
                                    label="Email"
                                    type='password'
                                    helperText="to whom"
                                    value={email}
                                    onChange={(event) => { setEmail(event.target.value); }}
                                /> */}

                                <TextField
                                    select
                                    label="Gender"
                                    value={gender}
                                    name="gender"
                                    onChange={(event) => { setGender(event.target.value) }}
                                >
                                    {gender_list.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                            </div>

                            {/* Symptoms Section */}
                            <div id='symptoms'>
                                <div className='symptom 1'>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={rash} onChange={() => { setRash(!rash) }} name="gilad" />
                                        }
                                        label="Skin Rash"
                                        value={rash}
                                        name='rash'
                                    />
                                </div>

                                <div className='symptom 2'>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={lesion} onChange={() => { setLesion(!lesion) }} name="gilad" />
                                        }
                                        label="Skin Lesions"
                                        value={lesion}
                                        name='lesion'
                                    />
                                </div>

                                <div className='symptom 3'>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={headache} onChange={() => { setHeadache(!headache) }} name="gilad" />
                                        }
                                        label="Headache"
                                        value={headache}
                                        name='headache'
                                    />
                                </div>

                                <div className='symptom 4'>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={muscleAche} onChange={() => { setMuscleAche(!muscleAche) }} name="gilad" />
                                        }
                                        label="Muscle ache"
                                        value={muscleAche}
                                        name='muscle_ache'
                                    />
                                </div>

                                <div className='symptom 5'>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={respiratory} onChange={() => { setRespiratory(!respiratory) }} name="gilad" />
                                        }
                                        label="Flu-Like Symptoms (e.g. sore throat, coughing, fever)"
                                        value={respiratory}
                                        name='respiratory'
                                    />
                                </div>

                                <div className='symptom 6'>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={fatigue} onChange={() => { setFatigue(!fatigue) }} name="gilad" />
                                        }
                                        label="Fatigue"
                                        value={fatigue}
                                        name='exhaustion'
                                    />
                                </div>

                                <div className='symptom 7'>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={swollen} onChange={() => { setSwollen(!swollen) }} name="gilad" />
                                        }
                                        label="Swollen Lymph Nodes"
                                        value={swollen}
                                        name='chills'
                                    />
                                </div>
                                <div />
                            </div>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Other"
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
                <button className='form-button' onClick={() => { exportPDF() }}>Download</button>
                <button className='form-button' onClick={() => { openEmail() }}>Share <i class="fa-regular fa-envelope"></i></button>
            </div>

        </div>
    )
}