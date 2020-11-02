import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import axios from 'axios';
import Operations from './Components/Operations'
import Transactions from './Components/Transactions '
import Breakdown from './Components/Breakdown'
import profileImage from '../src/img/acount-img.jpg'

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

  async componentDidMount() {
    const response = await this.getTransaction()
    this.setState({ transactions: response.data })
  }
  
   getTransaction() {
    return axios.get('http://localhost:4200/transactions')
  }

  showBalance = () => {
    let balance = [...this.state.transactions]
    let sum = 0
    for (let i = 0; i < balance.length; i++){
      sum += balance[i].amount
    }
    return sum
  }

  addTransaction = async (newTransaction) => {
    await axios.post('http://localhost:4200/transaction', newTransaction)
    let data = await this.getTransaction()

    this.setState({
      transactions: data.data
    })
  }

  deleteTransaction = async (transaction) => {
    await axios.delete('http://localhost:4200/transaction', { data: { id: transaction._id } })
    let response = await this.getTransaction()
    console.log(response)
    this.setState({ transactions: response.data })
  }

  render() {
    return (
    <Router>
      <div className="App">
          <h1> <em><strong>Evyatar Haim - Bank</strong></em></h1>
          <div className="imgOverlay">
          <img className="profilePic" src={profileImage} alt="acount-img"/>
          <div className="overlay"></div>
          <div className="text">Evyatar Haim <br>
          </br>welcome to your acount</div>
          </div>
        <div className="Links">
          <Link className="Link" to="/"> Home </Link>
          <Link className="Link" to="/transactions"> Transactions </Link>
          <Link className="Link" to="/operations"> Operations </Link>
          <Link className="Link" to="/Breakdown"> Breakdown </Link>
        </div>
          <h1 className={this.showBalance() > 0 ? "Green" : "Red"}> Balance : ${this.showBalance()}</h1>
          <Route excat path="/transactions" exact render={() => <Transactions deleteTransaction={this.deleteTransaction} addTransaction={this.addTransaction} transactions={this.state.transactions} />}></Route>
          <Route excat path="/operations" exact render={() => <Operations addTransaction={this.addTransaction} />}></Route>
          <Route excat path="/Breakdown" exact render={() => <Breakdown transactions={this.state.transactions} />}></Route>
      </div>
    </Router>
    );
  }
}
export default App;
