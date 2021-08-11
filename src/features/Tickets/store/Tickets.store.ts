import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Guid } from '../../../app/guid';

export interface Ticket {
    name: string;
    content: string;
    guid: Guid;
}

export const EmptyTicket = { content: '', name: '', guid: Guid.NewGuid() } as Ticket;

export interface TicketsState {
    tickets: Ticket[];
    showEdit: boolean;
    focusAddButtonRequired: boolean;
    editedTicket: Ticket;
}

export const initialTicketsState = {
    tickets: [
        {
            name: 'First Ticket',
            content: 'Add more tickets',
            guid: Guid.NewGuid(),
        },
    ],
    editedTicket: EmptyTicket,
    showEdit: false,
    focusAddButtonRequired: false,
} as TicketsState;

export const ticketsSlice = createSlice({
    name: 'TicketsState',
    reducers: {
        saveTicket: (state, action: PayloadAction<Ticket>) => {
            state.tickets.push(action.payload);
            state.showEdit = false;
        },
        changeTicketName: (state, action: PayloadAction<string>) => {
            state.editedTicket.name = action.payload;
        },
        changeTicketContent: (state, action: PayloadAction<string>) => {
            state.editedTicket.content = action.payload;
        },
        showTicketEdit: (state) => {
            state.showEdit = true;
        },
        clearEditedTicket: (state) => {
            state.editedTicket = { ...EmptyTicket, guid: Guid.NewGuid() };
        },
        hideTicketEdit: (state) => {
            state.showEdit = false;
        },
        focusAddButton: (state) => {
            state.focusAddButtonRequired = true;
        },
        clearFocusAddButton: (state) => {
            state.focusAddButtonRequired = false;
        },
        removeTicket: (state, action: PayloadAction<Guid>) => {
            const index = state.tickets.findIndex((el) => el.guid === action.payload);
            if (index > -1) state.tickets.splice(index, 1);
        },
    },
    initialState: initialTicketsState,
});

export const saveTicket = ticketsSlice.actions.saveTicket;
export const changeTicketContent = ticketsSlice.actions.changeTicketContent;
export const changeTicketName = ticketsSlice.actions.changeTicketName;
export const clearEditedTicket = ticketsSlice.actions.clearEditedTicket;
export const showTicketEdit = ticketsSlice.actions.showTicketEdit;
export const hideTicketEdit = ticketsSlice.actions.hideTicketEdit;
export const focusAddButton = ticketsSlice.actions.focusAddButton;
export const clearFocusAddButton = ticketsSlice.actions.focusAddButton;
export const removeTicket = ticketsSlice.actions.removeTicket;
