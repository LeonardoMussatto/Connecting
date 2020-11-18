import React from 'react'
import PlaceholderText from '../Shared/PlaceholderText'
import PlaceholderImage from '../Shared/PlaceholderImage'

const Card = (props) => {
    let card = {
        display: "grid",
        placeItems: "start center"
    }
    return (
        <section style={card}>
            <PlaceholderText length={props.txtLength}/>
            <PlaceholderImage width={props.imgWidth} height={props.imgHeight} color={props.imgColor} />
        </section>
    )
}

export default Card
