import React, { Component } from 'react';
import './App.css';
import Devices from './Devices/Devices'
import axios from 'axios';


class App extends Component {

  state = {
    devices: [
      { id: '1', sn: '1', lastActive: '12345', lensVersion: 'lens' },
      { id: '2', sn: '2', lastActive: '22222', lensVersion: 'lens' },
      { id: '3', sn: '3', lastActive: '3333', lensVersion: 'lens' }]
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8090/v1/devices', null).then(response => {
      console.log(response);
      const devices = response.data;
      this.setState({ devices: devices });
    });
  }

  render() {
    return (
      <div className='App'>
        <h1>Devices</h1>
        <Devices devices={this.state.devices} />
      </div>
    );
  }
}

export default App;
