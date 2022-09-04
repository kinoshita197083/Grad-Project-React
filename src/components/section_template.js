import React from 'react'
import './section_template.css'

const Section_template = (props) => {

    return (
        <div>
            <div className='symptom-sub1'>
                <div >
                    <h4 className='sub-heading'>Disclaimer</h4>
                    <p className='p'>
                        The data gathered from confirmed cases didn't have all the symptoms recorded per case. However with the data that was present, 
                        the following information was gathered in regards to the most experienced symptoms to form a inference on the major indicators of Monkeypox witnessed globally.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Section_template