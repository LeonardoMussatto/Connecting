import React from 'react'

const Card = (props) => {
    let card = {
        display: "grid",
        placeItems: "center"
    }
    return (
        <section style={card}>
            <p>{props.text}</p>
            <img src={props.src} alt={props.alt}/>
        </section>
    )
}
export default Card