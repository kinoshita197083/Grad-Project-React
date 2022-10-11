import React, { useEffect } from 'react'
import './comparison.scss'

export function Comparison() {

    useEffect(() => {
        document.querySelectorAll('.image').forEach((elem) => {

            let x, width

            elem.onmouseenter = () => {

                const size = elem.getBoundingClientRect()

                x = size.x
                width = size.width

            }

            elem.onmousemove = (e) => {

                const horizontal = ((e.clientX - x) / width) * 100

                elem.style.setProperty('--x', horizontal + '%')

            }

        })
    }, []);




    return (
        <div className='comparison-wrapper'>
            <div className="image">
                <div className="image__img"></div>
                <div className="image__img"></div>
            </div>
        </div>
    )
}