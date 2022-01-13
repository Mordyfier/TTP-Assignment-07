import React from 'react'

export default function Card (props) {

    const gif = props.gif;
    
    return (
        // simple card component - renders a div with the information, as shown in the example
        <div className='card'>
            {props.random ? <img src={gif.images.fixed_width.url} alt={gif.title} className='random-gif' /> : <img src={gif.images.fixed_width.url} alt={gif.title} className='gif'/> }
        </div>
    )
} 