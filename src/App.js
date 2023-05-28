// import logo from './logo.svg';
// import './App.css';
import About from "./components/About.js";
import Alert from "./components/alert.js";
import NavBar from "./components/NavBar.js";

// import TexthtmlForm from "./components/Text_htmlForm.js"
import React, { useState } from 'react';

function App() {
  const [Mode, setMode] = useState('light') // whenever dark Mode is enabeled
  const [alert, setAlert] = useState(null)
 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (Mode == 'light') {
      setMode('dark')
      showAlert("dark Mode has been enabuld", "success")
    }
    else {
      setMode('light')
      showAlert("light Mode has been enabuld", "danger")
    }
  }
  return (
    <>
      {/* <NavBar title="TextTutels" mode={Mode} blumode={blueMode} toggleMode={toggleMode} link="https://www.youtube.com/watch?v=xvm3X1oyTL8&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=6" /> */}
      <NavBar title="TextTutels" mode={Mode} toggleMode={toggleMode} link="https://www.youtube.com/watch?v=xvm3X1oyTL8&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=6" />

      <Alert alert={alert} />

      {/* <TexthtmlForm Heading="Enter the Text In area"/> */}
      <About darkcolor="black" />
    </>
  );
}
export default App; 