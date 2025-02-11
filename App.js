import './App.css';
import React, { useState } from 'react';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      document.body.className = newMode === 'light' ? 'light-mode' : 'dark-mode';
      showAlert(`${newMode === 'light' ? 'Light' : 'Dark'} mode has been enabled`, 'success');
      return newMode;
    });
  };

  return (
    // <Router>
    <>
      <Navbar title="TextUtils" aboutText="About textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Route>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter Your Text Below" mode={mode} />} />
        </Route> */}
        <TextForms showAlert={showAlert} heading="Enter Your Text Below" mode={mode} />
      </div>
      </>
   // </Router>
  );
}

export default App;
