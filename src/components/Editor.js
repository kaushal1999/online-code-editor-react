import React, { useRef, useState } from "react";
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
  
  let open = useRef(true)
  const [style, setStyle] = useState({flexGrow:"1"})
  return (
    <div className="container" style={style}>
      <Button variant="outlined" onClick={() => {
        open.current = !open.current;
         if(!open.current)
           setStyle({ flexGrow: "0" })
        else 
           setStyle({ flexGrow: "1" });  
      }}>
        {!open.current? <OpenInFullIcon /> : <CloseFullscreenIcon />}
      </Button>

      <CodeMirror
        value={props.value}
        options={props.options}
        onBeforeChange={(editor, data, value) => {
          props.onChange(value);
        }}
      />
    </div>
  );
}
