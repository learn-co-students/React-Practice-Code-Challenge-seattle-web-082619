import React, { Fragment } from 'react'


const Sushi = (props) => {

let OnEat = () => {
  props.handleEat(props.sushi.id)
  // console.log(props.sushi.id)
}


  return (
    <div className="sushi">
      <div className="plate" 
           onClick={OnEat}>
        { 
         
          props.sushi.isEaten ? 
          null
          : 
          <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi