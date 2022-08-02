import React from 'react';
import './App.css';
import {Header} from '../Header/index'
import {Hello} from '../main/Hello/index'
import {AbautMe} from '../main/AboutMe'
import {Portfolio} from '../main/Portfolio'
import { AstronomyPicture } from '../main/ AstronomyPicture';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Hello/>
      <AbautMe/>
      <Portfolio/>
      <AstronomyPicture/>
      
    </React.Fragment>
  );
}

export default App;
