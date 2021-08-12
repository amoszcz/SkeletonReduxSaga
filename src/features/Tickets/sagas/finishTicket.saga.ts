import { call, put, take } from 'redux-saga/effects';
import { finishTicket } from '../store/Tickets.store';
import { hideLoadingPanel, showLoadingPanel } from '../../LoadingPanel/store/LoadingPanel.state';
import { waitASecond } from '../../../mocks/Mocks';
import { Guid } from '../../../app/guid';
import { confirmSaga } from '../../Confirm/sagas/confirm.saga';

export const FINISH_TICKET = 'FINISH_TICKET';
export const finishTicketSaga = function* () {
    while (true) {
        const finishTicketAction = yield take(FINISH_TICKET);
        const userConfirmed = yield call(confirmSaga);
        if (!userConfirmed) continue;
        const ticketGuid = finishTicketAction.payload;
        if (!ticketGuid) return;
        yield put(showLoadingPanel());
        const simulateSaveToBackend = waitASecond as (ticketGuid: Guid) => Promise<void>;
        yield call(simulateSaveToBackend, ticketGuid);
        yield put(hideLoadingPanel());
        yield put(finishTicket(ticketGuid));
    }
};
