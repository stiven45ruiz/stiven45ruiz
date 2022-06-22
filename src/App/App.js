import React from 'react';
import './App.css';
import {Header} from '../Header/index'
import {Hello} from '../mian/Hello/index'
import {AbautMe} from '../mian/AboutMe'
import {Portfolio} from '../mian/Portfolio'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Hello/>
      <AbautMe/>
      <Portfolio/> 
      
    </React.Fragment>
  );
}

export default App;
