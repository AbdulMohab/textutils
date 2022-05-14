import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout( () =>{
      setAlert(null);
    }, 2000)
  }

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm showAlert={showAlert} Heading="Enter The Text To Analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;