import React, { Component } from 'react';

class Transaction extends Component {
  deleteTransaction = () => {
    this.props.deleteTransaction(this.props.transaction)
  }

  render() {
    return (
      <tr className={this.props.transaction.amount > 0 ? "Green" : "Red"} >
        <td> {this.props.transaction.vendor}</td>
        <td> {this.props.transaction.category}</td>
        <td> {this.props.transaction.amount}</td>
        <button onClick={this.deleteTransaction} >Delete </button>
      </tr>

    );
  }
}

export default Transaction; 
