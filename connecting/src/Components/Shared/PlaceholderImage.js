import React from 'react'

const PlaceholderImage = (props) => {
    return (
        <div>
            <img src={`https://fakeimg.pl/${props.width}x${props.height}/${props.color}`} alt="[Placeholder]"/>
        </div>
    )
}

export default PlaceholderImage
