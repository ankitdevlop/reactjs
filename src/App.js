/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import Alert from './componets/Alert';
import About from './componets/About';
import Navabar from './componets/Navabar';

import React from "react";


import Textul from './componets/Textul';
import { useState } from 'react';

function App() {
  const [Mode, setkMode] = useState('white')
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,

    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggalemode = () => {
    if (Mode === 'light') {
      setkMode('dark');
      document.body.style.backgroundColor = '#343a40'
      document.body.style.color = 'white'
      document.getElementById("btn").innerHTML = "🌛"
      showAlert("Dark Mode Enable", "success")
      document.title = "Text Utiles -Dark mode"
    }
    else {
      setkMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.getElementById("btn").innerHTML = "🌞"
      showAlert("Dark Mode Disabled", "success")
      document.title = "Text Utiles -Home"
    }
  }
  const toggalemode2 = () => {
    if (Mode === 'light') {
      setkMode('red');
      document.body.style.backgroundColor = 'red'
      document.body.style.color = 'white'
      document.getElementById("btn2").innerHTML = "disable red mode "
      showAlert("red Mode enable", "success")
      document.title = "Text Utiles -Red mode"
    }
    else {
      setkMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.getElementById("btn2").innerHTML = "Enable red mode"
      showAlert("red Mode disabel", "success")
      document.title = "Text Utiles -Home"

    }
  }
  const toggalemode4 = () => {
    if (Mode === 'light') {
      setkMode('pink');
      document.body.style.backgroundColor = 'pink'
      document.body.style.color = 'white'
      document.getElementById("btn3").innerHTML = "disable pink mode "
      showAlert("pink Mode enable", "success")
      document.title = "Text Utiles -pink mode"

    }
    else {
      setkMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.getElementById("btn3").innerHTML = "Enable pink mode"
      showAlert("pink Mode diable", "success")
      document.title = "Text Utiles -Home"

    }
  }
  return (
    <>
  <Navabar title="textUtels" mode={Mode} toggalemode={toggalemode} toggalemode2={toggalemode2} toggalemode4={toggalemode4} />          
    
     


<Textul showAlert={showAlert} head="Enter the text to analize"Textul/>
      <Alert alert={alert} />
<About/>



    </>
  );
}


export default App;
