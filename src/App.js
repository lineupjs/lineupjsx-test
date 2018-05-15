import React, { Component } from 'react';
import {LineUp} from 'lineupjsx';
import 'lineupjsx/build/LineUpJSx.css';
import logo from './logo.svg';
import './App.css';

const arr = [];
const cats = ['c1', 'c2', 'c3'];
for (let i = 0; i < 50; ++i) {
  arr.push({
      a: Math.random() * 10,
      d: 'Row ' + i,
      cat: cats[Math.floor(Math.random() * 3)],
     cat2: cats[Math.floor(Math.random() * 3)]
   })
 }

class App extends Component {
  render() {
    return (
      <div className="App">
        <LineUp data={arr} style={{height: '500px'}} />
      </div>
    );
  }
}

export default App;
