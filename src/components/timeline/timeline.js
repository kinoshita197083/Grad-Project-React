import { Typography } from '@mui/material'
import React, { Component } from 'react'
import './timeline.scss'

export function Timeline() {

    return (
        <div>
            <h1 style={{'text-align': 'center'}}>Typical Skin Lesion Progression</h1>
            <ul class="timeline">
                <li class="timeline-event">
                    <label class="timeline-event-icon"></label>
                    <div class="timeline-event-copy">
                        <p class="timeline-event-thumbnail">Rash (Macules)</p>
                        <h3>Painful, non-itchy skin lesions begin with a flat and red rash-like appearance (macular)</h3>
                        <h4>Stage Duration: 1−2 days</h4>
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/mpx_rash.png' width='450' height='300' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
                <li class="timeline-event">
                    <label class="timeline-event-icon"></label>
                    <div class="timeline-event-copy">
                        <p class="timeline-event-thumbnail">Papules/Vesicles</p>
                        <h3>Skin lesions usually become raised (papules) and develop clear fluid within (vesicles)</h3>
                        <h4>Stage Duration: 1−2 days</h4>
                        {/* <p>Konzeption, Design und Produktion von Digitalen Magazinen mit InDesign, der Adobe Digital Publishing Suite und HTML5. Co-Autorin der Fachbücher "Digitales Publizieren für Tablets" und "Adobe Digital Publishing Suite" erschienen im dpunkt.verlag.</p> */}
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/postules.png' width='450' height='300' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
                <li class="timeline-event">
                    <label class="timeline-event-icon"></label>
                    <div class="timeline-event-copy">
                        <p class="timeline-event-thumbnail">Pustules</p>
                        <h3>Fluid within skin lesions become opaque (white hue) or may contain pus prior to developing central depressions</h3>
                        <h4>Stage Duration: 5−7 days</h4>
                        {/* <p>Konzeption, Design und Produktion von Digitalen Magazinen mit InDesign, der Adobe Digital Publishing Suite und HTML5. Co-Autorin der Fachbücher "Digitales Publizieren für Tablets" und "Adobe Digital Publishing Suite" erschienen im dpunkt.verlag.</p> */}
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/mpx_pustules.png' width='450' height='300' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
                <li class="timeline-event">
                    <label class="timeline-event-icon"></label>
                    <div class="timeline-event-copy">
                        <p class="timeline-event-thumbnail">Scabs</p>
                        <h3>Once central depressions have crusted, scabs will develop and fall prior to the growth of new skin</h3>
                        <h4>Stage Duration: 7-14 days</h4>
                        {/* <p>Finally, lesions typically develop a depression in the center (umbilication).</p> */}
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/mpx_skin_lesion.png' width='450' height='300' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
            </ul>
        </div>
    )
}