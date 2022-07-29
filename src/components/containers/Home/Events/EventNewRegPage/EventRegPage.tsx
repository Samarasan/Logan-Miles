import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IRootState } from "../../../../../redux/reducer/CombineReducer";
import { LoggedInProf, LoggedInUser } from "../../../../common/Script";
import Toast from "../../../../common/Toast/Toast";
import Footer from "../../../../Footer/Footer";
import Header from "../../../../header/Header.logic";
import { getEventList } from "../../../../stateContainers/Events/ThunkAction";
import "./EventReg.scss";

export default function EventRegPage() {
  const { eventData } = useSelector((state: IRootState) => state);
  const eventList: any = eventData && eventData.ourEvents;
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (eventList && eventList?.length < 1) {
      dispatch(getEventList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const notify = () => toast("Player Login Required");
  const [playertoast, setToast] = React.useState<any>("");
  const handlePostController = () => {
      setToast(<Toast openToast message="You'll Get a mail once approved" />);
  };
  React.useEffect(()=>{
 // eslint-disable-next-line react-hooks/exhaustive-deps
  },[playertoast])

  const history = useHistory();
  const [profileInfo, setProfileInfo] = React.useState<any>();
  const userDetails = {
    mobile: profileInfo?.phoneno,
    name: profileInfo?.fname,
    status: profileInfo?.status,
    mail: LoggedInProf,
  };

  React.useEffect(() => {
    const userProfile = async () => {
      await axios
        .get(
          "https://api.mememove.com:8443/Logan50miles/Players/get/Player/byEmailid?",
          {
            params: {
              emailId: LoggedInProf,
            },
          }
        )
        .then((res: any) => {
          setProfileInfo(res.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    };

    userProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const BookingStatus = async (event: any) => {
    const eventDetails = {
      date: event.date,
      details: event.details,
      eid: event.eid,
      entry: event.entry,
      title: event.title,
      url: event.url,
    };

    const data = { ...eventDetails, ...userDetails };
    await axios
      .post(
        "https://api.mememove.com:8443/Logan50miles/events/add/booking?",
        null,
        {
          params: data,
        }
      )
      .then((res: any) => {
        console.log(res, "res");
      })
      .catch((error: any) => {
        console.log(error);
      });

    history.push("/playersprofile");
  };

  return (
    <React.Fragment>
      <Header />
      <div className="eventRegContainer">
        <h2>Upcoming Rally-Registration <br />for Players</h2>
        {eventList.map((step: any) => {
          return (
            <div id="container">
              <div className="product-details">
                <h1>{step.details}</h1>
                <p className="evtDate" style={{color:"white"}}>{step.date}</p>
                <div className="control">
                  <button className="btn">
                    {/* <span className="price">$ {step.entry}</span> */}
                    {/* <Link
              to={{
                pathname: `/eventform/${step.eid}`,
                state: { step },
              }}
            > */}
                    { LoggedInUser ?(<span className="buy" onClick={notify} >
                    Register
                  </span>):(LoggedInProf&& profileInfo?.status === "APPROVED" ?(
                    <span className="buy" onClick={() => BookingStatus(step)}>
                      Register
                    </span>
                    ):( <span className="buy" onClick={handlePostController} >
                    Register
                  </span>))    }
                    {/* </Link> */}
                  </button>
                  {playertoast}
                  <ToastContainer />
                </div>
              </div>

              <div className="product-image">
                <img src={step.url} alt="eventimages" />

                <div className="info"></div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
}
