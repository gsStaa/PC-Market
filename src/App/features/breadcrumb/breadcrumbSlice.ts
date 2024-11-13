import { createSlice } from "@reduxjs/toolkit";

const breadcrumbSlice = createSlice({
    name: 'breadcrumb',
    initialState:{
        path: []
    },
    reducers: {
        setPath: (state, action) => {
            state.path = action.payload;
        }
    }
})

export const { setPath } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;