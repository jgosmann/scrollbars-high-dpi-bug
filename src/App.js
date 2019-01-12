import React, { Component } from 'react';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars'

class App extends Component {
  render() {
    return (
      <div className="App" style={{width: '99%'}}>
          <Scrollbars autoHeight autoHeightMin={0} autoHeightMax='100%' style={{backgroundColor: 'blue'}}>
            <div style={{width: '200px', height: '200px', backgroundColor: 'red'}} />
          </Scrollbars>
      </div>
    );
  }
}

export default App;
