import React from "react";
import noUser from "../../../../assets/image/LOGAN/Player/nouser.svg";
import fethersend from "../../../../assets/image/LOGAN/Player/fethersend.svg";
import { LoggedInUser } from "../../../common/Script";
import Toast from "../../../common/Toast/Toast";
import "./comment.scss";
import { useComment } from "./useComments.hook";
export default function CommentDetails(props: any) {
  const postDetails = props.postDetails;
  const displayComments = props.ppid
  const[toast,setToast] = React.useState<any>()
  const { handleOnComments, commentOnSubmit } = useComment();
  const handleToast = () =>{
    setToast(<Toast openToast message="Only User can comment" />);
  }
  
  
  return (
    <React.Fragment>
  {LoggedInUser ? ( <div className="commentForm">
        <input
          type="text"
          className="userInputs"
          name="comment"
          placeholder="write a message"
          // value= {userComments.commentfeed}
          onChange={handleOnComments}
        />
        <img
          className="sendico"
          src={fethersend}
          alt="sendIcon"
          onClick={() => {
            commentOnSubmit(postDetails.ppid);
          }}
        />
      </div>
      ):( <div className="commentForm">
        <input
          type="text"
          className="userInputs"
          name="comment"
          placeholder="write a message"
          // value= {userComments.commentfeed}
          onChange={handleOnComments}
        />
        <img
          className="sendico"
          src={fethersend}
          alt="sendIcon"
          onClick={handleToast}
        />
        {toast}
      </div>)}   
      {displayComments?.map((cmt: any) => {
        return (
          <div className="commentDisplay">
            <img className="use-logo" src={noUser} alt="imguser"/>
            <div className="commentText">
              <h3>{cmt.username}</h3>
              <p>{cmt.comment}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
