import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { Button } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import "codemirror/lib/codemirror.css";
import { Resizable } from "re-resizable";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

export default function Editor() {
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(200);
  
  return (
    <div className="container">
      <Resizable
        size={{ width: width, height: height }}
        onResizeStop={(e, direction, ref, d) => {
          setHeight(height + d.height);
          setWidth(width + d.width);
        }}
      >
        <div>
          <Button
            variant="outlined"
            onClick={() => {
              if (width === 20) setWidth(320);
              else setWidth(20);
            }}
          >
            {(width===20)? <OpenInFullIcon />
            :<CloseFullscreenIcon/>}
          </Button>
        </div>
        <CodeMirror
          value="kasuhal"
          // options={options}
          onBeforeChange={(editor, data, value) => {
            this.setState({ value });
          }}
          onChange={(editor, data, value) => {}}
        />
      </Resizable>
    </div>
  );
}
