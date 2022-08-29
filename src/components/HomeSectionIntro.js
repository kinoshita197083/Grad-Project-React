import React, { Component } from 'react';
import './HomeSectionIntro.css';

function HomeSectionIntro() {
    return (
        <section id="into">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading">Services</h2>
                        <h3 class="section-subheading text-muted">We will have to discuss about this bit</h3>
                    </div>
                </div>
                <div class="section-inner-container">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fa-solid fa-pump-medical"></i>
                        </span>
                        <h4 class="service-heading">Hygiene</h4>
                        <p class="text-muted">Use of an alcohol-based hand rub or hand washing with soap and water, should be performed by people with monkeypox and household contacts.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fa-solid fa-file-waveform"></i>

                        </span>
                        <h4 class="service-heading">Awareness</h4>
                        <p class="text-muted">At this time, data suggest that gay, bisexual, and other men who have sex with men make up the majority of cases in the current monkeypox outbreak. However, anyone, regardless..</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fa-solid fa-hand-holding-medical"></i>
                        </span>
                        <h4 class="service-heading">Assitance</h4>
                        <p class="text-muted">When properly administered before an exposure, vaccines are effective at protecting people against monkeypox.</p>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default HomeSectionIntro;