import { fork} from "redux-saga/effects"
import {addTicketSaga} from "./addTicket.saga";

export const START_ADD_TICKET = 'TICKETS_START_ADD_TICKET';
export const EDIT_TICKET_FINISHED = 'EDIT_TICKET_FINISHED';


export const TicketSaga = function* () {
    yield fork(addTicketSaga)
}



