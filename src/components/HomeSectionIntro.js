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
                        <h4 class="service-heading">Here is a sanitizer</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fa-solid fa-file-waveform"></i>

                        </span>
                        <h4 class="service-heading">Here's a form</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fa-solid fa-hand-holding-medical"></i>
                        </span>
                        <h4 class="service-heading">Assitance maybe?</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default HomeSectionIntro;