export interface IourEvents {
  date: string;
  details: string;
  eid: any;
  entry: string;
  status: boolean;
  title: string;
  url: string;
}

export interface IBooking {
  name: string;
  mail: string;
  uPhone: string;
  address: string;
  tnxid: number;
}
export interface IBookingProfile {
  name: string;
  mail: string;
  mobile: string;
  address: string;
  tnxid: number;
}
export interface IeventID {
  id: number;
}
export interface IAuth {
  token: string;
}
export interface IregBooking {
  bid: any;
  eid: any;
  title: string;
  details: string;
  url: string;
  date: string;
  entry: string;
  name: string;
  mobile: string;
  mail: string;
  tnxid: number;
  status: string;
  videourl: string;
  idurl: string;
  address: string;
  regitrationnumber: string;
}
export interface IuptEvent {
  bid: any;
  eid: any;
  title: string;
  details: string;
  url: string;
  date: string;
  entry: string;
  name: string;
  mobile: string;
  mail: string;
  tnxid: number;
  status: string;
  videourl: string;
  idurl: string;
  address: string;
  regitrationnumber: string;
}

// InitialState
export interface IInitialState {
  ourEvents: IourEvents[];
  booking: IBooking[];
  eventID: IeventID[];
  regEvent: IregBooking[];
  uptEvent: IuptEvent[];
  bookingProfile:IBookingProfile[];
  userProfile : any;
  userBookinginfo:IregBooking[];
  userAuthentication:IAuth[];
  // usersProfile : any;
}
