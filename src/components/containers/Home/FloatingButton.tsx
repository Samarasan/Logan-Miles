import React from "react";
import { Link } from "react-router-dom";
import { LoggedInProf } from "../../common/Script";
import Toast from "../../common/Toast/Toast";
import "./FloatingButton.scss";
export default function FloatingButton() {
  const [toast, setToast] = React.useState<any>("");
    const handlePostController = () => {
        setToast(<Toast openToast message="Only Professionals Can add posts" />);
    };
  return (
    <div className="floating-container">
      {LoggedInProf ? (
        <Link to="/playersprofile">
          <div className="floating-button">Add Posts</div>
        </Link>
      ) : (<>
        <div className="floating-button" style={{display:"none"}}>Add Posts</div>{toast}
        </>
      )}

      {/* {verifyUser ? (  <Link to="/playersprofile">
          <div className="floating-button" style={{display:"none"}}>
            Add Posts
          </div>
        </Link>) : (  <Link to="/playersprofile">
          <div className="floating-button">
            Add Posts
          </div>
        </Link>)} */}
      {/* <div className="element-container">
        <a href="google.com">
          {" "}
          <span className="float-element tooltip-left">
            <i className="material-icons">phone</i>
          </span>
        </a>

        <span className="float-element">
          <i className="material-icons">email</i>
        </span>
        <span className="float-element">
          <i className="material-icons">chat</i>
        </span>
      </div> */}
    </div>
  );
}
