import React, { Component } from 'react';
class Breakdown extends Component {

    render() {
        let transactions = this.props.transactions;
        let categoryTran = transactions.reduce(function (acc, obj) {
            if (!acc[obj.category]) {
                acc[obj.category] = 0;
            }
            acc[obj.category] += obj.amount;
            return acc;
        }, {});
        let categories = Object.keys(categoryTran);
        return (
            <div>
                {categories.map(c => <div key={c}>category: {c} total: {categoryTran[c]}</div>)}
            </div>
        )
    }
}
export default Breakdown