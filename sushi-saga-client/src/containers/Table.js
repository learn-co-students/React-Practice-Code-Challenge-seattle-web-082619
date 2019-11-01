import React, { Fragment } from 'react'
import App from '../App'

const Table = (props) => {
  // console.log(props.usedPlates(),"usedPlates")
  

  const renderPlates = (array) => {
    // console.log(usedPlates,"are we seeing more than one sushi being added to the array?")
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.money } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
          
          
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
               
            */
            renderPlates(props.usedPlates)
          }
        </div>
      </div>
    </Fragment>
  )



}



export default Table