import axios from "axios";
import React, { useEffect, useState } from "react";
import { Countries } from "../../../common/json/Countries";
import { LoggedInProf } from "../../../common/Script";
import {
  validateName,
} from "../../../UserAccount/Script";

export const useProfile = () => {
  const [profileData ,setProfiledata] = useState<any>()
  // const { profileData } = useSelector((state: IRootState) => state);
  // console.log(profileData);
  
  // const ProfileInfo = profileData && profileData.profileDetails.Profile;

  // const SubscriptionInfo = profileData && profileData.subcription;
  // const PlansInfo = profileData && profileData.plans;
  // const subsInfo = profileData && profileData.subcription;

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
    phoneno: profileData?.phoneno,
    fname: profileData?.fname,
    lname: profileData?.lname,
    pimg: profileData?.pimg,
    description: profileData?.description,
    fburl:profileData?.fburl,
    instaurl:profileData?.instaurl
  };

  const [state, setState] = React.useState(initialState);
  const [userError, setUserError] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>();
  const [visible, setVisible] = useState(false);
  const [fileSelected, setFileSelected] = React.useState<File | any>(
    profileData?.pimg
  );

  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    if (!fileList) return;
    setFileSelected(fileList[0]);
  };

  const uploadFile = function () {
    if (fileSelected) {
      const formData = new FormData();
      formData.append("image", fileSelected, fileSelected.name);
      return formData;
    }
  };

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
    
    if(name === "pimg"){
      const value = e.target.files[0];
      console.log(value,"val");
      
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

  const countries = Countries.map((item: any) => {
    return item.name;
  });

  const [selectedCountry, setSelectedCountry] = React.useState("");
  // const [selectedRegion, setSelectedRegion] = React.useState<
  //   string | undefined
  // >("");

  const handleCountrySelect = (e: any) => {
    e.preventDefault();
    setSelectedCountry(e.target.value);
  };

  // React.useEffect(() => {
  //   const regionList = Countries.find(
  //     (item: any, index) => item.name === selectedCountry
  //   );
  //   setSelectedRegion(regionList?.dialCode);
  // }, [selectedCountry]);

  const validate = () => {
    let fields = state;
    let errors = "";
    let formIsValid = true;

    const isValidFirstName = validateName(fields.fname, "fname");
    // const isValidLastName = validateName(fields.lname, "lname");
    // const isValidMobileNumber = validateMobileNumber(fields.uPhone);
    if (formIsValid && !isValidFirstName.formIsValid) {
      errors = isValidFirstName.error;
      formIsValid = false;
    // } else if (formIsValid && !isValidLastName.formIsValid) {
    //   errors = isValidLastName.error;
    //   formIsValid = false;
    // } else if (formIsValid && !isValidMobileNumber.formIsValid) {
    //   errors = isValidMobileNumber.error;
    //   formIsValid = false;
    // } else if (formIsValid && selectedRegion === undefined) {
    //   formIsValid = false;
    //   errors = "Please select your country";
    } else {
      errors = "";
      formIsValid = true;
    }
    setError(errors);
    return formIsValid;
  };

 
  

  const RegisterOnSubmit = async () => {
    let credentials = { ...state ,pid: profileData.pid,};
    let formData: any = new FormData();

    formData.append("file", credentials.pimg);
    if (formData) {
      await axios
        .put(
          `https://api.mememove.com:8443/Logan50miles/Players/update/player`,
          formData,
          { params: credentials }
        )
        .then((res: any) => {
          console.log(res, "res");
        })
        .catch((error: any) => {
          console.log(error);
        });
setVisible(true)
      // history.push("/confirm");
    }
  };

  const Validation = async (event: any) => {
    event.preventDefault();
    
    if (validate()) {
      await RegisterOnSubmit();
    }
  };
  return {
    state,
    error,
    visible,
    fileSelected,
    profileData,
    uploadFile,
    handleImageChange,
    handleOnChange,
    handleFocus,
    RegisterOnSubmit,
    Validation,
    // SubscriptionInfo,
    // PlansInfo,
    // subsInfo,
    selectedCountry,
    handleCountrySelect,
    countries,
  };
};
