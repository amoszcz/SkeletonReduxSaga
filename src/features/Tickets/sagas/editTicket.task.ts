import { call, put, select, take } from 'redux-saga/effects';
import { waitASecond } from '../../../mocks/Mocks';
import { hideLoadingPanel, showLoadingPanel } from '../../LoadingPanel/store/LoadingPanel.state';
import { saveTicket, Ticket } from '../store/Tickets.store';
import { EDIT_TICKET_FINISHED } from './Tickets.saga';
import { AppState } from '../../../app/store';
export const EDIT_TICKET_SAVE = 'EDIT_TICKET_SAVE';
export const EDIT_TICKET_CANCEL = 'EDIT_TICKET_CANCEL';
export const selectEditedTicket = (state: AppState) => state.ticketsState.editedTicket;
export const editTicketTask = function* () {
    const action = yield take([EDIT_TICKET_SAVE, EDIT_TICKET_CANCEL]);
    if (action.type === EDIT_TICKET_SAVE) {
        const simulateSaveToBackend = waitASecond as (ticketToSave: Ticket) => Promise<void>;
        const editedTicket = yield select(selectEditedTicket);
        yield put(showLoadingPanel());
        yield call(simulateSaveToBackend, editedTicket);
        yield put(hideLoadingPanel());
        yield put(saveTicket(editedTicket));
    }
    yield put({ type: EDIT_TICKET_FINISHED });
};
