import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeSectionIntro.css';

function HomeSectionIntro() {
    return (
        <section id="into">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 className="section-heading">What is Monkeypox?</h2>
                        <h3 className="aim" >
                            Monkeypox is a viral infection which belongs to the same family as Smallpox which has been known to have similar symptoms but deemed clinicaly less severe. Monkeypox made
                            its first appearance in 1970, originating from Central Africa with sparse cases. However, as of 2003, the <a href='https://www.who.int/news-room/fact-sheets/detail/monkeypox' target='_blank'>WHO foundation</a> has deemed Monkeypox a global outbreak with cases occuring
                            in USA. It wasn't until early 2022, that the virus has come to Australian borders, with its first case recorded in May 2022. Since then, cases have been on the rise nationally.
                        </h3>
                        <h2 className='sub-title'>How does this effect you?</h2>
                        <h3 className='aim'>
                            Globally, data shows that just over 98% of people infected by monkeypox were men aged between 20 to 69.
                            Upon inspecting the top 4 countries with cases, it was witnessed that majroity of these cases impacted people within the age range of 25 to 34.
                            In Australia espeically in New South Wales (NSW) and Victoria (VIC) there's been a rise in Monkeypox cases as transmission in communities have begun to spread espeically amongst males.
                            Monkeypox infections occur most commonly via skin-to-skin contact, which highly impacts those involved in the service industry whereby such activities are unavoidable!
                        </h3>
                    </div>
                </div>
                <h2 className='sub-title'>What you'll find here</h2>
                <div class="section-inner-container">
                    <div class="col-md-4">
                        <Link to='/Stepper'>
                            <span class="fa-stack fa-4x">
                                <i class="fa-solid fa-comment-medical icon"></i>
                            </span>
                        </Link>

                        <h4 class="service-heading">Awareness</h4>
                        <p class="text-muted">
                            Symptoms and indicators, know what to look out for when suspecting monkeypox
                        </p>
                    </div>
                    <div class="col-md-4">
                        <Link to='/Stepper'>
                            <span class="fa-stack fa-4x">
                                <i class="fa-solid fa-pump-medical icon"></i>
                            </span>
                        </Link>
                        <h4 class="service-heading">Hygiene</h4>
                        <p class="text-muted">Basic guidelines for proper hygiene practices to reduce the risk of transmission</p>
                    </div>
                    <div class="col-md-4">
                        <Link to='/Data'>
                            <span class="fa-stack fa-4x">
                                <i class="fa-solid fa-chart-column icon"></i>
                            </span>
                        </Link>
                        <h4 class="service-heading">Data driven</h4>
                        <p class="text-muted">
                            Data visualisations and statistics are driven by open data sourced from <a className='icon' href='https://www.global.health' target='_blank'>Global.Health</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default HomeSectionIntro;