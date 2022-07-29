import React from "react";
import contImg from "../../../../assets/image/LOGAN/IMAGES/contactImg.png";
import "../ServiceBanners/ServiceBanners.scss";
import skate from "../../../../assets/image/LOGAN/IMAGES/skate.png";
import x from "../../../../assets/image/LOGAN/IMAGES/x.svg";
import parking from "../../../../assets/image/LOGAN/IMAGES/parking.svg";
import hastag from "../../../../assets/image/LOGAN/IMAGES/hastag.svg";
import Box from "@mui/material/Box";
import { Grid, Paper } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { TextareaAutosize, Typography } from "@mui/material";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { Facebook, Instagram, Twitter, Youtube } from "../../../common/Icons";
import Maps from "./maps/maps";
import { cusEnq } from "../../../../constant/Types";
import axios from "axios";

export default function Contact() {
  const customerEnquiry: cusEnq = {
    firstname: "",
    lastname: "",
    emailid: "",
    phone: "",
    message: "",
  };
  const [enquiry, setEnquiry] = React.useState<cusEnq>(customerEnquiry);

  const EnquiryOnSubmit = () => {
    axios
      .post(
        `https://api.mememove.com:8443/Logan50miles/Contact/add/contact`,
        null,
        {
          params: {
            ...enquiry,
          },
        }
      )
      .then((res: any) => {
        if (res === 200) {
          console.log(res);
        }
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const [userError, setUserError] = React.useState<string>("");
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
  }));
  const socialIcons = [
    {
      icon: <Facebook />,
      href: "https://facebook.com/opheliamoonofficial?utm_medium=copy_link",
      name: "Facebook",
    },
    {
      icon: <Twitter />,
      href: "https://twitter.com/opheliamoonofficial?utm_medium=copy_link",
      name: "Twitter",
    },
    {
      icon: <Instagram />,
      href: "https://instagram.com/opheliamoonofficial?utm_medium=copy_link",
      name: "Instagram",
    },
    {
      icon: <Youtube />,
      href: "https://instagram.com/opheliamoonofficial?utm_medium=copy_link",
      name: "Youtube",
    },
  ];

  const getSocialIcons = () => {
    return socialIcons.map((item: any, index) => (
      <li key={item.name}>
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.name}
        >
          {item.icon}
        </a>
      </li>
    ));
  };

  const onEnq = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setEnquiry({ ...enquiry, [name]: value });
  };

  const onEnqFocusEvent = () => {
    setUserError("");
  };
  React.useEffect(() => {
    if (userError === "") {
      return;
    } else {
      const timer = setTimeout(() => {
        setUserError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [userError]);

  return (
    <div id="contact">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            style={{
              backgroundImage: `url(${contImg})`,
              // backgroundRepeat:"no-repeat",
              backgroundSize: "100% 100%",
              padding: " 60px 0px 90px 0px",
            }}
          >
            <Item>
              <div>
                <img src={skate} className="ctcicon" alt="skateimg" />
                <Typography variant="h5" color={"white"}>
                  {" "}
                  SKATEBOARD
                </Typography>
                <Typography variant="subtitle1" color={"white"}>
                  All types of skateboards are allowed.
                </Typography>
              </div>
            </Item>
            <Item
              style={{
                marginTop: "15px",
              }}
            >
              <div>
                <img src={hastag} className="ctcsvg" alt="hastag" />
                <Typography variant="h5" color={"white"}>
                  Box Office
                </Typography>
                <Typography variant="subtitle1" color={"white"}>
                  Buy tickets at our box office,
                  <br /> open seven days a week.
                </Typography>
              </div>
            </Item>
            <Item
              style={{
                marginTop: "15px",
              }}
            >
              <div>
                <img src={parking} className="ctcsvg" alt="parking" />
                <Typography variant="h5" color={"white"}>
                  Parking
                </Typography>
                <Typography variant="subtitle1" color={"white"}>
                  Free parking is available on site however,
                  <br /> space is limited.
                </Typography>
              </div>
            </Item>
            <Item
              style={{
                marginTop: "15px",
              }}
            >
              <div>
                <img src={x} className="ctcsvg" alt="x" />
                <Typography variant="h5" color={"white"}>
                  Coat Check
                </Typography>
                <Typography variant="subtitle1" color={"white"}>
                  Check your jacket, purse,
                  <br /> or merchandise for free.
                </Typography>
              </div>
            </Item>
          </Grid>
          <Grid
            item
            xs={8}
            style={{
              background: "#DF3311",
              padding: " 60px 0px 90px 0px",
            }}
          >
            <Item>
              {" "}
              <div className="contactwrapper">
                <h2>CONTACT US</h2>
              </div>
            </Item>
            <Grid container>
              <Grid
                item
                xs={4}
                style={{
                  color: "white",
                  paddingLeft: "50px",
                }}
              >
                {/* <div>
                  <Typography variant="h5">ADDRESS</Typography>
                </div>
                <div>
                  <Typography variant="body2">
                    435 stratton street <br />
                    Pike Ville WV25601
                  </Typography>
                </div> */}
                <br />
                <div>
                  <Typography variant="h5">EMAIL</Typography>
                </div>
                <div>
                  <Typography variant="body2">info@logan50miles.com</Typography>
                  <Typography variant="body2">contact@logan50miles.com</Typography>
                </div>
                <br />
                {/* <div>
                  <Typography variant="h5">TEL</Typography>
                </div>
                <div>
                  <Typography variant="body2">123-456-7890</Typography>
                </div> */}
                <br />
                <div className="menuSocial">
                  <ul className="menu-social">{getSocialIcons()}</ul>
                </div>
              </Grid>
              <Grid item xs={8}>
                {/* {inputs.map((item: registerInput) => {
                  return ( */}
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  autoComplete="off"
                >
                  <input
                    type="text"
                    id="1"
                    name="firstname"
                    // aria-label='Phone'
                    value={enquiry.firstname}
                    placeholder="First Name"
                    className="contct-form"
                    autoFocus={false}
                    onChange={onEnq}
                    onFocus={onEnqFocusEvent}
                  />
                  <input
                    type="text"
                    id="2"
                    name="lastname"
                    // aria-label='Phone'
                    value={enquiry.lastname}
                    placeholder="Last Name"
                    className="contct-form"
                    autoFocus={false}
                    onChange={onEnq}
                    onFocus={onEnqFocusEvent}
                  />
                </Box>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  autoComplete="off"
                >
                  <input
                    type="text"
                    id="3"
                    name="phone"
                    aria-label="Phone"
                    value={enquiry.phone}
                    placeholder="Phone"
                    className="contct-form"
                    autoFocus={false}
                    onChange={onEnq}
                    onFocus={onEnqFocusEvent}
                  />
                  <input
                    type="text"
                    id="4"
                    name="emailid"
                    aria-label="Email"
                    value={enquiry.emailid}
                    placeholder="Email"
                    className="contct-form"
                    autoFocus={false}
                    onChange={onEnq}
                    onFocus={onEnqFocusEvent}
                  />
                </Box>
                <Box component="form">
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={3}
                    name="message"
                    placeholder="Message"
                    style={{
                      width: 520,
                      height: 100,
                      border: "1px solid white",
                      marginLeft: "16px",
                      color: "white",
                      paddingTop: "14px",
                      paddingLeft: "11px",
                    }}
                    onChange={onEnq}
                    onFocus={onEnqFocusEvent}
                  />
                </Box>
                <TextButton
                  items="Submit"
                  className="edit-enquiry"
                  onClick={EnquiryOnSubmit as any}
                  isprimary={true}
                />
              </Grid>
            </Grid>
           <div>
              {/* <Maps /> */}
              </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
