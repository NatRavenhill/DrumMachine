import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import drumMachineReducer from '../features/drum-machine/drumMachineSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    drumMachine: drumMachineReducer
  },
});
