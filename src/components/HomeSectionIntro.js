import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeSectionIntro.css';

function HomeSectionIntro() {
    return (
        <section id="into">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 className="section-heading">About Us</h2>
                        <h2 className='sub-title'>Background</h2>
                        <h3 className="aim" >Recently there has been a rise of monkeypox cases in Australia, whereby Victoria and New South Wales to this day make up 43.3% and 44.4% of cases in Australia collectively.  Globally, the data reflects males to make up 98.87% of cases with more than 50% of these cases being within the age range of 20-69. However, the top 4 infected countries show that the majority of their cases are inferred to lie within ages of 25-34. Monkeypox has been stated to have a higher rate of infection via extensive skin to skin contact, with a lower rate of infection via fluid. With countless people working in the service industry requiring extensive periods of consistent skin to skin contact, increases their chances of catching the virus. How might we raise awareness to male Australians in this industry who are constantly exposed to extensive skin to skin contact about monkeypox and prevent them from getting the disease?</h3>
                        <h2 className='sub-title'>Our Intention</h2>
                        <h3 className='aim'>The project is intended to help male individuals falling under the age bracket of 24-35 with most of their questions regarding the safety measures to be employed in their working ecosystem. The website will provide a wealth of information about the severity of monkeypox. This product aims to be both interactive to engage users in the experience and also act as a utility based application to help males in Victoria in the age range of 24-35 who work in the service industry.</h3>
                    </div>
                </div>
                <div class="section-inner-container">
                    <div class="col-md-4">
                        <Link to='/Stepper'>
                            <span class="fa-stack fa-4x">
                                <i class="fa-solid fa-pump-medical"></i>
                            </span>
                        </Link>
                        <h4 class="service-heading">Hygiene</h4>
                        <p class="text-muted">Basic guidelines for proper hygiene practices to reduce the risk of transmission</p>
                    </div>
                    <div class="col-md-4">
                        <Link to='/Stepper'>
                            <span class="fa-stack fa-4x">
                                <i class="fa-solid fa-comment-medical"></i>
                            </span>
                        </Link>

                        <h4 class="service-heading">Awareness</h4>
                        <p class="text-muted">Raising awareness of risk factors and educating people about the measures they can take to reduce exposure to the virus is the main prevention strategy for monkeypox</p>
                    </div>
                    <div class="col-md-4">
                        <Link to='/Data'>
                            <span class="fa-stack fa-4x">
                                <i class="fa-solid fa-chart-column"></i>
                            </span>
                        </Link>
                        <h4 class="service-heading">Data</h4>
                        <p class="text-muted">Visualizing the data extracted from worldwide on the 2022 monkeypox outbreak</p>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default HomeSectionIntro;