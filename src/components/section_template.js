import React from 'react'
import './section_template.css'

const Section_template = (props) => {

    return (
        <div>
            <div className='symptom-sub1'>
                <div >
                    <h4 className='sub-heading'>{props.heading}</h4>
                    <p className='p'>
                        {props.p1}
                    </p>
                    <ul className='template-list' style={{ display: props.show }}>
                        <li>{props.li1}</li>
                        <li>{props.li2}</li>
                        <li>{props.li3}</li>
                        <li>{props.li4}</li>
                        <li>{props.li5}</li>
                    </ul>
                    <p>{props.p2}</p>
                    <p>{props.p3}</p>
                    <p className='source'>{props.source}</p>
                </div>
            </div>
        </div>
    )
}

export default Section_template