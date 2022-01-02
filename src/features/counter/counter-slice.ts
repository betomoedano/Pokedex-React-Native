/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 1,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            if (state.value > 897) {
                state.value = 898;
                return;
            }
            state.value++;
        },
        decrement: (state) => {
            if (state.value < 2) {
                return state;
            }
            state.value--;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            if (state.value + action.payload > 897) {
                state.value = 898;
            } else {
                state.value += action.payload;
            }
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            if (state.value - action.payload < 2) {
                state.value = 1;
                return;
            }
            state.value -= action.payload;
        },
        reset: (state) => {
            state.value = initialState.value;
        }
    }
});


export const { increment, decrement, incrementByAmount, reset, decrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;