import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import ResultList from './components/ResultList';
class App extends Component {
  render() {
    return (
      <div>
        <ResultList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));