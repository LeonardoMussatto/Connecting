import React from 'react'
import PlaceholderText from "./PlaceholderText"
import PlaceholderImage from './PlaceholderImage'

const CardPlaceholder = (props) => {
    let card = {
        display: "grid",
        placeItems: "center"
    }
    return (
        <section style={card}>
            <PlaceholderText length={props.txtLength}/>
            <PlaceholderImage width={props.imgWidth} height={props.imgHeight} color={props.imgColor} />
        </section>
    )
}

export default CardPlaceholder
