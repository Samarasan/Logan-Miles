import React from "react";
import { onChange } from "../../constant/Types";
// import { useDispatch } from "react-redux";
import "./Footer.scss";
import { MailIcon } from "./FooterIcons";
import { SocialIcons } from "./SocialIcons";

function Footer() {
  // const [count, setCount] = React.useState<number | undefined>(undefined);
  // const [openSubscribe, setOpenSubscribe] = React.useState<boolean>(false);
   const [email, setEmail] = React.useState<string>("");

  // const dispatch = useDispatch();

  const handleOnChange = (e: onChange) => {
    e.preventDefault();
    setEmail(e.target.value);
  };


  const getSubscribe = () => {
    // const isOpen = openSubscribe ? "is-open" : "";

    return (
      <div className="grid__item">

        <div
          className={`collapsible-content collapsible-content--small `}
        >
          <div className="collapsible-content__inner">
            <div className="footer__collapsible">
              <p>STAY UP TO DATE</p>
              <p style={{fontSize:'16px'}}>Sign up to get our newsletter for all the latest news, shows, and events</p> 
              <form>
                <div className="footer__newsletter">
                  <input
                    type="email"
                    placeholder="Enter your email"  
                    name="contact[email]"
                    className="footer__newsletter-input"
                    value={email}
                     onChange={handleOnChange}
                  />
                  <button
                    type="submit"
                    className="footer__newsletter-btn"
                    name="commit"
                    aria-label="Subscribe"
                    // onClick={handleSubscribe}
                  >
                    <MailIcon />
                    <span className="footer__newsletter-btn-label">
                      Subscribe
                    </span>
                  </button>
                </div>
              </form>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <footer className="site-footer">
      <div className="page-width">
        {/* <FooterTopBar /> */}

        <div className="grid">
          {/* {getServices()} */}
          {getSubscribe()}
        </div>
        {/* <div className="footer__small-text u-h5">
          <div>
            Copyright{" "}
            <a href="https://meme-global.com" className="footer__link">
              © MeMe Worldwide Inc
            </a>
            , All Rights Reserved.
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
