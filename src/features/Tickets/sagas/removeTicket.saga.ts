import { call, fork, put, take } from 'redux-saga/effects';
import { confirmSaga, USER_CONFIRMED, USER_REJECTED } from '../../Confirm/sagas/confirm.saga';
import { waitASecond } from '../../../mocks/Mocks';
import { removeTicket, Ticket } from '../store/Tickets.store';
import { hideLoadingPanel, showLoadingPanel } from '../../LoadingPanel/store/LoadingPanel.state';
import { Guid } from '../../../app/guid';

export const START_DELETE_TICKET = 'Start delete ticket';
export const removeTicketSaga = function* () {
    while (true) {
        const action = yield take(START_DELETE_TICKET);
        const userConfirmed = yield call(confirmSaga);
        if (!userConfirmed) continue;
        const simulateSaveToBackend = waitASecond as (guid: Guid) => Promise<void>;
        yield put(showLoadingPanel());
        const ticketGuid = action.payload;
        yield call(simulateSaveToBackend, ticketGuid);
        yield put(hideLoadingPanel());
        yield put(removeTicket(ticketGuid));
    }
};
