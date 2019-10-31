import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Sushi from './components/Sushi';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()

    this.state = {
      sushiArr: [],
      beltStart: 0,
      beltEnd: 4,
      
    }
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({
      sushiArr: data
    }))
  }

  handleSushiRefresh = () => {
    this.setState((previousState)=> {
     let beltMovement = {beltStart: previousState.beltStart + 4,
      beltEnd: previousState.beltEnd + 4}

      return beltMovement;
  })
  }

  handleSushiEat=()=>{
  
  }



  displaySushi = () => {
    const slicedArr = this.state.sushiArr.slice(this.state.beltStart, this.state.beltEnd)
      return (
        slicedArr.map((sushi) => {
          sushi.isEaten = false
          
          return <Sushi sushi={sushi} handleSushiEat={this.handleSushiEat} />
        })
        
      )
  }

  render() {
    // console.log("hola")
    return (
      <div className="app">
        <SushiContainer displaySushi={this.displaySushi} handleSushiRefresh={this.handleSushiRefresh} />

        <Table />
      </div>
    );
  }
}

export default App;