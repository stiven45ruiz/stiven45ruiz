import React from 'react';
import './App.css';
import {Header} from '../Header/index'
import {Hello} from '../mian/Hello/index'
import {AbautMe} from '../mian/AboutMe'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Hello/>
      <AbautMe/>
    </React.Fragment>
  );
}

export default App;
