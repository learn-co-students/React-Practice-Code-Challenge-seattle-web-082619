import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Sushi from './components/Sushi';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      sushiData: [],
      beltStart: 0,
      beltEnd: 4,
      usedPlates: [],
      money: 100
    }
    this.getAllSushi();
  }

  getAllSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushiArray => this.setState({  
      sushiData: sushiArray
    }))
    .then(console.log) // state is not being updated, fixed it, dont have setState = ... dummy... lol 
  }


  // handleSushiRefresh = () => {
  //   this.setState = ({
  //     beltEnd: this.beltEnd + 4, 
  //     beltStart: this.beltStart + 4
  //   })
  //   console.log("did you click on the sushi refresh? nov 3rd")
  // }

  handleSushiRefresh = () => {
    this.setState((previousState) => {
     let beltMovement = {beltStart: previousState.beltStart + 4,
      beltEnd: previousState.beltEnd + 4}
      console.log("clicking on the button?")
      return beltMovement;
  })
  }



  displaySushi = () => {
    const fourPieces = this.state.sushiData.slice(this.state.beltStart, this.state.beltEnd)
      return (
        fourPieces.map((sushi) => {
          return <Sushi sushi= {sushi}/>
        })
      )
  }




  render() {
    return (
      <div className="app">
        <SushiContainer  displaySushi={this.displaySushi} handleSushiRefresh={this.handleSushiRefresh}  />
        <Table />
      </div>
    );
  }


}
export default App;