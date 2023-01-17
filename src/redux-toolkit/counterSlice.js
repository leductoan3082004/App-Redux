import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            state.count++;
            return state;
        },
        decrement: (state) => {
            state.count--;
            return state;
        },
        incrementbyvalue: (state, { payload }) => {
            state.count += payload;
            return state;
        },
    },
});

export const { increment, decrement, incrementbyvalue } = counterSlice.actions;
export default counterSlice.reducer;
