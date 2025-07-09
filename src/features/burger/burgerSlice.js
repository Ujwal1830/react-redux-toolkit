import { createSlice } from "@reduxjs/toolkit";
import { pizza_order } from "../pizza/pizzaSlice";

const initialState = {
    burgerBuns: 300,
}
const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        burger_order: (state, action) => {
            state.burgerBuns--;
        },
        customer_choice: (state, action) => {
            state.burgerBuns -= action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(pizza_order, (state, action) => {
            state.burgerBuns--;
        })
    }
});
export const burgerReducer = burgerSlice.reducer;
export const { burger_order, customer_choice } = burgerSlice.actions;