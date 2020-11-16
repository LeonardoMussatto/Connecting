import React from 'react'
import PlaceholderText from '../Shared/PlaceholderText'
import PlaceholderImage from '../Shared/PlaceholderImage'

const Card = (props) => {
    return (
        <section>
            <PlaceholderText length={props.txtLength}/>
            <PlaceholderImage width={props.imgWidth} height={props.imgHeight} color={props.imgColor} />
        </section>
    )
}

export default Card
