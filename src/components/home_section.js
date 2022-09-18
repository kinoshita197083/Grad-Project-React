import React, { Component } from 'react'
import './home_section.css'

export function HomeSection() {

    return (
        <div className='home-section-container'>
            <div>
                <h1 id='home-section-heading'>A line for our target audience</h1>
                <div className='display-circle' />
                <div className='display-circle2' />
                <p id='home-section-p'>Find something to fill this up</p>



                {/* <div className='display-circle' />
                <div className='display-circle' /> */}
            </div>
            <ul id="categories" class="clr">
                <li class="pusher"></li>
                <li>
                    <div>
                        <img src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg" alt="" />
                        <h1>This is a title a bit longer</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg" alt="" />
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg" alt="" />
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
                        <h1>This is a title</h1>
                        <p>Some sample text about the article this hexagon leads to</p>
                    </div>
                </li>
                <li class="pusher"></li>
            </ul>
        </div>
    )
}