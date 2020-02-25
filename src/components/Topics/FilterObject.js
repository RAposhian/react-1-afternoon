import React, { Component } from 'react';

class FilterObjects extends Component{
   constructor(){
      super()

      this.state = {
         people: [
         {
            name: 'Fred',
            id: 2,
            email: 'Fred@aol.com'
         },
         {
            name: 'Bill',
            id: 3,
            email: 'Bill@gmail.com',
            hobby: 'Woodworking'
         },
         {
            name: 'Steve',
            id: 1,
            email: 'Steve@aol.com',
            car: 'F-150'
         }
      ],
      userInput: '',
      filteredPeople: []

      }
   }

   handleChange(val){
      this.setState({ userInput: val})
   }

     filterPeople(prop) {
      let peoples = this.state.people;
      let filteredPeople = [];
  
      for (let i = 0; i < peoples.length; i++) {
        if (peoples[i].hasOwnProperty(prop)) {
          filteredPeople.push(peoples[i]);
        }
      }
  
      this.setState({ filteredPeople: filteredPeople });
    }
   
   
   render(){
      return(
         <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
      <span className="puzzleText"> Original: { JSON.stringify(this.state.people, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => { this.filterPeople(this.state.userInput) }}>Filter</button>
      <span className ="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredPeople, null, 10)} </span>
         </div>
      )
   }
}

export default FilterObjects;