import React, {FC, useEffect, useRef} from 'react';
import {TicketsList} from './TicketsList';
import {useDispatch} from "react-redux";
import {setFocusAddButtonRequired} from "../store/Tickets.store";
import {EditTicket} from './EditTicket';
import {useAppSelector} from "../../../app/hooks";
import {START_ADD_TICKET} from "../sagas/Tickets.saga";


interface TicketsProps {
}

const TicketsComponent: FC<TicketsProps> = () => {

    const dispatch = useDispatch();
    const {showEdit, focusAddButtonRequired} = useAppSelector(state => state.ticketsState);
    const buttonAdd = useRef<HTMLButtonElement | null>(null);
    useEffect(() => {
        if (focusAddButtonRequired){
            dispatch(setFocusAddButtonRequired(false));
            buttonAdd.current?.focus();
        }
    }, [focusAddButtonRequired])
    return <>
        <TicketsList/>
        <EditTicket/>
        <button autoFocus={true} ref={btn => {
            if (btn) buttonAdd.current = btn;
        }} onClick={() => {
            dispatch({type:START_ADD_TICKET})
        }} disabled={showEdit}>Dodaj nowy ticket
        </button>
    </>;
};
export const Tickets = TicketsComponent;