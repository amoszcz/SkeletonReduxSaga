import { FINISH_TICKET_REQUESTED, finishTicketSaga } from './finishTicket.saga';
import { call, put, take } from 'redux-saga/effects';
import { confirmSaga } from '../../Confirm/sagas/confirm.saga';
import sagaHelper from 'redux-saga-testing';
import { Guid } from '../../../app/guid';
import { hideLoadingPanel, showLoadingPanel } from '../../LoadingPanel/store/LoadingPanel.state';
import { waitASecond } from '../../../mocks/Mocks';
import { finishTicket } from '../store/Tickets.store';
jest.mock('../../Confirm/sagas/confirm.saga');
describe('finishTicketSaga', () => {
    describe('finishTicketSaga Scenario when there is no payload in action from take(FINISH_TICKET_REQUESTED) ', () => {
        const it = sagaHelper(finishTicketSaga());
        it('should wait for user to request for finish ticket', (result) => {
            expect(result).toStrictEqual(take(FINISH_TICKET_REQUESTED));
            return { type: FINISH_TICKET_REQUESTED, payload: null };
        });

        it('should return to the beginning of the saga', (result) => {
            expect(result).toStrictEqual(take(FINISH_TICKET_REQUESTED));
        });
    });
    describe('finishTicketSaga Scenario when there is payload in action from take(FINISH_TICKET_REQUESTED) yet user doest not confirm', () => {
        beforeEach(() => {
            (confirmSaga as jest.Mock).mockReturnValue(true);
        });
        const it = sagaHelper(finishTicketSaga());
        it('should wait for user to request for finish ticket', (result) => {
            expect(result).toStrictEqual(take(FINISH_TICKET_REQUESTED));
            return { type: FINISH_TICKET_REQUESTED, payload: Guid.NewGuid() };
        });

        it('should call(confirmSaga)', (result) => {
            expect(result).toStrictEqual(call(confirmSaga));
            return false;
        });

        it('should return to the beginning of the saga', (result) => {
            expect(result).toStrictEqual(take(FINISH_TICKET_REQUESTED));
        });
    });

    describe('finishTicketSaga Scenario when there is payload in action from take(FINISH_TICKET_REQUESTED) and user confirms', () => {
        beforeEach(() => {
            (confirmSaga as jest.Mock).mockReturnValue(true);
        });
        const it = sagaHelper(finishTicketSaga());
        const ticketGuid = Guid.NewGuid();
        it('should wait for user to request for finish ticket', (result) => {
            expect(result).toStrictEqual(take(FINISH_TICKET_REQUESTED));
            return { type: FINISH_TICKET_REQUESTED, payload: ticketGuid };
        });

        it('should call(confirmSaga)', (result) => {
            expect(result).toStrictEqual(call(confirmSaga));
            return true;
        });

        it('should put(showLoadingPanel())', (result) => {
            expect(result).toStrictEqual(put(showLoadingPanel()));
        });

        it('should call(waitASecond, ticketGuid)', (result) => {
            expect(result).toStrictEqual(call(waitASecond as (ticketGuid: Guid) => Promise<void>, ticketGuid));
        });
        it('should put(hideLoadingPanel())', (result) => {
            expect(result).toStrictEqual(put(hideLoadingPanel()));
        });
        it('should put(finishTicket(ticketGuid))', (result) => {
            expect(result).toStrictEqual(put(finishTicket(ticketGuid)));
        });
    });
});
