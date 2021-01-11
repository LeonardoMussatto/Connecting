import React from "react"

const PlaceholderImage = (props) => {
  return (
    <>
      <img
        src={`https://fakeimg.pl/${props.width}x${props.height}/${props.color}`}
        alt="[Placeholder]"
      />
    </>
  )
}

export default PlaceholderImage
