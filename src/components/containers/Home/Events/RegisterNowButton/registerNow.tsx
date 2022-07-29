import Button from "@mui/material/Button";
import { useEventContext } from "../EventContext";
import { onClick } from "../../../../../constant/Types";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../../Events/EventStyle.scss";
import { LoggedInProf } from "../../../../common/Script";
import React from "react";
export default function RegisterNow() {
  const history = useHistory();
  const [profileInfo, setProfileInfo] = React.useState<any>();
  const { eventDetails, registrationDetails, validateUser } = useEventContext();

  let mobile: any = profileInfo?.phoneno;
  
  React.useEffect(() => {
    const userProfile = async () => {
      await axios
        .get("https://api.mememove.com:8443/Logan50miles/Players/get/Player/byEmailid?", {
          params: {
            emailId: LoggedInProf,
          },
        })
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

  const BookingStatus = async () => {
    const data = { ...eventDetails, ...registrationDetails, mobile: mobile };
    let body: any = {};
    body = data;

    let formData: any = new FormData();

    formData.append("file", data.idurl);
    formData.append("file1", data.videourl);

    // body.file = formData;

    if (formData) {
      await axios
        .post(
          `https://api.mememove.com:8443/Logan50miles/events/add/booking`,
          formData,
          { params: body }
        )
        .then((res: any) => {
          console.log(res, "res");
        })
        .catch((error: any) => {
          console.log(error);
        });

      //dispatch(AddBooking(formData));
      history.push("/confirm");
    }
  };
  const Validation = async (event: onClick) => {
    event.preventDefault();
    if (validateUser()) {
      await BookingStatus();
    }
  };

  return (
    <>
      {" "}
      {LoggedInProf ? (
        <Button variant="contained" onClick={Validation}>
          Register Now
        </Button>
      ) : (
        <div className="register-valid">Professional Login Required</div>
      )}
    </>
  );
}

