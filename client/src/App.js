import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }

  }

  loadUsers = async () => {
    const data = await axios.get('/users')
    return data.data
  }

  componentDidMount() {
    this.loadUsers()
      .then(data => {
        this.setState({
          users: data
        })
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
            React Deploy connect node API
            {
              this.state.users.map(user => (<h1 key={user.nome}>{user.nome}</h1>))
            }
        </header>
      </div>
    );
  }
}

export default App;
