import React, { Component } from 'react'
import Button from './Button';
import ClearButton from './ClearButton';
import Input from './Input';
import {evaluate} from 'mathjs';

class CalculatorLayout extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           input:''
        }
      }

    addToInput = val => {
        this.setState({input: this.state.input + val})
    }

    handleEqual = () => {
        this.setState({input: evaluate(this.state.input)})

    }

    render() {
    return (
    <div className="calc-wrapper">
        <Input input={this.state.input}/>
        <div className='row'>
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={() => this.handleEqual()}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className='row'>
            <ClearButton clearHandler={() => this.setState({ input: ''})}>CLEAR</ClearButton>
        </div>

      </div>
    )
  }
}

export default CalculatorLayout