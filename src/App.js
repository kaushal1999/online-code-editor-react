import React, { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
// import CodeIcon from "@mui/icons-material/Code";
import { useEffect } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Button } from "@mui/material";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html");
  const [css, setCss] = useLocalStorage("css");
  const [js, setJs] = useLocalStorage("js");
  const [srcCode, setCode] = useState(`<html></html>`);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCode(`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script/
  </html>
  `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const options = [
    {
      mode: "xml",
      theme: "material",
      lineNumbers: true,
    },
    {
      mode: "css",
      theme: "material",
      lineNumbers: true,
    },
    {
      mode: "javascript",
      theme: "material",
      lineNumbers: true,
    },
  ];

  return (
    <div>
      <div className="header">
        {/* <CodeIcon></CodeIcon> */}
        <Button
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          <AutorenewIcon></AutorenewIcon>
        </Button>
      </div>
      <div className="top-pane">
        <Editor
          onChange={setHtml}
          heading="HTML"
          options={options[0]}
          value={html}
        ></Editor>
        <Editor
          onChange={setCss}
          heading="CSS"
          options={options[1]}
          value={css}
        ></Editor>
        <Editor
          heading="JS"
          onChange={setJs}
          options={options[2]}
          value={js}
        ></Editor>
      </div>
      <div className="bottom-pane"></div>
      <iframe
        srcDoc={srcCode}
        sandbox="allow-scripts"
        title="output"
        width="100%"
      ></iframe>
    </div>
  );
}

export default App;
