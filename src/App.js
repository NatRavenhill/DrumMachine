import "./App.css";
import DrumPad from "./DrumPad"
import { useState } from "react";

function App() {
  const [currentSound, setCurrentSound ] = useState('');

  const Drums = [
    { id: "Heater-1", keyname: "Q"},
    { id: "Heater-2",keyname: "W"},
    { id: "Heater-3", keyname:"E"},
    { id: "Heater-4_1", keyname:"A"},
    { id: "Heater-6",keyname:"S"}, 
    { id: "Dsc_Oh", keyname:"D"},
    { id: "Kick_n_Hat", keyname:"Z"},
    { id: "RP4_KICK_1", keyname:"X"},
    { id: "Cev_H2", keyname:"C"}];


  const keyPressed = (event) => {
    var drum = Drums.find(d => d.keyname === event.key.toUpperCase());
    if(drum) {
      setCurrentSound(drum.id);
      var audioElem = document.getElementById(drum.keyname);
        audioElem.play().then(() => 
        audioElem.pause());
    }
  }

  return (
    <div id="drum-machine" onKeyDown={keyPressed}>
      
      <div id="displayDiv">
      <h1>Drum Machine</h1>
      <h3 id="display">
        {currentSound}
      </h3>
      </div>
      

      <div
        variant="contained"
        aria-label="outlined primary button group"
        id="drums"
      >
        <DrumPad id="Heater-1" keyname="Q" changeSound={setCurrentSound} />
        <DrumPad id="Heater-2" keyname="W" changeSound={setCurrentSound}/>
        <DrumPad id="Heater-3" keyname="E" changeSound={setCurrentSound}/>
        <DrumPad id="Heater-4_1" keyname="A" changeSound={setCurrentSound}/>
        <DrumPad id="Heater-6" keyname="S" changeSound={setCurrentSound}/>
        <DrumPad id="Dsc_Oh" keyname="D" changeSound={setCurrentSound}/>
        <DrumPad id="Kick_n_Hat" keyname="Z" changeSound={setCurrentSound}/>
        <DrumPad id="RP4_KICK_1" keyname="X" changeSound={setCurrentSound}/>
        <DrumPad id="Cev_H2" keyname="C" changeSound={setCurrentSound}/>
      </div>
    </div>
  );
}

export default App;
