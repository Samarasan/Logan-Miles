import { TicketServices } from "../../../utils/API";
import { LoggedInUser } from "../../common/Script";


export const getAllTicketService = async (): Promise<any> => {
    return TicketServices.AllTickets()
      .then((res: any) => res.data)
      .catch((error: any) => error);
  };
  export const getUserTicketService = async (): Promise<any> => {
    return TicketServices.userTickets({email:LoggedInUser as string})
      .then((res: any) => res.data)
      .catch((error: any) => error);
  };
  
  export const updateTicketBookingService = async (item: any): Promise<any> => {
    return TicketServices.BookingTickets(item)
      .then((res: any) => res.status)
      .catch((error: any) => error);
  };