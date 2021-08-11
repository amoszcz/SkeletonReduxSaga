import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { useDispatch } from 'react-redux';
import { EDIT_TICKET_SAVE } from '../sagas/editTicket.task';
import { changeTicketContent, changeTicketName, Ticket } from '../store/Tickets.store';

interface EditTicketProps {}

const EditTicketComponent: FC<EditTicketProps> = ({}) => {
    const { showEdit, editedTicket } = useAppSelector((state) => state.ticketsState);
    const dispatch = useDispatch();
    return (
        <>
            {showEdit && (
                <>
                    Nazwa:{' '}
                    <input
                        autoFocus={true}
                        value={editedTicket.name}
                        onChange={(e) => {
                            dispatch(changeTicketName(e.target.value));
                        }}
                    />
                    Opis:{' '}
                    <textarea
                        value={editedTicket.content}
                        onChange={(e) => {
                            dispatch(changeTicketContent(e.target.value));
                        }}
                    />
                    <button
                        onClick={async () => {
                            await dispatch({ type: EDIT_TICKET_SAVE });
                        }}
                    >
                        Zapisz
                    </button>
                </>
            )}
        </>
    );
};
export const EditTicket = EditTicketComponent;
