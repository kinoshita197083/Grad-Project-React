import * as react from 'react'
import * as d3 from 'd3'
import './symptom.css'
import { start } from '@popperjs/core'

/* Function used to draw with D3 */
//Draws the stickperson image and all images on it
function drawPerson() {
    const personCanvas = d3.select('.symptom-container')
        .attr('height', 500)
    personCanvas
        .style('border', '1px solid black')
    personCanvas.append('circle')
        .style('fill', 'rgb(139, 199, 180)')
        .attr('cx', '50%')
        .attr('cy', '20%')
        .attr('r', '10%')
    personCanvas.append('rect')
        .attr('x', '40%')
        .attr('y', '32.5%')
        .attr('width', '20%')
        .attr('height', '35%')
        .style('fill', 'rgb(139, 199, 180)')
    personCanvas.append('rect')
        .attr('x', '40%')
        .attr('y', '67.5%')
        .attr('width', '7.5%')
        .attr('height', '25%')
        .style('fill', 'rgb(139, 199, 180)')
    personCanvas.append('rect')
        .attr('x', '52.5%')
        .attr('y', '67.5%')
        .attr('width', '7.5%')
        .attr('height', '25%')
        .style('fill', 'rgb(139, 199, 180)')
    personCanvas.append('rect')
        .attr('x', '60%')
        .attr('y', '32.5%')
        .attr('width', '20%')
        .attr('height', '7.5%')
        .style('fill', 'rgb(139, 199, 180)')
    personCanvas.append('rect')
        .attr('x', '20%')
        .attr('y', '32.5%')
        .attr('width', '20%')
        .attr('height', '7.5%')
        .style('fill', 'rgb(139, 199, 180)')
    // Draws all boxes for symptoms 
    personCanvas.append('circle')
        .attr('cx', '45%')
        .attr('cy', '15%')
        .attr('r', '2.5%')
        .attr('fill', 'red')
        .attr('opacity', 0.3)
        .attr('id', 'headache')
}

/* Function used to launch react */
function personApp() {
    react.useEffect(() => {
        drawPerson();
    }, []);
    return (
        <div>
            {/* <h1>Symptoms & Indicators</h1>
            <p>Monkeypox Statistics:
                <li>Lesions: 59.11%</li>
                <li>Fever: 37.93%</li>
                <li>Rash: 30.05%</li>
                <li>Muscle ache: 11.33%</li>
                <li>headache: 10.84%</li>
                <li>fatigue: 9.36%</li>
                <li>Swollen lymph node: 5.91%</li>
                <li>blister: 5.42%</li>
                <li>pustule: 4.43%</li>
                <li>papule: 2.96%</li>
            </p>
            <svg class = 'symptom-container'></svg> */}
        </div>
    );
}

export default personApp;