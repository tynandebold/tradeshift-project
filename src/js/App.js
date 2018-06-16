import React, { Component } from 'react';
import { triangleType } from './utils/';
import { responseText } from './config';
import Inputs from './components/Inputs';

const ts = window.ts;

class App extends Component {
  constructor() {
    super();

    this.state = {
      side1: '',
      side2: '',
      side3: ''
    }
  }

  handleChange = (e, side) => {
    const updatedState = {};
    updatedState[side] = e.target.value;
    this.setState(updatedState);
  }

  handleSubmit = () => {
    const submittedVals = Object.values(this.state);    
    const result = triangleType(submittedVals);
    
    if (result !== 0) {
      ts.ui.Notification.info(responseText[result]);
    } else {      
      ts.ui.Notification.error(responseText[result]);
    }
  }

  render() {
    return (
      <div>
        <form data-ts="Form" onSubmit={this.handleSubmit}>
          <Inputs
            onInputChange={this.handleChange} 
            keys={['side1', 'side2', 'side3']}
            state={this.state} />
          <button
            className="ts-primary"
            data-ts="Button"
            type="submit"
            value="Submit">
            <span>Submit</span>
          </button>
        </form>
      </div>
    );
  }
}

export default App;
