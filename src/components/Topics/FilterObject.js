import React, { Component } from 'react';

class FilterObjects extends Component{
   constructor(){
      super()

      this.state = {
         unFilterArray: [
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
      filterArray: []

      }
   }
   
   
   render(){
      return(
         <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText"></span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton"></button>
            <span className ="resultsBox filterObjectRB"></span>
         </div>
      )
   }
}

export default FilterObjects;