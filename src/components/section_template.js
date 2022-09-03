import React from 'react'
import './section_template.css'

const Section_template = (props) => {

    return (
        <div>
            <div className='symptom-sub1'>
                <div >
                    <h4 className='sub-heading'>{props.heading}</h4>
                    <p className='p'>{props.p1}</p>
                    <br>
                    </br>
                    <ul>
                        <li>{props.li1}</li>
                        <li>{props.li2}</li>
                        <li>{props.li3}</li>
                        <li>{props.li4}</li>
                        <li>{props.li5}</li>
                    </ul>

                    <br /><br />
                    <p>{props.p2}
                    </p>
                    <br /><br />
                    <p>{props.p3}</p>
                </div>
            </div>
        </div>
    )
}

export default Section_template