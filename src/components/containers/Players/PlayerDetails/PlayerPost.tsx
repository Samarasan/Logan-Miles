import React from "react";
import thumbs from "../../../../assets/image/LOGAN/Player/thumbsup.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import messageicon from "../../../../assets/image/LOGAN/Player/messageicon.svg";
import heart from "../../../../assets/image/LOGAN/Player/heart.png";
import redheart from "../../../../assets/image/LOGAN/Player/redheart.png";
import { useComment } from "./useComments.hook";
import { Accordion } from "./Accordian/Accordian";
import CommentDetails from "./CommentDetails";
import "./PlayerDetails.scss";
import { useSelector } from "react-redux";
import {  IRootState } from "../../../../redux/reducer/CombineReducer";
import axios from "axios";
import { LoggedInUser } from "../../../common/Script";
export default function PlayerPost(props: any) {
  const { handleLikeClick, allLikes ,likesNo} = useComment();
  //const likefeed: any = localStorage.getItem("likefeed");
  // const value = JSON.parse(likefeed);
  // const getLikes: any = localStorage.getItem("getLike");
  const { postdata } = useSelector((state: IRootState) => state);
  const likecount = postdata && postdata.userLikesCount
  
  const user :any = localStorage.getItem("userData");
  const userData = JSON.parse(user)
  //each iteration
  const item = props.item;
  // Fav Button
//  const FavIconName = value === 200 ? "Liked" : "Like";
 React.useEffect(()=>{
    
// eslint-disable-next-line react-hooks/exhaustive-deps
 },[likecount])
  const [displayComments, setDisplayComments] = React.useState<any>([]);
  const commentData = props.commentData;
  const notify = () => toast("only Members can like");
  const getComments = async (click: any) => {
    await axios
      .get(
        "https://api.mememove.com:8443/Logan50miles/Players/get/all/comment/feed",
        {
          params: { id: click },
        }
      )
      .then((res: any) => {
        setDisplayComments(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <div className="f-card">
      <div className="header">
        <div className="options">
          <i className="fa fa-chevron-down"></i>
        </div>
        <img className="co-logo" src={commentData.item.pimg} alt="commentimg"/>
        <div className="co-name">
        {commentData.item.fname}
        </div>
      </div>

      <div className="reference">
        <img className="reference-thumb" src={item.feedurl}  alt="feed"/>
        <div className="reference-content">
          <div className="reference-title">{item.description}</div>
          {/* <div className="reference-font">placeholder.it</div> */}
        </div>
      </div>
      <div className="social">
        <div className="social-content"></div>

        <div className="social-buttons">
          <div className="likes">
            {LoggedInUser ? (<button
              className="ProductWishListButtonlike"
              onClick={() => {
                handleLikeClick(item.ppid);
              }}
              //  disabled={props.item.ppid&& disableFav}
            >
              {allLikes?.map((likes:any) => {
                if (likes.ppid === item.ppid && likes.type === "liked") {
                 return <img className="heart" src={redheart} alt="heart" />;
                } else {
                 return <img className="heart" src={heart} alt="heart" />;
                }
              })}

              <span>Like</span>
            </button>) :(<><button
            onClick={notify}
              className="ProductWishListButtonlike"
              //  disabled={props.item.ppid&& disableFav}
            >
              {allLikes?.map((likes:any) => {
                if (likes.ppid === item.ppid && likes.type === "liked") {
                 return <img className="heart" src={redheart} alt="heart" />;
                } else {
                 return <img className="heart" src={heart} alt="heart" />;
                }
              })}

              <span>Like</span>
            </button><ToastContainer /></>)}
            
            {allLikes?.map((likes:any) => {
                if ( likes.userId === userData.userid && likes.type === "liked") {
                 return <span className="likeCount">({likesNo})</span>;
                } else {
                 return "";
                }
              })}
            
            <img src={thumbs} alt="thumbsup" />
          </div>
          <div
            className="commentSection"
            onClick={() => {
              getComments(item.ppid);
            }}
          >
            <img className="msgIcon" src={messageicon} alt="messageIcon" />{" "}
            <Accordion
              title="Comments"
              childComp={
                <CommentDetails postDetails={item} ppid={displayComments} />
              }
              ppid={item}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
