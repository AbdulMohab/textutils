import React from 'react'
import { useState } from 'react';
import "./Responsive.css";

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted To Uppercase", "success");
    }

    const handleLcClick = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Text Converted To Lowercase", "success");
    }

    const handleReverseClick = () => {
        let reverseText = text.split("").reverse().join("");
        setText(reverseText);
        props.showAlert("Text Converted To Reversecase", "success");
    }

    const handleCopyClick = () => {

        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied Successfully", "success");
    }

    const handleSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed From The Text", "success");
    }

    const handleClearClick = () => {
        let clearText = "";
        setText(clearText);
        props.showAlert("Text Cleared Successfully", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='contaianer' style={{ color: props.mode === 'dark' ? 'white' : '#042743', }}  >
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} ></textarea>
                </div>
                <button id='formBtn' className='btn btn-primary mx-1' onClick={handleUpClick} >Convert To Uppercase</button>
                <button id='formBtn' className='btn btn-success mx-1' onClick={handleLcClick} >Convert To Lowercase</button>
                <button id='formBtn' className='btn btn-danger mx-1' onClick={handleReverseClick} >Convert To Reverse Case</button>
                <button id='formBtn' className='btn btn-primary mx-1' onClick={handleCopyClick} >Copy Text</button>
                <button id='formBtn' className='btn btn-warning mx-1' onClick={handleSpacesClick} >Remove Extra Spces</button>
                <button id='formBtn' className='btn btn-dark mx-1' onClick={handleClearClick} >Clear Text</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743', }} >
                <h1>Your Text Summary</h1>
                <p><b>{text.split(" ").length}</b> Words & <b>{text.length}</b> Characters</p>

                <p><b>{0.08 * text.split(" ").length}</b> Minutes To Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Text In Above Text-Box To Preview Something"}</p>

            </div>
        </>
    )
}

