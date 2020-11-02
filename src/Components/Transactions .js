import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {

  render() {
    return (
      <div>
        <table>
          <thead><tr><td>Vendor</td><td>Category</td><td>Amount</td></tr></thead>
          {this.props.transactions.map(t => (<Transaction key={t._id} deleteTransaction={this.props.deleteTransaction} transaction={t} />))}
        </table>
      </div>

    );
  }
}

export default Transactions;