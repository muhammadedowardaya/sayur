import { configureStore } from '@reduxjs/toolkit';

import contentReducer from '../features/content/contentSlice';
import productsReducer from '../features/products/productsSlice';
import testimonialsReducer from '../features/testimonials/testimonialsSlice';

export const store = configureStore({
	reducer: {
		content: contentReducer,
		products: productsReducer,
		testimonials: testimonialsReducer,
	},
});
