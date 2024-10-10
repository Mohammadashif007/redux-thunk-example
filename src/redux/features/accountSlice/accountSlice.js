import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    amount: 0,
};

export  const getUserAccount = createAsyncThunk(
    "account/getUser",
    // Declare the type your function argument here:
    async (userId) => {
        const { data } = await axios.get(
            `http://localhost:9080/accounts/${userId}`
        );
        // Inferred return type: Promise<MyData>
        return data.amount;
    }
);

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        increment: (state) => {
            state.amount++;
        },
        decrement: (state) => {
            if (state.amount > 0) {
                state.amount--;
            }
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAccount.fulfilled, (state, action) => {
            state.amount = action.payload;
            state.pending = false
        }) 
        .addCase(getUserAccount.pending, (state) => {
            state.pending = true
        })
        .addCase(getUserAccount.rejected, (state, action) => {
            state.error = action.error
        })
    }
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;
