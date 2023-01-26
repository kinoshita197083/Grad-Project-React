import { Typography } from '@mui/material'
import React, { Component } from 'react'
import './timeline.scss'

export function Timeline() {

    return (
        <div>
            <h1 className='timeline-title'>Typical Skin Lesion Progression</h1>
            <ul className="timeline">
                <li className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail">Rash (Macules)</p>
                        <h3>Painful, non-itchy skin lesions begin with a flat and red rash-like appearance (macular)</h3>
                        <h4>Stage Duration: 1−2 days</h4>
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/mpx_rash.png' width='95%' height='auto' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
                <li className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail">Papules/Vesicles</p>
                        <h3>Skin lesions usually become raised (papules) and develop clear fluid within (vesicles)</h3>
                        <h4>Stage Duration: 1−2 days</h4>
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/postules.png' width='95%' height='auto' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
                <li className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail">Pustules</p>
                        <h3>Fluid within skin lesions become opaque (white hue) or may contain pus prior to developing central depressions</h3>
                        <h4>Stage Duration: 5−7 days</h4>
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/mpx_pustules.png' width='95%' height='auto' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
                <li className="timeline-event">
                    <label className="timeline-event-icon"></label>
                    <div className="timeline-event-copy">
                        <p className="timeline-event-thumbnail">Scabs</p>
                        <h3>Once central depressions have crusted, scabs will develop and fall prior to the growth of new skin</h3>
                        <h4>Stage Duration: 7-14 days</h4>
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/mpx_skin_lesion.png' width='95%' height='auto' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
            </ul>
        </div>
    )
}