import React, { useEffect } from "react";
import "./App.css";
import DrumMachine from './features/drum-machine/DrumMachine'

function App() {
  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    scriptTag.async = true;
    document.body.appendChild(scriptTag);
  }, []);

  return (
    <div className="App">
      <DrumMachine />
    </div>
  );
}

export default App;
