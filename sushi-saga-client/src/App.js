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
      usedPlates: [],
      money: 100,

    }
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => this.setIsEatenFalse(data))
    .then(data => this.setState({
      sushiArr: data
    }))
  }

  handleSushiRefresh = () => {
    this.setState((previousState) => {
     let beltMovement = {beltStart: previousState.beltStart + 4,
      beltEnd: previousState.beltEnd + 4}

      return beltMovement;
  })
  }


  handleEat = (id) => {
     /// get the data structure you want and then from there set the new state
    // console.log("double clicked?")
    this.setState(previousState => {
      return {
      sushiArr: previousState.sushiArr.map(sushi =>{
          if (sushi.id === id ){
            if (sushi.isEaten === false ){

              let prevMoney = this.state.money

              if ((prevMoney - sushi.price) >= 0){
                sushi.isEaten = true;
                this.addUniquePlate(id);
                this.handleCostSubtraction(sushi);
              } 
            }            
          }
          return sushi;
        })
      }
    })
  }

    addUniquePlate = (id) => {
      this.setState({
        usedPlates: [...this.state.usedPlates, id]
      })
    }

    handleCostSubtraction =(sushi) => {
      this.setState((previousState) => {
          return {money: previousState.money - sushi.price}  
        })  
    }



  // addUniquePlate = (id) => {
  //   // if id is not in the usedPlates array, add it.
  //   let inArrr = false;

  //   this.state.usedPlates.forEach((sushi)=>{
  //     if (sushi.id === id) {
  //       inArrr = true;
  //     }
  //   })
  //   //TODO: finish this!!!
  //   this.setState((previousState) => {
  //     if (!inArrr) {
  //       return previousState.usedPlates.push(sushi) //TODO
  //     }
  //   })    
  // }

  setIsEatenFalse = (rawSushi) => {
    return rawSushi.map((sushi) => {
      return {...sushi, isEaten: false}
    })
  }



  displaySushi = () => {
    const slicedArr = this.state.sushiArr.slice(this.state.beltStart, this.state.beltEnd)
      return (
        slicedArr.map((sushi) => {          
          return <Sushi sushi={sushi} handleEat={this.handleEat} />
        }) 
      )
  }

  render() {
    return (
      <div className="app">
        <SushiContainer displaySushi={this.displaySushi} handleSushiRefresh={this.handleSushiRefresh} />

        <Table usedPlates={this.state.usedPlates} money={this.state.money}  />
      </div>
    );
  }
}

export default App;