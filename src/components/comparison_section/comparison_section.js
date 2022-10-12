import React, { Component } from 'react'
import { Comparison } from '../comparison/comparison'
import './comparison.css'

export function ComparisonSection() {

    return (
        <div className='comparison-section-main'>
            <div className='comparison-section-wrapper'>
                <div className='comparison-text-section'>
                    <h1>Differences between chickenpox and monkeypox?</h1>
                    <p> Line 17:25:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
                        Line 27:25:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
                    </p>
                    <ul style={{ textAlign: 'left', marginTop: '5%' }}>
                        <li>bulletpoint1</li>
                        <li>bulletpoint2</li>
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