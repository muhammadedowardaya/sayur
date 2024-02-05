import { createSlice } from '@reduxjs/toolkit';
import { content } from '../../utils/data';

const initialState = {
	data: content,
};

export const contentSlice = createSlice({
	name: 'content',
	initialState,
});

export default contentSlice.reducer;
