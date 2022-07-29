import { LoggedInUser } from "../common/Script";

export const footerLinks = [
  {
    head: "INFORMATION",
    text: [
      {
        head: "ABOUT US",
        path: `/policy?name=AboutUs`,
      },
      {
        head: "PRIVACY POLICY",
        path: "/policy?name=PrivacyPolicy",
      },
      {
        head: "SHIPPING POLICY",
        path: "/policy?name=ShippingPolicy",
      },

      {
        head: "TERMS & CONDITIONS",
        path: "/policy?name=TermsAndConitions",
      },
    ],
  },
  {
    head: "MY ACCOUNT",
    text: [
      {
        head: "MY ACCOUNT",
        path: LoggedInUser ? "/myprofile" : "/login",
      },
      {
        head: "MY CART",
        path: "/cart",
      },

      {
        head: "WISH LIST",
        path: "/wishlist",
      },
    ],
  },
  {
    head: "SERVICES",
    text: [
      {
        head: "SHIPPING SERVICE",
        path: "/policy?name=ShippingSerivice",
      },

      {
        head: "TERMS OF SERVICE",
        path: "/policy?name=TermsOfService",
      },

      {
        head: "WARRANTY",
        path: "/policy?name=Warranty",
      },
    ],
  },
];
