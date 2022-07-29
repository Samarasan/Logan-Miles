import React from "react";
import "./App.scss";
import { NavContextProvider } from "./react-context/NavContext";
import { ValidationContextProvider } from "./react-context/ValidationContext";
import { Layout } from "./Layout/Layout";
import { getStore } from "./redux/store/AppStore";
import { StateAndRouterProvider } from "./StateAndRouterProvider";
import { EventContextProvider } from "./components/containers/Home/Events/EventContext";
import { ProfValidationContextProvider } from "./react-context/ProfessionalValidationContext";
// import { persistor } from "./redux/store/AppStore";

export const App: React.FC = () => {
  const store = getStore();
 

  return (
    <StateAndRouterProvider store={store} >
      <ProfValidationContextProvider>
      <ValidationContextProvider>
        <NavContextProvider>
          <EventContextProvider>
            <Layout />
          </EventContextProvider>
        </NavContextProvider>
      </ValidationContextProvider>
      </ProfValidationContextProvider>
    </StateAndRouterProvider>
  );
};
