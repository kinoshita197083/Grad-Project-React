import { Typography } from '@mui/material'
import React, { Component } from 'react'
import './timeline.scss'

export function Timeline() {

    return (
        <div>
            <Typography>Typical Lesion Progression</Typography>
            <ul class="timeline">
                <li class="timeline-event">
                    <label class="timeline-event-icon"></label>
                    <div class="timeline-event-copy">
                        <p class="timeline-event-thumbnail">Macules</p>
                        <h3>Macular lesions appear</h3>
                        <h4>Stage Duration: 1−2 days</h4>
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/mpx_rash.png' width='450' height='300' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
                <li class="timeline-event">
                    <label class="timeline-event-icon"></label>
                    <div class="timeline-event-copy">
                        <p class="timeline-event-thumbnail">Papules</p>
                        <h3>Lesions typically progress from macular (flat) to papular (raised)</h3>
                        <h4>Stage Duration: 1−2 days</h4>
                        {/* <p>Konzeption, Design und Produktion von Digitalen Magazinen mit InDesign, der Adobe Digital Publishing Suite und HTML5. Co-Autorin der Fachbücher "Digitales Publizieren für Tablets" und "Adobe Digital Publishing Suite" erschienen im dpunkt.verlag.</p> */}
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/mpx_pustules.png' width='450' height='300' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
                <li class="timeline-event">
                    <label class="timeline-event-icon"></label>
                    <div class="timeline-event-copy">
                        <p class="timeline-event-thumbnail">Postules</p>
                        <h3>Lesions typically progress from macular (flat) to papular (raised)</h3>
                        <h4>Stage Duration: 1−2 days</h4>
                        {/* <p>Konzeption, Design und Produktion von Digitalen Magazinen mit InDesign, der Adobe Digital Publishing Suite und HTML5. Co-Autorin der Fachbücher "Digitales Publizieren für Tablets" und "Adobe Digital Publishing Suite" erschienen im dpunkt.verlag.</p> */}
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/postules.png' width='450' height='300' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
                <li class="timeline-event">
                    <label class="timeline-event-icon"></label>
                    <div class="timeline-event-copy">
                        <p class="timeline-event-thumbnail">Pustules</p>
                        <h3>Lesions then typically become pustular (filled with opaque fluid), and firm to the touch</h3>
                        <h4>Stage Duration: 5−7 days</h4>
                        <p>Finally, lesions typically develop a depression in the center (umbilication).</p>
                        <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/mpx_skin_lesion.png' width='450' height='300' style={{ borderRadius: '8px' }} ></img>
                    </div>
                </li>
            </ul>
        </div>
    )
}