import { applyMiddleware, compose, createStore, Store } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import createRootReducer, { IRootState } from "../reducer/CombineReducer";

export const composeStore = (): any => compose(applyMiddleware(thunk));

export const getStore = (): Store<IRootState> => {
  const store = createStore(createRootReducer(), composeStore());
  return store;
};







// import { applyMiddleware, compose, createStore, Store } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
//  import logger from "redux-logger"
// import storage from "redux-persist/lib/storage";
// import { configureStore } from "@reduxjs/toolkit";
// import createRootReducer, { IRootState } from "../reducer/CombineReducer";
// import { persistReducer, persistStore } from "redux-persist";
// import { PostSlice } from "../../components/stateContainers/Posts/Slice";
// export const composeStore = (): any => compose(applyMiddleware(thunk));

// const persistConfig = {
//   key: "root",
//   storage,
//   // blacklist: ["modal"],
//   whitelist: [PostSlice.name],
// };
// const persistedReducer = persistReducer(persistConfig, createRootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(logger),
//   devTools: process.env.NODE_ENV !== "production",
// });   

// export const persistor = persistStore(store);

// export const getStore = (): Store<IRootState> => {
//   const store = createStore(createRootReducer(), composeStore());
//   return store;
// };
