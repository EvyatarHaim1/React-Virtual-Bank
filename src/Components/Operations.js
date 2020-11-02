import React, { Component } from 'react';

class Operations extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      vendor: "",
      category: ""
    }
  }

  updateInput = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }

  addTransaction = (event) => {
    const name = event.target.name;
    let data = { ...this.state }
    data.amount = parseInt(data.amount)
    if (name === "Withdraw") {
      data.amount = -data.amount
    }
    this.props.addTransaction(data)
  }

  render() {
    return (
      <div>
        <div className="inputs">
          <input type="number" min="0" placeholder="amount" name="amount" value={this.state.amount} onChange={this.updateInput}></input>
          <input type="text" placeholder="Vendor" name="vendor" value={this.state.vendor} onChange={this.updateInput}></input>
          <input type="text" placeholder="Category" name="category" value={this.state.category} onChange={this.updateInput}></input>
        </div>
        <div className="buttons">
          <button className="Withdraw" name="Withdraw" onClick={this.addTransaction}> Withdraw </button>
          <button className="Deposit" name="Deposit" onClick={this.addTransaction}> Deposit </button>
        </div>
      </div>
    );
  }
}

export default Operations;