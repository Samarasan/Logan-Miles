import React from "react";
import "./EventStyle.scss";
import { useSelector, useDispatch } from "react-redux";
import skate from "../../../../assets/image/skate.png";
import skatebg from "../../../../assets/image/LOGAN/IMAGES/bg.jpg";
// import skatebg from "../../../../assets/image/LOGAN/IMAGES/4006.jpg";
import skateMan from "../../../../assets/image/LOGAN/IMAGES/greensk.jpg";
import { getEventList } from "../../../stateContainers/Events/ThunkAction";
import "../ServiceBanners/ServiceBanners.scss";
import { IRootState } from "../../../../redux/reducer/CombineReducer";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import {  Typography} from "@mui/material";

export default function Events() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
  }));
  const dispatch = useDispatch();

  function monthName(mon: any) {
    return [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][mon - 1];
  }


  const { eventData } = useSelector((state: IRootState) => state);
  const ourEvent: any = eventData && eventData.ourEvents;
  // const sortEvent = [...ourEvent].sort(function (a: any, b: any) {
  //   return b.eid - a.eid;
  // });

  React.useEffect(() => {
    if (ourEvent && ourEvent.length < 1) {
      dispatch(getEventList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ourEvent]);

  const GridComponent = (props: any) => {
    localStorage.setItem('date' ,JSON.stringify(props));
    const [toggle, setToggle] = React.useState(true);

    const textToggle = (e: any) => {
      setToggle(false);
    };
    const mouseLeave = (e:any) =>{
      setToggle(true);
    }

    const { step } = props;
    return (
      <Grid
        container
        className="gridCon"
        style={{
          paddingLeft: "300px",
        }}
      >
        {" "}
        <Grid item xs={8} >
          <Typography
            color="white"
            style={{
              lineHeight: "80px",
              fontFamily: "JosefinSansRegular",
            }}
            onMouseEnter={textToggle} onMouseLeave={mouseLeave}
          >
            {toggle ? (
              <>
                <span className="dateSlice"> {step?.date?.slice(0, 2)} </span>{" "}
                {monthName(step?.date?.slice(3, 5))} {step?.date?.slice(8, 10)}
                <span className="eveDet"> {step?.details}</span>
              </>
            ) : (
              <span className="eveDet"> {step?.details}  </span>
            )}
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            paddingLeft: "30px",
            paddingTop: "22px",
          }}
        >
          {/* <Typography
            color="white"
            style={{
              fontFamily: "JosefinSansRegular",
            }}
          >
            <Link
              to={{
                pathname: `/eventform/${step.eid}`,
                state: { step },
              }}
            >
              <span className="booking">Register</span>
            </Link>
          </Typography> */}
        </Grid>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            style={{
              backgroundImage: `url(${skatebg})`,
              padding: " 60px 0px 90px 0px",
            }}
          >
            <Item>
              <img src={skateMan} className="skateImg" alt="skate" />
            </Item>
          </Grid>
          <Grid
            item
            xs={8}
            style={{
              background: "#221333",
              padding: " 20px 0px 90px 0px",
            }}
          >
            <Item>
              {" "}
              <div className="hp_text-wrapper mt">
                <img src={skate} alt="skateboard" />
                <h2 className="u-h1">
                  UPCOMING   RALLY
                </h2>
                {/* <h2 className="playerlogin">Professional's Login</h2> */}
                <p style={{color:"white"}}>Players can register their Rally here </p>
              </div>
            </Item>

            {ourEvent?.map((step: any, index: number) => {
              return (
                <>
                  <GridComponent step={step} key={index} />
                </>
              );
            })}
            <Link to = "/eventreg"><div className="Registerbtn">
<span>Register</span>
          </div></Link>
          </Grid>
         
        </Grid>
      </Box>

     
    </React.Fragment>

    // <div className="wrapper">
    //   <section className="events-wrapper">
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         bgcolor: "#ffffff",
    //         boxShadow:
    //           "0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)",
    //         borderRadius: "6px",
    //         marginTop: "-85px",
    //       }}
    //     >
    //       <div className="event-container">
    //         <h2 className="event-header-h1">50-Miles Skateboarding Rally</h2>
    //         <span className="event-header-line"></span>
    //         <Box sx={{ maxWidth: "90%", flexGrow: 1, margin: "0 auto" }}>
    //           {ourEvent[0] === undefined
    //             ? ""
    //             : ourEvent?.map((step: any, index: number) => (
    //                 <>
    //                   <div className="hp_image_with_text">
    //                     <div className="hp_image-wrapper">
    //                       <img
    //                         className="hp_image-wrapper-vdo"
    //                         alt="event"
    //                         src={step.url}
    //                       />
    //                     </div>
    //                     <div className="hp_text-wrapper mt">
    //                       <h2 className="u-h1">{step.title}</h2>
    //                       <h3>Date : {step.date}</h3>

    //                       <p>{step.details}</p>
    //                     </div>
    //                   </div>
    //                   <div className="event_reg_head_hero">
    //                     <p>Register Event</p>
    //                     <div className="event-list">
    //                       <Link
    //                         to={{ pathname: "/eventform", state: { step } }}
    //                       >
    //                         <span>
    //                           Join Fee : 299 dollars before may 30th, after it
    //                           will be 499 dollars.
    //                         </span>{" "}
    //                         <button>Register Now</button>
    //                       </Link>
    //                     </div>
    //                     <div className="event_reg_sub_hero">
    //                       <p>
    //                         Location :<span>Logan WV </span>
    //                       </p>
    //                       <section>
    //                         1) from Charleston to Logan <br />
    //                         <br />
    //                         <span> 2) hold at chief logan state park </span>
    //                       </section>
    //                     </div>
    //                     <div className="event_reg_sub_hero">
    //                       <p>Event Details</p>
    //                       <section>
    //                         17th 12pm hosting events , music and lunch Each 3-5
    //                         miles set up support desk with water, medical
    //                         support team . Bike and police car , medical car
    //                         will be follow the events along the road .
    //                       </section>
    //                     </div>
    //                     <div className="event_reg_sub_hero">
    //                       <p>Schedule</p>
    //                       <section>
    //                         Sept 15, 16.17th, open for arrival , both at
    //                         charlston hotel and Logan hotel . Each day allow
    //                         test at several hours window along the road with
    //                         police support .
    //                       </section>
    //                     </div>
    //                     <div className="event_reg_sub_hero">
    //                       <p>Rewards</p>
    //                       <section>
    //                         <ul>
    //                           <li>
    //                             <img
    //                               src={first}
    //                               alt="1st"
    //                               style={{ width: "28px" }}
    //                             />{" "}
    //                             <span> 5000 Dollars</span>
    //                           </li>
    //                           <li>
    //                             <img
    //                               src={second}
    //                               alt="1st"
    //                               style={{ width: "28px" }}
    //                             />{" "}
    //                             <span> 2500 Dollars </span>
    //                           </li>
    //                           <li>
    //                             <img
    //                               src={third}
    //                               alt="1st"
    //                               style={{ width: "28px" }}
    //                             />{" "}
    //                             <span> 1000 Dollars</span>
    //                           </li>
    //                         </ul>
    //                       </section>
    //                     </div>
    //                   </div>
    //                 </>
    //               ))}
    //         </Box>
    //       </div>
    //     </Box>
    //   </section>
    // </div>
  );
}
