import { createSlice } from "@reduxjs/toolkit";

export const drumMachineSlice = createSlice({
  name: "drumMachine",
  initialState: {
    drums: [
      { name: "Q", audio: "Heater-1" },
      { name: "W", audio: "Heater-2" },
      { name: "E", audio: "Heater-3" },
      { name: "A", audio: "Heater-4_1" },
      { name: "S", audio: "Heater-6" },
      { name: "D", audio: "Dsc_Oh" },
      { name: "Z", audio: "Kick_n_Hat" },
      { name: "X", audio: "side_stick_1" },
      { name: "C", audio: "Cev_H2" },
    ],
  },
});

export default drumMachineSlice.reducer;
