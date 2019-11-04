import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
            Render Sushi components here!
          */
        }
        <MoreButton handleSushiRefresh = {props.handleSushiRefresh}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer