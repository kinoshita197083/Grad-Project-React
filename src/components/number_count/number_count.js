import { update } from 'immutable';
import React, { useEffect } from 'react'
import './number_count.css'

export function Counter(memo) {

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

    const total = 'Total Cases in Victoria: '




    return (
        <div className={memo ? 'memo-counter-container' : 'counter-container'} >
            <div className='front-part'>{total}</div>
            <div className='counter' data-target='250'></div>
        </div>
    )
}