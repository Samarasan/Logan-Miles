import React from "react";
import "./comment.scss";
import axios from "axios";
import { LoggedInUser } from "../../../common/Script";
import PlayerPost from "./PlayerPost";
export default function UserComments(props: any) {

  const commentData = props.playerId;
  const [postData, setPostdata] = React.useState<any>([]);
  const [userData, setUserData] = React.useState<any>("");


  React.useEffect(() => {
    const playerProfile = async () => {
      await axios
        .get(
          "https://api.mememove.com:8443/Logan50miles/Players/get/all/feeds/byPlayerId",
          {
            params: { pid: commentData?.item?.pid },
          }
        )
        .then((res: any) => {
          setPostdata(res.data);
          localStorage.setItem("like", JSON.stringify(res.data))
        })
        .catch((error: any) => {
          console.log(error);
        });
    };

    playerProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React.useEffect(() => {
  //   const UserComments = async () => {
  //     await axios
  //       .get(
  //         "https://api.mememove.com:8443/Logan50miles/Players/get/all/comment/profile",
  //         {
  //           params: {
  //             id: commentData?.item?.pid,
  //           },
  //         }
  //       )
  //       .then((res: any) => {
  //         setCommentfeed(res.data);
  //       })
  //       .catch((error: any) => {
  //         console.log(error);
  //       });
  //   };

  //   UserComments();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  React.useEffect(() => {
    const userProfile = async () => {
      await axios
        .get(
          "https://api.mememove.com:8443/Logan50miles/user/get/user/byEmail?",
          {
            params: {
              email: LoggedInUser,
            },
          }
        )
        .then((res: any) => {
          setUserData(res.data);
          localStorage.setItem("comments", JSON.stringify(res.data))
        })
        .catch((error: any) => {
          console.log(error);
        });
    };

    userProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);



  return (
    <React.Fragment>
        {postData.map((item:any)=>{
            return(
                <>
                <PlayerPost item = {item} commentData = {commentData} allData = {postData}/>
                </>
         )
        })}
    </React.Fragment>
  );
}
