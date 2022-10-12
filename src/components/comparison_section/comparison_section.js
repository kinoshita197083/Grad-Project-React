import React, { Component } from 'react'
import { Comparison } from '../comparison/comparison'
import './comparison.css'

export function ComparisonSection() {

    return (
        <div className='comparison-section-main'>
            <div className='comparison-section-wrapper'>
                <div className='comparison-text-section'>
                    <h1>Differences between chickenpox and monkeypox</h1>
                    <p> 
                        Monkeypox and Chickenpox may be mistaken for one another due to their appearance. However, there are some key differences to note to tell the two viruses apart:
                    </p>
                    <ul style={{ textAlign: 'left', marginTop: '5%' }}>
                        <li>Monkeypox skin lesions unlike Chickenpox <b>are not itchy</b></li>
                        <li>Monkeypox <b>incubation periods range between a few days to 21 days</b>, whilst Chickenpox ranges between 10 to 21 days</li>
                        <li>Monkeypox <b>can exhibit respiratory symptoms (i.e. coughing)</b> unlike Chickenpox</li>
                        <li>Monkeypox <b>will develop pustules</b> whilst Chickenpox will develop into blisters</li>
                    </ul>
                </div>
                <div style={{ padding: '5%' }}>
                    <div style={{ marginBottom: '5%' }} />
                    <Comparison />
                    <div style={{ marginTop: '5%', color: 'rgb(182, 7, 7)' }}><i class="fa-solid fa-caret-up"></i> move your mouse to compare the differences</div>
                </div>

            </div>
            {/* <div>
                <h4>If you have any of the above symptoms</h4>
            </div> */}
        </div>
    )
}