import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { pressDrum } from '../drum-machine/drumMachineSlice.js'

const Display = (props) => {
    const drums = useSelector(state => state.drumMachine.drums);
    const pressedDrumName = useSelector(state => state.drumMachine.pressedDrumName);
    const dispatch = useDispatch()
    const { pressedKey } = props;

    useEffect(() => {
        //get name from state 
        //var upperCaseKey = pressedKey.toUpperCase();
        //var drum = drums.find(d => d.name === pressedKey);
        ///if (state.drum) {
            dispatch(pressDrum(pressedKey));
        //}
      }, [ dispatch, drums, pressedKey]);


   
    return (
    <div id="displayDiv">
      <h3 id="display">
        { pressedDrumName }
      </h3>
    </div>
    );
}

export default Display;