import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component{
  inputElement = React.createRef()
  constructor(){
    super()
    this.state ={
      items: [],
      currentItem: {text:'', key:''},
    }
  }

  handleInput = e => {
    console.log("Hello Input")
  }
  addItem = e => {
    e.preventDefault()
    console.log('Hello World')
  }
  render(){
  return (
    <div className="App">
      <TodoList 
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
          />
    </div>  
    );
  }
}
export default App;
