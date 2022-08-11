import './App.css';
import React, {Component} from 'react';
import CalculatorLayout from './components/CalculatorLayout';

class App extends Component {
  

  render(){
  return (
    <div className="app">
      <CalculatorLayout/>
    </div>
  );
}
}

export default App;
