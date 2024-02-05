import { createSlice } from '@reduxjs/toolkit';

import { products } from '../../utils/data.js';

const initialState = {
	data: products,
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
});

export default productsSlice.reducer;
