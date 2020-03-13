class Node {

  constructor (initialState, x, y) {
    // define cell data
    let currentState = initialState
    let previousState = null
    let nextState = null
    let xCoordinate = x
    let yCoordinate = y

    // define helper data
    let neighbors = []
    //TODO add rule data

    // define misc properties
    const aliveColor = '#FFFFFF'
    const deadColor = '#000000'
  }

  // define basic functions
  isAlive () {
    return this.currentState
  }

  isNextStateSet () {
    return this.nextState
  }

  getColor () {
    return this.isAlive() ? this.aliveColor : this.deadColor
  }

  setState (state) {
    this.nextState = state
  }

  clicked () {
    this.setState(!this.isAlive())
    this.update()
  }

  calculateState () {
    let aliveNeighbors = 0

    for (let neighbor in this.neighbors) {
      if (neighbor !== this && neighbor.isAlive()) aliveNeighbors += 1
    }

    //TODO implement rule checking
  }

  update () {
    this.previousState = this.currentState
    this.currentState = this.nextState
    this.nextState = null
  }

}
