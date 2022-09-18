import React, { useState } from 'react'
import './article_section.css'

export function ArticleSection(props) {

    return (
        <div className='article-section-container'>
            <div className='article-section-image'>
                <img src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/pexels-alena-shekhovtcova-6075004.jpg' width='100 %' height='100%' ></img>
            </div>

            <div className='article-section-article'>
                <h1>Article Heading!</h1>
                <p>You could get around this issue using php. You only echo out the code for the popup on first page load.

                    The other way... Is to set a cookie which is basically a file that sits in your browser and contains some kind of data. On the first page load you would create a cookie. Then every page after that you check if your cookie is set. If it is set do not display the pop up. However if its not set set the cookie and display the popup.</p>
            </div>
        </div>

    )
}