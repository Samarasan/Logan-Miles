import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../header/Header.logic";
import { useLocation } from "react-router-dom";
import { PrivacyPolicy } from "./PrivacyPolicy";
import {ShippingPolicy } from "./Shippingpolicy"
import { TermsAndConditions } from "./TermsAndConditions";
import { AboutUs } from "./AboutUs";
import "./Policies.scss";
import TermsOfService from "./TermsOfService";
import Warranty from "./Warranty";

export const Policies = () => {
  function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  let name = query.get("name");

  const getComponent = (name: string) => {
    switch (name) {
      case "AboutUs":
        return <AboutUs />;
      case "PrivacyPolicy":
        return <PrivacyPolicy />;
        case "ShippingPolicy":
          return <ShippingPolicy />;
      case "TermsAndConitions":
        return <TermsAndConditions />;
      case "TermsOfService":
        return <TermsOfService />;
      case "Warranty":
        return <Warranty />;
      default:
        return <AboutUs />;
    }
  };

  return (
    <section>
      <Header />
      <div className="policy">{getComponent(name as string)}</div>
      <Footer />
    </section>
  );
};
