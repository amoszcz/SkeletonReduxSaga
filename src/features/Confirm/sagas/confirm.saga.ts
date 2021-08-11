import { put, take } from 'redux-saga/effects';
import { hideConfirm, showConfirm } from '../store/Confrim.state';
import { PayloadAction } from '@reduxjs/toolkit';
export const USER_CONFIRMED = 'User Confirmed';
export const USER_REJECTED = 'User Rejected';

export const confirmSaga = function* () {
    yield put(showConfirm());
    const action = yield take<PayloadAction>([USER_CONFIRMED, USER_REJECTED]);
    yield put(hideConfirm());
    return action.type === USER_CONFIRMED;
};
