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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

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
        window.scrollTo(0, 0);
    }, []);

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

            <h1 className='form-page-headings'>Seeing some strange symptoms?</h1>
            <p className='form-page-p1'>
                Before meeting your doctor, it's always a good idea to be well prepared. Think about your medical history,
                consider bringing a family member or friend to the visit and of course to record your symptoms.
            </p>

            <header id='symptom-form-pdf'>
                <div id='form-wrapper'>
                    <div className='card-layout'>
                        <div id='ribbon'>
                            <h1>CharmingApe</h1>
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

                                <TextField
                                    label="Email"
                                    // helperText="Full Name"
                                    value={email}
                                    onChange={(event) => { setEmail(event.target.value); }}
                                />

                                <TextField
                                    select
                                    label="Select"
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