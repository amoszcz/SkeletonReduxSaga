import { EDIT_TICKET_CANCEL, EDIT_TICKET_SAVE, editTicketTask, selectEditedTicket } from './editTicket.task';
import sagaHelper from 'redux-saga-testing';
import { call, put, select, take } from 'redux-saga/effects';
import { hideLoadingPanel, showLoadingPanel } from '../../LoadingPanel/store/LoadingPanel.state';
import { waitASecond } from '../../../mocks/Mocks';
import { saveTicket, Ticket } from '../store/Tickets.store';
import { EDIT_TICKET_FINISHED } from './Tickets.saga';
const ticket = { some: 'ticket' };
describe('editTicket.task', () => {
    describe('Scenario when user sends EDIT_TICKET_SAVE action', () => {
        const it = sagaHelper(editTicketTask());

        it('should take([EDIT_TICKET_SAVE, EDIT_TICKET_CANCEL])', (result) => {
            expect(result).toStrictEqual(take([EDIT_TICKET_SAVE, EDIT_TICKET_CANCEL]));
            return { type: EDIT_TICKET_SAVE };
        });

        it('should select(selectEditedTicket)', (result) => {
            expect(result).toEqual(select(selectEditedTicket));
            return ticket;
        });
        it('should put(showLoadingPanel())', (result) => {
            expect(result).toStrictEqual(put(showLoadingPanel()));
        });
        it('should call(simulateSaveToBackend, editedTicket)', (result) => {
            expect(result).toStrictEqual(call(waitASecond as any, ticket));
        });
        it('should  put(hideLoadingPanel())', (result) => {
            expect(result).toStrictEqual(put(hideLoadingPanel()));
        });
        it('should  put(saveTicket(editedTicket))', (result) => {
            expect(result).toStrictEqual(put(saveTicket(ticket as any)));
        });
        it('should  put({ type: EDIT_TICKET_FINISHED })', (result) => {
            expect(result).toStrictEqual(put({ type: EDIT_TICKET_FINISHED }));
        });
    });

    describe('Scenario when user sends EDIT_TICKET_CANCEL action', () => {
        const it = sagaHelper(editTicketTask());

        it('should take([EDIT_TICKET_SAVE, EDIT_TICKET_CANCEL])', (result) => {
            expect(result).toStrictEqual(take([EDIT_TICKET_SAVE, EDIT_TICKET_CANCEL]));
            return { type: EDIT_TICKET_CANCEL };
        });

        it('should  put({ type: EDIT_TICKET_FINISHED })', (result) => {
            expect(result).toStrictEqual(put({ type: EDIT_TICKET_FINISHED }));
        });
    });
});
