import React, { Component } from 'react'
import { Comparison } from '../comparison/comparison'
import './comparison_section.css'
import { Link } from 'react-router-dom'

export function ComparisonSection() {

    return (
        <div className='comparison-section-main'>
            <div className='comparison-section-wrapper'>
                <div className='comparison-text-section'>
                    <h1>Monkeypox vs Chickenpox</h1>
                    <p>
                        Monkeypox and Chickenpox may be mistaken for one another due to their appearance. However, there are some key differences to tell the two viruses apart.
                    </p>
                    <ul style={{ textAlign: 'left', marginTop: '5%' }}>
                        <li>Monkeypox rashes unlike Chickenpox <b>are not itchy</b></li>
                        <li>Monkeypox <b>incubation periods range between a few days to 21 days</b>, whilst Chickenpox ranges between 10 to 21 days</li>
                        <li>Monkeypox <b>can exhibit respiratory symptoms (i.e. coughing)</b> unlike Chickenpox</li>
                        <li>Monkeypox <b>will develop pustules</b> whilst Chickenpox will develop into blisters</li>
                    </ul>
                </div>
                <div style={{ padding: '5%' }}>
                    <Comparison />
                    <div style={{ marginTop: '5%', color: 'grey' }}><i className="fa-solid fa-caret-up bounce-1"></i> move your mouse to compare the differences</div>
                </div>

            </div>
            <div className='to-checklist'>
                <p><i className="fa-solid fa-triangle-exclamation"></i> If you have any of the above symptoms, please visit a GP and bring along your <Link style={{ color: 'purple' }} to='/Checklist'>symptom checklist</Link></p>
            </div>
        </div>
    )
}