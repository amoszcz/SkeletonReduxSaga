import React, { FC } from 'react';
import { Ticket } from '../store/Tickets.store';
import { useDispatch } from 'react-redux';
import { START_DELETE_TICKET } from '../sagas/removeTicket.saga';
import { FINISH_TICKET } from '../sagas/finishTicket.saga';

interface TicketElementProps {
    ticket: Ticket;
}

const TicketElementComponent: FC<TicketElementProps> = ({ ticket }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div
                style={{
                    textAlign: 'left',
                    height: '80px',
                    position: 'relative',
                    border: '1px solid #ccc',
                    background: 'yellow',
                }}
            >
                <span style={{ position: 'absolute', top: '1px', left: '10px', fontSize: '12px' }}>
                    <label></label>
                    <span>{ticket.name}</span>
                </span>
                <span style={{ position: 'absolute', top: '40px', left: '10px' }}>
                    <label></label>
                    <span>{ticket.content}</span>
                </span>
                <button
                    onClick={() => {
                        dispatch({ type: START_DELETE_TICKET, payload: ticket.guid });
                    }}
                >
                    Usuń
                </button>
                <span style={{ paddingLeft: '100px' }}>
                    <label htmlFor={`ticket_${ticket.guid}`}>Gotowe</label>
                    <input
                        disabled={ticket.finished}
                        id={`ticket_${ticket.guid}`}
                        type={'checkbox'}
                        checked={ticket.finished}
                        onChange={() => dispatch({ type: FINISH_TICKET, payload: ticket.guid })}
                    />
                </span>
                {ticket.finished && <span style={{ position: 'relative', left: '100px' }}>[Done!]</span>}
            </div>
        </>
    );
};
export const TicketElement = TicketElementComponent;
