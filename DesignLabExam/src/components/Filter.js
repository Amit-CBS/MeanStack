import React, { Component } from 'react';

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myQuantity1: '',
      email: ''
    };
  }

  submitForm = e => {
    e.preventDefault();

    this.props.handleData(this.state);
  };

  handleQuantityChange = e => {
    console.log(e.target.value);
    this.setState({
      myQuantity1: e.target.value
    });
  };

//   handlePriceChange = e => {
//     this.setState({
//       price: e.target.value
//     });
//   };

  render() {
    return (
      <div className="container">
        <form className="formContainer"><img
          className="teamPic"
          src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80"  
          alt="Avatar"
        ></img>
          Quantity:{' '}
          <input type="number" placeholder="0" name="myQuantity1" onChange={this.handleQuantityChange} />
          <br />
          Product: Laptop<br/>
          Price Rs. 100000{' '}
          <br />
          <br />
          <input type="button" className="MyButton" value="Check Out" onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}