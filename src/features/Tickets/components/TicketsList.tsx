import React, {FC} from 'react';
import {TicketElement} from './TicketElement';
import {useAppSelector} from "../../../app/hooks";

interface TicketsListProps {
  
}

const TicketsListComponent: FC<TicketsListProps> = () => {
    const tickets = useAppSelector(state=>state.ticketsState.tickets)
    return <>
        Lista Ticketów:
        <div style={{width:'100%'}}>
            {tickets.map(ticket =>
                <TicketElement ticket={ticket}/>
            )}
        </div>
    </>;
};
export const TicketsList = TicketsListComponent;