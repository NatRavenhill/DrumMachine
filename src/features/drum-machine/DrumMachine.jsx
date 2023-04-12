import React, { useEffect, useState } from 'react';
import Display from './../display/Display';
import DrumPad from './../drum-pad/DrumPad';
import { useSelector } from 'react-redux';


const DrumMachine = () => {
  const [ pressedKey, setPressedKey ] = useState('');
  const drums = useSelector((state) => state.drumMachine.drums);

  const handleKeyPress = (e) => {
    setPressedKey(e.key);
    
  }

  return (
    <div id="drum-machine" tabIndex="0" onKeyPress={(e) => handleKeyPress(e)}>
      <h1>Drum Machine</h1>
      <Display pressedKey={pressedKey}/>
      <div id="drums">
        {drums.map(drum => {
          return <DrumPad key={drum.name} name={drum.name} audio={drum.audio} pressedKey={pressedKey} />
        })}
      </div>
    </div>);
}

export default DrumMachine;