function DrumPad(props){
    var fileName = "https://s3.amazonaws.com/freecodecamp/drums/" + props.id + ".mp3";

    const playSound = () => {
        var audioElem = document.getElementById(props.keyname);
        audioElem.play().then(() => 
        audioElem.pause());
        props.changeSound(props.id);
    }


    return (
        <button className="drum-pad" id={props.id} onClick={() => {
            playSound();
          }}>
            <div>
               <h1>{props.keyname}</h1> 
               <audio id={props.keyname} className="clip" src={fileName} />
            </div>
        </button>
    )
}

export default DrumPad;