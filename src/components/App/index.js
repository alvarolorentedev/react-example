import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import './App.css';
import EmotionalButton from '../DarkModeSwitcher/EmotionalButton'
import { counter, counterSquare } from '../../selector'


const App = ({ counter, counterSquare, increment }) => (
    <div className="App">
      <header className="App-header">
        <button onClick={increment}>increment</button>
        <p>value: {counter}</p>
        <p>value Square: {counterSquare}</p>
          <EmotionalButton />
      </header>
    </div>
);

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
