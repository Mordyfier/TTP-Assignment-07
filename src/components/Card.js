import React from 'react'

export default function Card (props) {

    const gif = props.gif
    
    return (
        // simple card component - renders a div with the information, as shown in the example
        <div className='card'>
            <img src={gif.images.downsized.url} alt={gif.title} />
        </div>
    )
} 