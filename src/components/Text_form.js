import React, { useState } from 'react'
import  { useState, useEffect } from 'react';

export default function Text_form(props) {
    const [text, setText] = useState('Get Uppercase');
    const [inputText, setInputText] = useState('');
    const handlUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handlloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)

    }
    const hendupchange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading} </h1>
                <div className="mb-3 w-75 p-3">
                    <label for="myBox" className="form-label display-3">{props.Heading}</label>
                    {/* <input type="text" className="form-control w-75 h-150"  /> */}
                    <textarea className="form-control" value={text} onChange={hendupchange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button onClick={handlUpClick} className="btn btn-success btn-block mt-4 mx-2  ">Convert to Uppercase</button>
                <button onClick={handlloClick} className="btn btn-dark btn-block mt-4 mx-2 ">Convert to Lovercase</button>
                <button onClick={setInputText(e.target.value)} className="btn btn-dark btn-block mt-4 mx-2 ">Convert to Lovercase</button>

            </div>
            <div className="container my-3">
                <h1>Your Text Sumrry</h1>
                {text.split(" ").length} words and {text.length} charrecters
                <p>{0.800 * text.split(" ").length} Avg Time To Read</p>
                <h3>Priview</h3>
                <p>{text}</p>
            </div>

        </>
    )
}
