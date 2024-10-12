import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {DropMenuState} from "../types.ts";

const dropMenuSlice = createSlice<DropMenuState, SliceCaseReducers<DropMenuState>>({
    name: "dropMenu",
    initialState: {
        isOpen: false
    },
    reducers: {
        openCloseMenu: (state) => {
            state.isOpen ? state.isOpen = false : state.isOpen = true;
        }
    }
})

export default dropMenuSlice.reducer;
export const { openCloseMenu } = dropMenuSlice.actions;