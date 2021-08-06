import {createSlice} from "@reduxjs/toolkit";

export interface LoadingPanelState {
    visible:boolean;
}

export const initialLoadingPanelState  = {
    visible:false
} as LoadingPanelState;

export const loadingPanelSlice = createSlice({
    initialState:initialLoadingPanelState,
    name:"LoadingPanelState",
    reducers:{
        showLoadingPanel:(state => {
            state.visible = true;
        }),
        hideLoadingPanel:(state => {
            state.visible = false;
        })
    }
});
export const showLoadingPanel = loadingPanelSlice.actions.showLoadingPanel;
export const hideLoadingPanel = loadingPanelSlice.actions.hideLoadingPanel;