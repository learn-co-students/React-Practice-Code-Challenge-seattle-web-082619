import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

//props - sushiToEat array

const SushiContainer = (props) => {
  
  return (
    <Fragment>
      <div className="belt">
        {
        props.fourSushiToEat.map( (sushi) => {
          return <Sushi isSushiEaten={props.isSushiEaten} sushiEaten={props.sushiEaten} onEatSushiClick={props.onEatSushiClick} key={sushi.id} sushi={sushi}/>
        })
        }
        <MoreButton handleMoreSushiClick={props.handleMoreSushiClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer