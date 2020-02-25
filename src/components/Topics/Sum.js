import React, { Component } from 'react';

class Sum extends Component {
   constructor () {
      super();

      this.state = {
         numberOne: 0,
         numberTwo: 0,
         sum: null
      }
   }

   handleChange1(val){
      this.setState({ numberOne: parseInt(val, 10) })
   }

   handleChange2(val){
      this.setState({ numberTwo: parseInt(val, 10) })
   }

   sumNumbers(num1, num2){
      let sumOfNum = num1 + num2;

      this.setState({ sum: sumOfNum})
   }
   
   render() {
      return (
         <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input className="inputLine" type='number' onChange={ (e) => this.handleChange1(e.target.value)}></input>
            <input className="inputLine" type='number' onChange={ (e) => this.handleChange2(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.sumNumbers(this.state.numberOne, this.state.numberTwo)}></button>
      <span className="resultsBox">Sum: {this.state.sum}</span>
         </div>
      )
   }
}

export default Sum;