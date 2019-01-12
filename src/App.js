import React, { Component } from 'react';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scrollbars autoHeight>
            content
        </Scrollbars>
      </div>
    );
  }
}

export default App;
