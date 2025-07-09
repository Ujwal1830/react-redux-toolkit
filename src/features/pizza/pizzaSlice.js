import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzaBase: 200,
}
const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        pizza_order: (state, action) => {
            state.pizzaBase--;
        },
        customer_choice: (state, action) => {
            state.pizzaBase -= action.payload;
        }
    }
});
export const pizzaReducer = pizzaSlice.reducer;
export const { pizza_order, customer_choice } = pizzaSlice.actions;