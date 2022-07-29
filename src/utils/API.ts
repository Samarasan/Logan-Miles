import {
  addAddressAPI,
  addCartAPI,
  addFavouriteAPI,
  allProductsAPI,
  carouselAPI,
  categoriesAPI,
  confirmationAPI,
  deleteAddressAPI,
  deleteCartAPI,
  deletefavAPI,
  deleteItemAPI,
  featuredCollectionAPI,
  forgotpwdAPI,
  fundingAPI,
  getAddressAPI,
  getFavoritesAPI,
  getMetalAPI,
  // getOrderAPI,
  getStoneAPI,
  getUserAPI,
  loginAPI,
  ourBrdAmbassadorAPI,
  ourTeamAPI,
  placeOrderAPI,
  plansAPI,
  preOrder,
  productColors,
  registerAPI,
  searchAPI,
  subscriptionAPI,
  // supportTeamAPI,
  updateAddressAPI,
  updatepwdAPI,
  updateSubscriptionAPI,
  updateUserAPI,
  viewCartAPI,
  ourEventAPI,
  ourEventBooking,
  ourEventById,
  getEventBooking,
  updateEvent,
  getEventProfile,
  getAllTickets,
  updateTicket,
  profconfirmationAPI,
  profforgotpwdAPI,
  profloginAPI,
  profregisterAPI,
  profupdatepwdAPI,
  updatePlayerAPI,
  getCountsById,
  singleProductAPI,
  verifyDeliveryAPI,
  guestUserRegistrationAPI,
  sendPasswordUsernameAPI,
  getOrderAPI,
  getTicketsByEmail,
  stripePay,
  cashFreeAPI,
} from "./APIEndPoint";
import { GET, GETALL, POST } from "./axios";

export const UserServices = {
  login: async function (user: any) {
    const promise = await POST(loginAPI, user);
    return promise;
  },
  forgotpwd: async function (email: any) {
    const promise = await POST(forgotpwdAPI, email);
    return promise;
  },
  confimation: async function (token: any) {
    const promise = await POST(confirmationAPI, token);
    return promise;
  },
  updatepwd: async function (user: any) {
    const promise = await POST(updatepwdAPI, user);
    return promise;
  },
  register: async function (user: any) {
    const promise = await POST(registerAPI, user);
    return promise;
  },
  guestUserRegistration: async function (user: any) {
    const promise = await POST(guestUserRegistrationAPI, user);
    return promise;
  },
};
//
export const PlayerServices = {
  proflogin: async function (player: any) {
    const promise = await POST(profloginAPI, player);
    return promise;
  },
  profforgotpwd: async function (email: any) {
    const promise = await POST(profforgotpwdAPI, email);
    return promise;
  },
  profconfimation: async function (token: any) {
    const promise = await POST(profconfirmationAPI, token);
    return promise;
  },
  profupdatepwd: async function (player: any) {
    const promise = await POST(profupdatepwdAPI, player);
    return promise;
  },
  profregister: async function (player: any) {
    const promise = await POST(profregisterAPI, player);
    return promise;
  },
};

export const ProductServices = {
  categories: async () => {
    const promise = await GET(categoriesAPI);
    return promise;
  },
  Search: async (item: any) => {
    const promise = await GET(searchAPI, item);
    return promise;
  },
  SlidersAPI: async () => {
    const promise = await GETALL([
      carouselAPI,
      featuredCollectionAPI,
      featuredCollectionAPI,
      featuredCollectionAPI,
      featuredCollectionAPI,
    ]);
    return promise;
  },
  AllProducts: async (item: any) => {
    const promise = await GET(allProductsAPI, item);
    return promise;
  },
  PreOrder: async (item: any) => {
    const promise = await GET(preOrder, item);
    return promise;
  },
  Colors: async () => {
    const promise = await GET(productColors);
    return promise;
  },
  Stone: async () => {
    const promise = await GET(getStoneAPI);
    return promise;
  },
  Metal: async () => {
    const promise = await GET(getMetalAPI);
    return promise;
  },
};

export const CartServices = {
  addCart: async function (item: any) {
    const promise = await POST(addCartAPI,{}, item);
    return promise;
  },
  deleteCartItem: async function (details: any) {
    const promise = await POST(deleteItemAPI, details);
    return promise;
  },
  deleteCart: async function (details: any) {
    const promise = await POST(deleteCartAPI, details);
    return promise;
  },
  viewCart: async function (details: any) {
    const promise = await GET(viewCartAPI, details);
    return promise;
  },
  verifyDelivery: async function (item: any) {
    const promise = await GET(verifyDeliveryAPI, item);
    return promise;
  },
  sendPasswordUsername: async function (details: any) {
    const promise = await POST(sendPasswordUsernameAPI, details);
    return promise;
  },
};

