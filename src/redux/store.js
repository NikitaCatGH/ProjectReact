import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filter';

export const store = configureStore({
    reducer: {
        counter: filterReducer,
    },
});