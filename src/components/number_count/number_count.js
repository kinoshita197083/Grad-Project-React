import { update } from 'immutable';
import React, { useEffect } from 'react'
import './number_count.css'

export function Counter() {

    useEffect(() => {
        const counters = document.querySelectorAll('.counter');

        counters.forEach((counter) => {
            counter.innerHTML = '0';

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerHTML;

                const increment = target / 1000;

                if (c < target) {
                    counter.innerHTML = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 29);
                } else {
                    counter.innerHTML = target;
                }
            };
            updateCounter();
        });

    });

    const total = 'Total Cases in Melbourne: '




    return (
        <div className='counter-container'>
            <div className='front-part'>{total}</div>
            <div className='counter' data-target='250'></div>
        </div>
    )
}