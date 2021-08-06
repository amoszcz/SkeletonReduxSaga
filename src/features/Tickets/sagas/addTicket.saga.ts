import {fork, put, take} from "redux-saga/effects";
import {clearEditedTicket, hideTicketEdit, setFocusAddButtonRequired, showTicketEdit} from "../store/Tickets.store";
import {editTicketTask} from "./editTicket.task";
import {EDIT_TICKET_FINISHED, START_ADD_TICKET} from "./Tickets.saga";

export const addTicketSaga = function* () {
    while(true){
        yield take(START_ADD_TICKET);
        yield put(clearEditedTicket());
        yield put(showTicketEdit());
        yield fork(editTicketTask);
        yield take([EDIT_TICKET_FINISHED]);
        yield put(hideTicketEdit());
        yield put(setFocusAddButtonRequired(true));
    }
}