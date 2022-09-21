import React from 'react'
import { CustomCounter } from '../counter/counter';
import './horizontal_dashboard.css'

function HorizontalDashboard() {
    return (
        <div className='horizontal-main-container'>
            <div className='horizontal-dash-container'>
                <CustomCounter target='900' />
                <CustomCounter target='300' />
                <CustomCounter target='100' />
                <CustomCounter target='200' />
            </div>
        </div>
    )
}

export default HorizontalDashboard;