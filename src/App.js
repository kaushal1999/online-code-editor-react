import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';

class App extends Component {
  render() {
    return (
      <div>
        <div className="pane top-pane">
          <Editor /*HTML code editor*/ />
          <Editor /*CSS code editor*/ />
          <Editor /*JS code editor*/ />
        </div>
        <div className="bottom-pane">
          <iframe
            // srcDoc={srcDoc}
            /*Title option*/
            /*sandbox option*/
            /*frameBorder option*/
            /*width-height option*/
            /*Title option*/
          ></iframe>
        </div>
      </div>
    );
  }
}

export default App;
