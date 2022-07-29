export interface Itkt {
    tid: any,
    event: string,
    venue: string,
    date: string,
    tickettype: string,
    price: any,
    servicefee: any,
    nooftickets: any,
    availabletickets: any,
    bookedtickets: any
}
export interface IuserTkt{
    bid: number,
    useremail: string,
    ticketid: number,
    quantity: number,
    total: number,
    servicefee: number,
    subtotal: number,
    pstatus: string,
    txnid: any
}
export interface IBookingtkt{
        bid: any,
        useremail: string,
        ticketid: any,
        quantity: any,
        total: any,
        servicefee: any,
        subtotal: any,
        pstatus: string,
        txnid: any
}


export interface IInitialState{
    allTickets: Itkt[];
    getUserTickets:any;
    bookingTickets:IBookingtkt[];
}