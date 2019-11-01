import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      budget: 100,
      allSushi: [],
      index: 0,
      isEaten: false,
      sushiEaten: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushiJson => {
        this.setState({
          allSushi: sushiJson
        })
      })
  }

  calculateBudget = (sushi) => {
    this.setState(
      prevState => {
        return {
          budget: prevState.budget - sushi.price
        }
      }
    )
  }

  handleMoreSushiClick = () => {
    let newIndex = this.state.index + 4
    this.setState({
      index: newIndex
    })
  }

  getFourSushis = () => {
    return this.state.allSushi.slice(this.state.index, this.state.index + 4)
  }

  onEatSushiClick = (sushi) => {
    console.log('ate sushi!', this.state.allSushi.length)
    this.setState(
      prevState => {
        return {
          sushiEaten: [...prevState.sushiEaten, sushi]
        }
      }
    )
    this.calculateBudget(sushi)
  }

  isSushiEaten = (sushi) => {
    return this.state.sushiEaten.includes(sushi)
  }


  render() {
    return (
      <div className="app">
        <SushiContainer isSushiEaten={this.isSushiEaten} sushiEaten={this.state.sushiEaten} onEatSushiClick={this.onEatSushiClick} handleMoreSushiClick={this.handleMoreSushiClick} fourSushiToEat={this.getFourSushis()}/>
        <Table budget={this.state.budget} sushiEaten={this.state.sushiEaten}/>
      </div>
    );
  }
}

export default App;