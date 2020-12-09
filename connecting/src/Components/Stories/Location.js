import React from 'react'

//ENHANCEMENT consider using Geolocation - https://github.com/public-apis/public-apis#geocoding

const Location = (props) => {
    return (
        <p>
            Current location: {props.location}
        </p>
    )
}

export default Location
