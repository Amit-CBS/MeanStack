import React, { Component } from 'react';
import Filter from './Filter';

export default class ResultList extends Component {
   constructor(props){
      super(props);

      this.state = {
          myQuantity1: '',
          price: ''
      };
    }
    handleParentData = (formModel) => {
      console.log(formModel);

      this.setState({...formModel});
    }
  render() {
    var a=100000;
    var sum=a*this.state.myQuantity1;
    return (
        <div  className="container">

          <Filter handleData={this.handleParentData}/>
          <p>{"You have to pay Rs. "+sum}</p>  
          <p>{this.state.myPrice1}</p>     
        
        </div>
    )
  }
}
