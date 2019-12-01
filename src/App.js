import React, { Component } from 'react';
import Header from './header.js';
import Main from './main.js';
import './App.css';
import ApiCallService from './services/apiCall.js';
import axios from 'axios';



class App extends Component {

  state = {
    todos: [],
  }

  constructor(props) {
    super(props)

    this.url = 'http://localhost:3000/todo';
  }

  updateToDo = (value) => {
    ApiCallService.post(this.url, { checked: false, text: value })
      .then((response) => {
          console.log(response);
          this.setState((prevState) => {
              return {
                data: [...prevState.data, { id: prevState.data.pop().id + 1, value}]
              }
             })

      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
  }

  deleteToDo = (id) => {
    axios.delete(`http://localhost:3000/todo/${this.state.id}`).then(res => {
      console.log(res);
      console.log(res.data);
    })

    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id )]})
  }

  getToDo = (id) => {
    axios.get(`http://localhost:3000/todo/${this.state.id}`).then(res => {
      console.log(res);
      console.log(res.data);
    })

    this.setState({todos:[...this.state.todos.filter(todo => todo.id === id )]})
  }

  render () {

    return (
      <div>
          <Header />
          <Main />
      </div>
    );
   
  }
  
}

export default App;
