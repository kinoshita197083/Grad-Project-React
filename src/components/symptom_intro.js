import React, { Component } from 'react';
import './symptom_intro.css';

function SymptomIntro() {
    return (
        <section className="symptom-section" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Symptoms and Indicators</h2>
                    </div>
                    <br /><br /><br />
                    <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/stick2.svg'></img>
                </div>
                <div className>
                    <div >
                        <h4 className='sub-heading'>Symptoms Data</h4>
                        <p className='p'>People with monkeypox get a rash that may be located on or near the genitals (penis, testicles, labia, and vagina) or anus (butthole) and could be on other areas like the hands, feet, chest, face, or mouth.</p>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default SymptomIntro;