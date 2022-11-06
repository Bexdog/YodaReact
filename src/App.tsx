import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Instructions } from './Instructions/Instructions';
import { Textbox } from './Textbox/Textbox';
import { Button } from './Submit';
import yoda from './yodaWOrange.png';

function App() {
  const[text,setText]=useState("");
  const[yodaText,setYodaText]=useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={yoda} className="App-logo" alt="logo" />
        <br></br>
        <Instructions/>
        <Textbox readOnly={false}placeholder={"Input Text to Yodafy"}setState={setText}/>
        <br></br>
        <Textbox content={yodaText}readOnly={true}placeholder={"Yodafied Text"}setState={setYodaText}/>
        <br></br>
        <Button setYodaText={setYodaText} normalText={text}/>
      </header>
    </div>
  );
}

export default App;
