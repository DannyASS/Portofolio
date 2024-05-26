import { createSlice } from "@reduxjs/toolkit";



const globalSlice = createSlice({
    name : "global",
    initialState : {
        language : 'id'
    },
    reducers : {
        updateLanguage: (state, action) => {
            state.language = action.payload.language;
        }
    }
})


export const { updateLanguage } = globalSlice.actions
export default globalSlice.reducer