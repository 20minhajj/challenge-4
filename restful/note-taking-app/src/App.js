import React, { Component } from 'react';
import Noteapp from "./component/noteapp"
import './component/noteapp.css'
class App extends Component {
  render() {
    return (
      <div className='note-making-app'>
      <Noteapp />
      </div>
      
    );
  }
}

export default App;
