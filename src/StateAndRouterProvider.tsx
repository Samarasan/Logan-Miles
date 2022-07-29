import * as React from "react";
import { Provider } from "react-redux";
import { ReactChild, ReactPortal } from "react";
import { Store } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import Spinner from "./components/common/Spinner/Spinner";
import { Persistor } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

type Children = ReactChild | Array<Children> | ReactPortal;

export interface IChildrenProp {
  children: Children;
}

export interface IElementProps {
  className: string;
}

interface IProps extends IChildrenProp {
  store: Store;
  // persistor:Persistor;
}

/**
 * Responsible for rendering the IntlProvider component
 */
const StateAndRouterProvider: React.FC<IProps> = (props: IProps) => {
  return (
    <React.Suspense fallback={Spinner}>
      <Provider store={props.store}>
        {/* <PersistGate persistor={props.persistor}> */}
        <BrowserRouter>{props.children}</BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
    </React.Suspense>
  );
};

export { StateAndRouterProvider };
