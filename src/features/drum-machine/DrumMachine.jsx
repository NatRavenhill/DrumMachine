//import React, { useState } from 'react';
import Display from './../display/Display';
import DrumPad from './../drum-pad/DrumPad';
import { useSelector } from 'react-redux';

const DrumMachine = () => {
  const drums = useSelector((state) => state.drumMachine.drums);
  return (
    <div id="drum-machine">
      <h1>Drum Machine</h1>
      <Display />
      <div id="drums">
        {drums.map(drum => {
          return <DrumPad key={drum.name} name={drum.name} audio={drum.audio} />
        })}
      </div>
    </div>);
}

export default DrumMachine;