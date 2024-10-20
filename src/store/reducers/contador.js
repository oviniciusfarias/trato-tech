import { createSlice } from '@reduxjs/toolkit';

const contadorSlice = createSlice({
  name: 'contador',
  initialState: 0,
  reducers: {
    incrementar: state => state++
  }
});

export const { incrementar } = contadorSlice.actions;
export default contadorSlice.reducer;