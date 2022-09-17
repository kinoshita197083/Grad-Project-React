import React, { Component } from 'react'
import './article_layout.css'
// import Grid from '@mui/material/Grid'

export function ArticleLayout(props) {

    return (
        <div className='article-main-container'>
            <div className='article-heading'>
                <h1>A danger forseen is half avoided</h1>
            </div>

            <div className='article-body1'>
                <p>roin tempor sed lacus a vulputate. Nunc vestibulum risus ac risus tempor, eu ultricies turpis dapibus. Aenean sed enim interdum, sollicitudin est nec, gravida est. In quis volutpat risus, quis porttitor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vitae vestibulum neque. Suspendisse augue risus, ultricies sit amet posuere vel, aliquet in risus. Suspendisse potenti. Cras malesuada ullamcorper tortor, venenatis ornare purus lacinia in. Nam et diam rhoncus, ultrices quam sit amet, posuere enim. In pretium metus sit amet quam convallis, quis tristique enim congue. Fusce maximus at quam a iaculis. Pellentesque nibh nisi, luctus eget elementum in, finibus non metus. Curabitur porta nisi dictum vulputate consectetur.</p>
            </div>

            <div className='article-body2'>
                <p>roin tempor sed lacus a vulputate. Nunc vestibulum risus ac risus tempor, Aenean sed enim interdum, Aenean sed enim interdum, Aenean sed enim interdum, Aenean sed enim interdum, eu ultricies turpis dapibus. Aenean sed enim interdum, sollicitudin est nec, gravida est. In quis volutpat risus, quis porttitor eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vitae vestibulum neque. Suspendisse augue risus, ultricies sit amet posuere vel, aliquet in risus. Suspendisse potenti. Cras malesuada ullamcorper tortor, venenatis ornare purus lacinia in. Nam et diam rhoncus, ultrices quam sit amet, posuere enim. In pretium metus sit amet quam convallis, quis tristique enim congue. Fusce maximus at quam a iaculis. Pellentesque nibh nisi, luctus eget elementum in, finibus non metus. Curabitur porta nisi dictum vulputate consectetur.</p>
            </div>

            <div className='article-image1'>
                <img src="https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/pexels-alena-shekhovtcova-6075004.jpg" width='90%' alt="test" style={{ borderRadius: '10px' }} />
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