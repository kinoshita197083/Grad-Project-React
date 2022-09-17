import React, { Component } from 'react'
import './article_layout.css'

export function ArticleLayout(props) {

    return (
        <div className='article-main-container'>
            <div className='article-heading'>
                <h1>Article Heading</h1>
            </div>

            <div className='article-body'>
                <p>Article Body</p>
            </div>

            <div className='article-heading'>
                <h1>Article Heading2</h1>
            </div>

            <div className='article-body'>
                <p>Article Body 2</p>
            </div>
        </div>
    )
}