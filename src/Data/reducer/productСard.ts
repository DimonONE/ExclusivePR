import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductCards } from '../models/IProductCard';

const initialState: IProductCards = {
    test: '',
};

export const productCardSlice = createSlice({
    name: 'productCard',
    initialState,
    reducers: {
        wholeScreen: (state, action: PayloadAction<string>) => {
            state.test = action.payload;
        },
    },
});

export default productCardSlice.reducer;
