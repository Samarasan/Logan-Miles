import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { getLikecountId } from "../../../stateContainers/Posts/ThunkActions";
export const useComment = () => {
  const initialState = {
    comment: "",
  };
  const [open, setOpen] = React.useState(false);
  const [userComments, setUserComments] = React.useState<any>(initialState);
  const [likesNo, setLikes] = React.useState<any>(7);
  const [allLikes, setAllLikes] = React.useState<any>();
  const [intialLikes, setIntiallikes] = React.useState<any>(likesNo?.like);
  const userdata: any = localStorage.getItem("comments");
  const userDetails = JSON.parse(userdata);
  const dispatch = useDispatch()
  React.useEffect(() => {
    setIntiallikes(likesNo?.like);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intialLikes]);
  const handleLikeClick = async (e: any) => {
    let likecouts  = {
        ppid: e
    }
    let likeData = {
      ppid: e,
      type: "liked",
      userid: userDetails.userid,
    };
    await axios
      .post(
        `https://api.mememove.com:8443/Logan50miles/Players/update/feed/comment/like`,
        null,
        { params: likeData }
      )
      .then((res: any) => {
        console.log(res, "res");
       localStorage.setItem("likefeed",JSON.stringify(res.data))
        dispatch(getLikecountId(likecouts))
        getLikes(e)
       getAllLikes()
      })
      .catch((error: any) => {
        console.log(error);
      });
    // window.location.reload();
  };

  //comment values

  const handleOnComments = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserComments({ ...userComments, [name]: value });
  };

  const commentOnSubmit = async (e: any) => {
    let credentials = {
      ...userComments,
      ppid: e,
      userid: userDetails.userid,
      username: userDetails.fname,
    };
    await axios
      .post(
        `https://api.mememove.com:8443/Logan50miles/Players/add/feed/comment`,
        null,
        { params: credentials }
      )
      .then((res: any) => {
        console.log(res, "res");
      })
      .catch((error: any) => {
        console.log(error);
      });
    window.location.reload();
  };
//
// const handleSubmit = (e:any) =>{
// e.preventDefault()
// e.target.reset()
// }

  //getComments

  const handleClick = (e: any) => {
    setOpen(!open);
    // getComments();
  };

  //getLikes

  const getLikes = async (click: any) => {
    await axios
      .get("https://api.mememove.com:8443/Logan50miles/Players/get/like/byId", {
        params: { ppid: click },
      })
      .then((res: any) => {
        setLikes(res.data);
        localStorage.setItem("getLike", JSON.stringify(res.data))
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  //get all likes 
 
    const getAllLikes = async () => {
        await axios
          .get("https://api.mememove.com:8443/Logan50miles/Players/get/all/likes")
          .then((res: any) => {
            setAllLikes(res.data)
          })
          .catch((error: any) => {
            console.log(error);
          });
      };
 
 React.useEffect(()=>{
    getAllLikes()
// eslint-disable-next-line react-hooks/exhaustive-deps
 },[allLikes])

  return {
    handleLikeClick,
    handleOnComments,
    allLikes,
    // displayComments,
    userComments,
    open,
    likesNo,
    intialLikes,
    // handleSubmit,
    handleClick,
    commentOnSubmit,
  };
};
