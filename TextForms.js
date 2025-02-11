import React, { useState } from 'react';

export default function TextForms(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("converted to uppercase!","success")
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("converted to lowercase!","success")
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleCapitalClick = () => {
    let newText = text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("converted to title case!","success")
  };
  const handleCopy=()=>{
    var text =document.getElementById('mybox')
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard!","success")
  }

  const toAlternatingCase = () => {
    setText((prevText) => {
      let newText = '';
      for (let i = 0; i < prevText.length; i++) {
        newText += i % 2 === 0 ? prevText[i].toUpperCase() : prevText[i].toLowerCase();

      }
      return newText;

    });
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
   
  };

  return (
    <>
    <div className='container' style={{Color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label">Example TextArea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', Color:props.mode==='dark'?'white':'black'}}id="mybox" rows="8"></textarea>
      </div>
      <div className="d-flex mx-3" >
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn btn-secondary mx-2" onClick={handleLowClick}>lowercase</button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-danger mx-2" onClick={handleCapitalClick}>Capitalized Case</button>
        <button className="btn btn-warning mx-2" onClick={toAlternatingCase}>AlTeRnAtInG Case</button>
        <button className="btn btn-info mx-2" onClick={handleCopy}>Copy</button>
      </div>
      <div className="container" style={{Color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>It takes {0.008 * (text.trim() === '' ? 0 : text.trim().split(/\s+/).length)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
      </div>
    </>
  );
}