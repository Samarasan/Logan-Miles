import axios from "axios";
import React, { useEffect, useState } from "react";
import { LoggedInProf } from "../../../../common/Script";

export const usePost = () => {
  const [profileData ,setProfiledata] = useState<any>()
const [isSelected,setIsSelected] = useState(false)
  useEffect(() => {
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
          setProfiledata(res.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    };

    userProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const initialState = {
    feedurl: "",
    description:"",
  };

  const [state, setState] = React.useState(initialState);
  const[displayFile ,setDisplayFile]=React.useState<any>();
  const [userError, setUserError] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>();
  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
    if (!error) {
      setVisible(false);
      return;
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error]);

  const handleOnChange = (e: any) => {
    
    const name = e.target.name;
    
    if(name === "feedurl"){
      const value = e.target.files[0];
      setIsSelected(true)
      setDisplayFile(e.target.files[0])
      setState({ ...state, [name]: value });
      setVisible(false);
       setError(null);
    }else{
      const value = e.target.value;
      setState({ ...state, [name]: value });
       setVisible(false);
       setError(null);
    }
    
  };
  const handleFocus = () =>{
    setUserError("");
  }
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

  

  const registerOnSubmit = async (e: any) => {
    e.preventDefault();
    let credentials = { ...state , "pid": profileData.pid,};

    let formData: any = new FormData();

    formData.append("feed", credentials.feedurl);
    setState(formData)
    if (formData) {
      await axios
        .post(
          `https://api.mememove.com:8443/Logan50miles/Players/add/profile/feed`,
          formData,
          { params: credentials }
        )
        .then((res: any) => {
          console.log(res, "res");
        })
        .catch((error: any) => {
          console.log(error);
        });
        
       window.location.reload()
    }
  };

  return {
    state,
    error,
    visible,
    profileData,
    handleOnChange,
    handleFocus,
    isSelected,
    displayFile,
    registerOnSubmit,
  };
};
