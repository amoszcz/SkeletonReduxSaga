import { fork } from 'redux-saga/effects';
import { TicketSaga } from '../features/Tickets/sagas/Tickets.saga';
export const rootSaga = function* () {
    yield fork(TicketSaga);
};
