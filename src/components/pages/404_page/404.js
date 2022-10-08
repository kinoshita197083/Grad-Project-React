import React, { useEffect, useState, useRef } from 'react'
import './404.css'
import { Intro_Hero } from '../../IntroHero/intro_hero'
import { SymptomForm } from '../../form/form';
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

const gender_list = [
    {
        value: 'Female',
        label: 'Female',
    },
    {
        value: 'Male',
        label: 'Male',
    }
];


export function NotFound() {

    const form = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('Choose');
    const [rash, setRash] = useState(false);
    const [lesion, setLesion] = useState(false);

    const body = 'Hey';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openEmail = () => {
        window.open('mailto:' + email + '?subject=' + name + '&body=' + body);
    }


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

    return (
        <div id='prediction-page-main'>
            <Intro_Hero
                heading='We are working on it :D'
                image='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/forcast1-modified.jpg'
            />

            <h1 className='prediction-page-headings'>This page is currently unavailable</h1>

            <header id='symptom-form-pdf'>
                <div id='form-wrapper'>
                    <div className='card-layout'>
                        <div id='ribbon'>
                            <h1>CharmingApe</h1>
                            <h2>Symptom Checklist</h2>
                        </div>
                        <form className='form-layout'>

                            <div id='personal-details'>

                                <label>Email</label>
                                <input type='email' name='to_email'></input>

                                <TextField
                                    label="Name"
                                    // helperText="Full Name"
                                    value={name}
                                    onChange={(event) => { setName(event.target.value); }}
                                    name="to_name"
                                />

                                <TextField
                                    label="to_email"
                                    // helperText="Full Name"
                                    value={email}
                                    onChange={(event) => { setEmail(event.target.value); }}
                                />

                                {/* <div className='gender'>
                            <label>Gender</label>
                            <select value={gender} onChange={(event) => { setGender(event.target.value) }}>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                        </div> */}

                                {/* <TextField
                            select
                            label="Select"
                            value={gender}
                            onChange={(event) => { setGender(event.target.value) }}
                        >
                            {gender_list.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField> */}
                            </div>

                            <div id='age-wrapper'>
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


                            <div id='symptoms'>
                                <div className='symptom 1st'>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={rash} onChange={() => { setRash(!rash) }} name="gilad" />
                                        }
                                        label="Rash"
                                        value={rash}
                                        name='rash'
                                    />
                                </div>

                                <div className='symptom 2nd'>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={lesion} onChange={() => { setLesion(!lesion) }} name="gilad" />
                                        }
                                        label="Lesions"
                                        value={lesion}
                                        name='lesion'
                                    />
                                </div>

                                <div className='symptom 2nd'>
                                    <label>Lesions?</label>
                                    <Checkbox
                                        checked={lesion}
                                        onChange={() => { setRash(!lesion) }}
                                        label='True'
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </div>

                                <div className='symptom 2nd'>
                                    <label>Lesions?</label>
                                    <Checkbox
                                        checked={lesion}
                                        onChange={() => { setRash(!lesion) }}
                                        label='True'
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </div>
                            </div>
                            <input type='submit' className='btn btn-info' value='Share'></input>
                        </form>
                    </div>
                </div>
            </header>
            <button onClick={() => { exportPDF() }}>Download</button>
            <button onClick={() => { openEmail() }}>share</button>
            {/* <input type='submit' className='btn btn-info' value='Share'></input> */}
        </div>
    )
}