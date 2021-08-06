import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Ticket {
    name: string;
    content: string;
}

export const EmptyTicket = {content: '', name: ''} as Ticket;

export interface TicketsState {
    tickets: Ticket[];
    showEdit:boolean;
    focusAddButtonRequired:boolean;
    editedTicket:Ticket;
}

export const initialTicketsState = {
    tickets: [{
        name: 'First Ticket',
        content: 'Add more tickets'
    }],
    editedTicket: EmptyTicket,
    showEdit:false,
    focusAddButtonRequired:false
} as TicketsState;
export const ticketsSlice = createSlice({
    name: 'TicketsState',
    reducers: {
        saveTicket: (state,action:PayloadAction<Ticket>) => {
            state.tickets.push(action.payload);         
            state.showEdit = false;
        },
        changeTicketName: (state, action: PayloadAction<string>) => {
            state.editedTicket.name = action.payload;
        },
        changeTicketContent: (state, action: PayloadAction<string>) => {
            state.editedTicket.content = action.payload;
        },
        showTicketEdit:(state=>{
            state.showEdit = true;
        }),
        clearEditedTicket:(state)=>{
            state.editedTicket = EmptyTicket;
        },
        hideTicketEdit:(state=>{
            state.showEdit = false;
        }),
        setFocusAddButtonRequired:((state,action:PayloadAction<boolean>) => {
            state.focusAddButtonRequired = action.payload;
        })
    },
    initialState: initialTicketsState,
});

export const saveTicket = ticketsSlice.actions.saveTicket;
export const changeTicketContent = ticketsSlice.actions.changeTicketContent;
export const changeTicketName = ticketsSlice.actions.changeTicketName;
export const clearEditedTicket = ticketsSlice.actions.clearEditedTicket;
export const showTicketEdit = ticketsSlice.actions.showTicketEdit;
export const hideTicketEdit = ticketsSlice.actions.hideTicketEdit;
export const setFocusAddButtonRequired = ticketsSlice.actions.setFocusAddButtonRequired;