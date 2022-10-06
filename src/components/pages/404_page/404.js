import React, { useEffect } from 'react'
import './404.css'
import { Intro_Hero } from '../../IntroHero/intro_hero'
import { SymptomForm } from '../../form/form';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export function NotFound() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const exportPDF = () => {
        const input = document.getElementById('symptom-form-pdf')
        html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL('img/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save("symptom_form.pdf")
        })
    }

    return (
        <div id='prediction-page-main'>
            <Intro_Hero
                heading='We are working on it :D'
                image='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/forcast1-modified.jpg'
            />
            <h1 className='prediction-page-headings'>This page is currently unavailable</h1>
            <header id='symptom-form-pdf'>
                <SymptomForm />
            </header>
            <button onClick={() => { exportPDF() }}>Download</button>
        </div>
    )
}