import React, {FC} from 'react';
import {TicketsList} from './TicketsList';
import {EditTicket} from './EditTicket';
import { AddNewTicketButton } from './AddNewTicketButton';


interface TicketsProps {
}

const TicketsComponent: FC<TicketsProps> = () => {

   
  
   
    return <>
        <TicketsList/>
        <EditTicket/>
        <AddNewTicketButton />        
    </>;
};
export const Tickets = TicketsComponent;