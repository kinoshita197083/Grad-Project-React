import React, { useState } from 'react'
import './form.css'
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

export function SymptomForm() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('Choose');
    const [rash, setRash] = useState(false);
    const [lesion, setLesion] = useState(false);


    return (
        <div id='form-wrapper'>
            <div className='card-layout'>
                <div id='ribbon'>
                    <h1>CharmingApe</h1>
                    <h2>Symptom Checklist</h2>
                </div>
                <form className='form-layout'>

                    <div id='personal-details'>

                        <TextField
                            label="Name"
                            // helperText="Full Name"
                            value={name}
                            onChange={(event) => { setName(event.target.value); }}
                        />

                        <TextField
                            label="Email"
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
                            {/* <label>Rash?</label>
                            <Checkbox
                                checked={rash}
                                onChange={() => { setRash(!rash) }}
                                label='Hey'
                                inputProps={{ 'aria-label': 'controlled' }}
                            /> */}

                            <FormControlLabel
                                control={
                                    <Checkbox checked={rash} onChange={() => { setRash(!rash) }} name="gilad" />
                                }
                                label="Rash"
                            />
                        </div>

                        <div className='symptom 2nd'>
                            {/* <label>Lesions?</label>
                            <Checkbox
                                checked={lesion}
                                onChange={() => { setRash(!lesion) }}
                                label='True'
                                inputProps={{ 'aria-label': 'controlled' }}
                            /> */}

                            <FormControlLabel
                                control={
                                    <Checkbox checked={lesion} onChange={() => { setLesion(!lesion) }} name="gilad" />
                                }
                                label="Lesions"
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
                </form>
            </div>
        </div>

    )
}