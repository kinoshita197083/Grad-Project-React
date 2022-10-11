import React, { Component } from 'react'
import { Comparison } from '../comparison/comparison'
import './comparison.css'

export function ComparisonSection() {

    return (
        <div className='comparison-section-main'>
            <div className='comparison-section-wrapper'>
                <div className='comparison-text-section'>
                    <h1>Difference between chickenpox and monkeypox?</h1>
                </div>

                <Comparison />
            </div>
        </div>
    )
}