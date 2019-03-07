import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import './App.css';
import { counter, counterSquare } from '../../selector'

class App extends Component {
  render() {
    const { counter, counterSquare, increment } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={increment}>increment</button>
          <p>value: {counter}</p>
          <p>value Square: {counterSquare}</p>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { 
    counter: counter(state), 
    counterSquare: counterSquare(state), 
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
