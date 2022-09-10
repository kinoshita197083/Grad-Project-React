import React from 'react'
import './memo.css'

export function Memo(props) {

    return (
        <div className='memo-container'>
            <div className='memo'>{props.content}</div>
        </div>

    )
}