// Profile Services

export const UpdateProfileservice = {
  getUserProfile: async function (item: any) {
    const promise = await GET(getUserAPI, item);
    return promise;
  },
  updateUserProfile: async function (item: any) {
    const promise = await POST(updateUserAPI, item);
    return promise;
  },
};

//player Service

export const UpdatePlayerservice = {
  updatePlayerProfile: async function (item: any) {
    const promise = await POST(updatePlayerAPI , item);
    return promise;
  },
};
// Delivery Services

export const DeliveryServices = {
  getAddress: async function (item: any) {
    const promise = await GET(getAddressAPI, item);
    return promise;
  },
  addAddress: async function (item: any) {
    const promise = await POST(addAddressAPI, item);
    return promise;
  },
  deleteAddress: async function (item: any) {
    const promise = await POST(deleteAddressAPI, item);
    return promise;
  },
  updateAddress: async function (item: any) {
    const promise = await POST(updateAddressAPI, item);
    return promise;
  },
};

// Fav Services

export const FavServices = {
  getFav: async function (item: any) {
    const promise = await GET(getFavoritesAPI, item);
    return promise;
  },
  addFav: async function (item: any) {
    const promise = await POST(addFavouriteAPI, item);
    return promise;
  },
  deleteFav: async function (item: any) {
    const promise = await POST(deletefavAPI, item);
    return promise;
  },
};

// OrderService
export const OrderServices = {
  placeOrder: async function (item: any) {
    const promise = await POST(placeOrderAPI, item);
    return promise;
  },
  getOrderByUserId: async function (item: any) {
    const promise = await GET(getOrderAPI, item);
    return promise;
  },
};

//Subscription
export const SubscriptionServices = {
  Subscription: async function (item: any) {
    const promise = await GET(subscriptionAPI, item);
    return promise;
  },
  plans: async function () {
    const promise = await POST(plansAPI);
    return promise;
  },
  UpdateSubscription: async function (item: any) {
    const promise = await POST(updateSubscriptionAPI, item);
    return promise;
  },
};

//Subscription
export const BrandServices = {
  Team: async function () {
    const promise = await GET(ourTeamAPI);
    return promise;
  },
  BrandAmbassador: async function () {
    const promise = await GET(ourBrdAmbassadorAPI);
    return promise;
  },
  Funding: async function (item: any) {
    const promise = await POST(fundingAPI, item);
    return promise;
  },
  // SupportTeam: async function () {
  //   const promise = await GET(supportTeamAPI);
  //   return promise;
  // },
};

// SingleProductService
export const ShowSingLeProduct = {
  showSingleProduct: async function (item: any) {
    const promise = await GET(singleProductAPI, item);
    return promise;
  },
};

export const paymentService = {
  updateUserProfile: async function (item: any) {
    const promise = await POST(updateUserAPI, item);
    return promise;
  },
};

//Events

export const EventServices = {
  AllEvents: async function () {
    const promise = await GET(ourEventAPI);
    return promise;
  },
  EventById: async function () {
    const promise = await GET(ourEventById);
    return promise;
  },
  Booking: async function (item: any) {
    const promise = await POST(ourEventBooking, item);
    return promise;
  },
  RegiteredBooking: async function () {
    const promise = await GET(getEventBooking);
    return promise;
  },
  UpdateEvent: async function (item: any) {
    const promise = await POST(updateEvent, item);
    return promise;
  },
  BookingProfile: async function () {
    const promise = await GET(getEventProfile );
    return promise;
  },
};

//Tickets
export const TicketServices = {
  AllTickets: async function () {
    const promise = await GET(getAllTickets);
    return promise;
  },
  userTickets: async function (item:any) {
    const promise = await GET(getTicketsByEmail,item);
    return promise;
  },
  BookingTickets: async function (item: any) {
    const promise = await POST(updateTicket, item);
    return promise;
  },
}


//Likes
export const PostServices = {
  LikesCountById: async function(ppid:any){
    const promise = await GET(getCountsById, ppid);
    return promise;
  }
}

//Payment

export const PaymentService = {
  stripePay: async function (item: any) {
    const promise = await POST(stripePay, item);
    return promise;
  },
  cashFree: async function (item: any) {
    const promise = await POST(cashFreeAPI, item);
    return promise;
  },
};