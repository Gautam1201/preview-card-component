import React from "react";


const Card = (props) => {
    return(
      <div className = "card-comp" style = {{
          backgroundColor: props.color
          }}>
        <img src = {props.logo} alt = "Car-brand"></img>
        <h1>{props.brand}</h1>
        <p>{props.desc}</p>
        <button style = {{color: props.color}}>Learn More</button>
      </div>
    )
  }

export default Card;