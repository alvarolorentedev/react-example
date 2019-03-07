import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import './App.css';

class App extends Component {
  render() {
    const { counter, increment } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={increment}>increment</button>
          <p>{counter}</p>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state){
  let counter = state.counter
  return { counter }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
