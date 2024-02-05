import { createSlice } from "@reduxjs/toolkit";
import { testimonial } from "../../utils/data";

const initialState = {
    data: testimonial
}

export const testimonialsSlice = createSlice({
    name: 'testimonials',
    initialState
})

export default testimonialsSlice.reducer;