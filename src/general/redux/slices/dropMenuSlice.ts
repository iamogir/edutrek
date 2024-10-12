import {createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {DropMenuState} from "../types.ts";

const dropMenuSlice = createSlice<DropMenuState, SliceCaseReducers<DropMenuState>>({
    name: "dropMenu",
    initialState: {
        isOpenMenu: false
    },
    reducers: {
        openCloseMenu: (state) => {
            state.isOpenMenu ? state.isOpenMenu = false : state.isOpenMenu = true;
        }
    }
})

export default dropMenuSlice.reducer;
export const { openCloseMenu } = dropMenuSlice.actions;