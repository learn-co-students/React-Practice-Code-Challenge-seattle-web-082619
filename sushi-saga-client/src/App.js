import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

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
    .then(sushiArray => this.setState = ({  
      sushiData: sushiArray
    }))
    
  }

  handleSushiRefresh = () => {
    // console.log("did you click on the sushi refresh?") got it to click 

  }


  render() {
    return (
      <div className="app">
        <SushiContainer handleSushiRefresh={this.handleSushiRefresh} />
        <Table />
      </div>
    );
  }


}
export default App;