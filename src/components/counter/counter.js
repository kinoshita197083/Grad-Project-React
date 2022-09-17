import React, { useEffect } from 'react'
import './counter.css'

export function CustomCounter(props) {

    useEffect(() => {
        const value = props.props
        const counters = document.querySelectorAll('.counter');
        counters.forEach((counter) => {
            counter.innerHTML = '0';

            const updateCounter = () => {
                const target = +value;
                const c = +counter.innerHTML;

                const increment = target / 100;

                if (c < target) {
                    counter.innerHTML = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 10);
                } else {
                    counter.innerHTML = target;
                }
            };
            updateCounter();
        });

    });

    return (
        <div className='counter' props={props}></div>
    )
}