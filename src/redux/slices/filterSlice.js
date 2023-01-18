import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: "популярности",
        sort: "rating",
    },
    valueOfDesc: true,
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            console.log('state', state);
            console.log('atcion', action);
            state.categoryId = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        setValueOfDesc(state) {
            state.valueOfDesc = !state.valueOfDesc;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    }
});

export const { setCategoryId, setSort, setValueOfDesc, setCurrentPage } = filterSlice.actions;
export default filterSlice.reducer;