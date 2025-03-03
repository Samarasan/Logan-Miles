import { combineReducers, Reducer } from "redux";
import { AddressSlice } from "../../components/stateContainers/Address/Slice";
import { BrandUserSlice } from "../../components/stateContainers/BrandUsers/Slice";
import { CartSlice } from "../../components/stateContainers/Cart/Slice";
import { EventSlice } from "../../components/stateContainers/Events/Slice";
import { FooterSlice } from "../../components/stateContainers/Footer/Slice";
import { NavSLice } from "../../components/stateContainers/NavState/Slice";
import { OrderSlice } from "../../components/stateContainers/Order/Slice";
import { PostSlice } from "../../components/stateContainers/Posts/Slice";
import { ProductListSlice } from "../../components/stateContainers/ProductListState/Slice";
import { profileSlice } from "../../components/stateContainers/Profile/Slice";
import { SelectedProductSlice } from "../../components/stateContainers/SelectedProduct/Slice";
import { SliderSlice } from "../../components/stateContainers/Sliders/Slice";
import { spinnerSlice } from "../../components/stateContainers/Spinner/Slice";
import { TicketSlice } from "../../components/stateContainers/Tickets/Slice";
import { ToastSlice } from "../../components/stateContainers/Toast/Slice";
import { FavSlice } from "../../components/stateContainers/WishList/Slice";

export interface IRootState {
  navData: ReturnType<typeof NavSLice.reducer>;
  productListData: ReturnType<typeof ProductListSlice.reducer>;
  selectedProductData: ReturnType<typeof SelectedProductSlice.reducer>;
  cartData: ReturnType<typeof CartSlice.reducer>;
  profileData: ReturnType<typeof profileSlice.reducer>;
  favData: ReturnType<typeof FavSlice.reducer>;
  addressData: ReturnType<typeof AddressSlice.reducer>;
  sliderData: ReturnType<typeof SliderSlice.reducer>;
  orderData: ReturnType<typeof OrderSlice.reducer>;
  spinnerData: ReturnType<typeof spinnerSlice.reducer>;
  footerData: ReturnType<typeof FooterSlice.reducer>;
  toastData: ReturnType<typeof ToastSlice.reducer>;
  brandData: ReturnType<typeof BrandUserSlice.reducer>;
  eventData:ReturnType<typeof EventSlice.reducer>
  ticketdata:ReturnType<typeof TicketSlice.reducer>
  postdata:ReturnType<typeof PostSlice.reducer>
}

/**
 * Returns the list of reducers
 */
const createRootReducer: () => Reducer<IRootState> = (): Reducer<IRootState> =>
  combineReducers<IRootState>({
    navData: NavSLice.reducer,
    productListData: ProductListSlice.reducer,
    selectedProductData: SelectedProductSlice.reducer,
    cartData: CartSlice.reducer,
    profileData: profileSlice.reducer,
    favData: FavSlice.reducer,
    addressData: AddressSlice.reducer,
    sliderData: SliderSlice.reducer,
    orderData: OrderSlice.reducer,
    spinnerData: spinnerSlice.reducer,
    footerData: FooterSlice.reducer,
    toastData: ToastSlice.reducer,
    brandData: BrandUserSlice.reducer,
    eventData: EventSlice.reducer,
    ticketdata:TicketSlice.reducer,
    postdata:PostSlice.reducer
  });

export default createRootReducer;
