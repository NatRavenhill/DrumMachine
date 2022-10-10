import React, {useEffect} from "react";

const DrumPad = (props) => {
  const { name, audio } = props;
  const beepRef = React.createRef();

  const handleOnClick = () => {
    beepRef.current.load();
    beepRef.current.play();
  };

  useEffect(() => {
    if (props.pressedKey.toUpperCase() === name) {
      handleOnClick();
    }
  }, [ props.pressedKey, name]);

  return (
    <div className="drum-pad" id="{name}">
      <button  onClick={handleOnClick}>
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
