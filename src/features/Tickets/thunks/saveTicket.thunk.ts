import {AppThunk} from "../../../app/store";
import {saveTicket, setFocusAddButtonRequired} from "../store/Tickets.store";
import {waitASecond} from "../../../mocks/Mocks";
import {hideLoadingPanel, showLoadingPanel} from "../../LoadingPanel/store/LoadingPanel.state";

// export const saveTicketThunk:  ()=>AppThunk = () =>  ( async (dispatch,getState) => {
//     const editedTicket = getState().ticketsState.editedTicket;
//     dispatch(showLoadingPanel());
//     const simulateSaveToBackend = waitASecond;
//     await simulateSaveToBackend();
//     dispatch(hideLoadingPanel());
//     dispatch(saveTicket(editedTicket));
//     dispatch(setFocusAddButtonRequired(true));
// });