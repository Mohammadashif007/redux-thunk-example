import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 0,
};

const incrementByAmount = createAction("account/incrementByAmount");

export const bonusSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        increment: (state) => {
            state.amount++;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(incrementByAmount, (state, action) => {
            if (action.payload >= 100) {
                state.amount += 1;
            }
        });
    },
});

export const { increment } = bonusSlice.actions;
export default bonusSlice.reducer;
