import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../../redux/reducer/CombineReducer";

export const usePostData = (props :any) => {
     const imgData = props.playerId
  const [postData, setPostdata] = useState<any>();
  
  React.useEffect(() => {
    const playerProfile = async () => {
      await axios
        .get(
          "https://api.mememove.com:8443/Logan50miles/Players/get/all/feeds/byPlayerId",
          {
            params: { pid: 37 },
          }
        )
        .then((res: any) => {
          setPostdata(res.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    };

    playerProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postData]);

  return {
    postData,
  };
};



