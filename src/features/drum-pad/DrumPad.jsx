import React, { useEffect } from "react";
import { pressDrum } from '../drum-machine/drumMachineSlice.js'
import { useDispatch } from 'react-redux';

const DrumPad = (props) => {
  const { name, audio } = props;
  const beepRef = React.createRef();
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(pressDrum(name));
    
  };

   useEffect(() => {
    beepRef.current.load();
    beepRef.current.play();
   }, [ props.pressedKey, beepRef]);

  return (
    <div className="drum-pad" id="{name}">
      <button onClick={handleOnClick}>
        {name}
      </button>
      <audio
        className="clip"
        id={name}
        ref={beepRef}
        src={`https://s3.amazonaws.com/freecodecamp/drums/${audio}.mp3`}
      />
    </div>
  );
};

export default DrumPad;
