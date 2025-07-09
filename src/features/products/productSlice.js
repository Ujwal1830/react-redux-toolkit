import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    products: [],
    error: "",
}
export const fetchProducts = createAsyncThunk('product/fetchProducts', async() => {
    return await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => data);
})

const productsSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export const productsReducer = productsSlice.reducer;