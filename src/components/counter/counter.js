import React, { useEffect } from 'react'
import './counter.css'

export function CustomCounter(props) {

    useEffect(() => {
        const value = props.target
        const counters = document.querySelectorAll('.counter');
        counters.forEach((counter) => {
            counter.innerHTML = '0';

            const updateCounter = () => {
                const target = +value;
                const c = +counter.innerHTML;

                const increment = target / 500;

                if (c < target) {
                    counter.innerHTML = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 10);
                } else {
                    counter.innerHTML = target;
                }
            };
            updateCounter();
        });


    }, []);

    return (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
            <i class="fa-solid fa-earth-americas" style={{ fontSize: '2.5rem' }}></i>
            <div style={{ fontSize: '2rem' }} className='counter' data-target={props.target}>{props.target}</div>
        </div>

        // <div className='counter' data-target='500'>500</div>
    )
}