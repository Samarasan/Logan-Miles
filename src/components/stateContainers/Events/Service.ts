import { EventServices } from "../../../utils/API";
import { IuptEvent } from "./Types";

export const getAllEventsService = async (): Promise<any> => {
  return EventServices.AllEvents()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};
export const getEventById = async (): Promise<any> => {
  return EventServices.EventById()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};
export const getBookingProfileService = async (): Promise<any> => {
  return EventServices.BookingProfile()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};
export const getRegisteredEvents = async (): Promise<any> => {
  return EventServices.RegiteredBooking()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export interface IBooking {
  name: string;
  mail: string;
 // mobile: string;
  address:string;
  tnxid: number;
  videourl:any;
  idurl:any;
}

export const addBookingService = async (item: IBooking): Promise<any> => {
  return EventServices.Booking(item)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};
export const updateEventService =  async (item: IuptEvent): Promise<any> => {
  return EventServices.UpdateEvent(item)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};
