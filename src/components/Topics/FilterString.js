import React, { Component } from 'react';

class FilterString extends Component {
   constructor(){
      super();

      this.state = {
         names: ['Bill Murray', 'Steve Martin', 'Clint Eastwood', 'Nicolas Cage'],
         userInput: '',
         filteredNames: []
      }
   }

   handleChange(val){
      this.setState({ userInput: val })
   }

   filterString(userInput) {
      let peopleOne = this.state.names;
      let filteredPeople = peopleOne.filter((e) => (e.includes(userInput)) ? e : null)

      this.setState({ filteredNames: filteredPeople })
   }
   
   render() {
      return (
         <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
      <span className="puzzleText">Original: { JSON.stringify(this.state.names, null, 10)}</span>
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => { this.filterString(this.state.userInput)}}>Filter</button>
      <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredNames, null, 10)}</span>
         </div>
      )
   }
}

export default FilterString;