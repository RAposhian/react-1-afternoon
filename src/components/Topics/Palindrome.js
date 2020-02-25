import React, { Component } from 'react';

class Palindrome extends Component {
   constructor (){
      super();

      this.state = {
         userInput: '',
         palindrome: []
      }
   }

   handleChange(val){
      this.setState({ userInput: val })
   }

   reverseWord(userInput){
      let word = this.state.userInput;
      let reversed = word.split('').reverse().join('');
      let isTrue = (reversed === word) ? true : false;

      this.setState({ palindrome: isTrue})
   }
   
   
   render() {
      return (
         <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={ (e) => this.handleChange( e.target.value )}></input>
            <button className="confirmationButton" onClick={ () => this.reverseWord(this.state.userInput)}>Confirm</button>
      <span className="resultsBox">Palindrome: { JSON.stringify(this.state.palindrome)}</span>
         </div>
      )
   }
}

export default Palindrome