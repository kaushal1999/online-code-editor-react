import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { Button } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

require("codemirror/mode/xml/xml");
require("codemirror/mode/css/css");
require("codemirror/mode/javascript/javascript");

export default function Editor(props) {
  const Style = {
    width:"10%",
    marginBottom:"10px",
    border: "rgb(37, 55, 101)",
    borderStyle: "solid",
    borderRadius: "10px",
  
  };

  const [open, setOpen] = useState(true);
  return (
    <div
      className="container"
      // style={Style}
      style={open === true ? { ...Style,flexGrow: "1" } : { ...Style,flexGrow: "0" }}
    >
      <div className="editor-header">
        <h3>{props.heading}</h3>
        <Button
          variant="outlined"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {!open ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
        </Button>
      </div>
      <div>
        <CodeMirror
          className="mirror"
          value={props.value}
          options={props.options}
          onBeforeChange={(editor, data, value) => {
            props.onChange(value);
          }}
        />
      </div>
    </div>
  );
}
