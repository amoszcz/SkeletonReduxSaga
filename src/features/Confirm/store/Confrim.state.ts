import { createSlice } from '@reduxjs/toolkit';

export interface ConfirmState {
    visible: boolean;
}

export const confirmInitialState = {
    visible: false,
} as ConfirmState;

const confirmSlice = createSlice({
    name: 'ConfirmState',
    initialState: confirmInitialState,
    reducers: {
        showConfirm: (state) => {
            state.visible = true;
        },
        hideConfirm: (state) => {
            state.visible = false;
        },
    },
});
export const confirmReducer = confirmSlice.reducer;
export const showConfirm = confirmSlice.actions.showConfirm;
export const hideConfirm = confirmSlice.actions.hideConfirm;
