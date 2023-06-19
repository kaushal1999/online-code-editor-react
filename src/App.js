import React, { Component, useState } from 'react';
import './App.css';
import Editor from './components/Editor';

function App() {
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  
  const options=[{
    mode: 'xml',
    theme: 'material',
    lineNumbers: true
  },
  {
    mode: 'css',
    theme: 'material',
    lineNumbers: true
    },
  {
    mode: 'javascript',
    theme: 'material',
    lineNumbers: true
  }]
  
    return (
      <div>
        <div className="pane top-pane">
          <Editor onChange={setHtml} options={options[0]} value={html}></Editor>
          <Editor onChange={setCss} options={options[1]} value={css}></Editor>
          <Editor onChange={setJs} options={options[2]} value={js}></Editor>
        </div>
        <div className="bottom-pane"></div>
      </div>
    );
  
}

export default App;
