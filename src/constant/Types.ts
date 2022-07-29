export type onChange = React.ChangeEvent<HTMLInputElement>;
export type onClick = React.MouseEvent<HTMLElement>;

export type registerUser = {
  fname: string;
  lname: string;
  email: string;
  uPhone: string;
  password: string;
  address:string;
  apiError?: string;
  userReferral: string;
};
export type profregisterUser = {
  fname: string;
  lname: string;
  email: string;
  phoneno: string;
  pimg:string;
  password: string;
  description:string;
  userReferral: string;
  imgproof:string;
  videoproof:string;
  state:string;
  country:string;
};
export type cusEnq ={
  firstname:string;
  lastname:string;
  emailid:string;
  phone:string;
  message:string;
}

export type registerInput = {
  id: number;
  name: string;
  type: string;
  text: string;
  icon:any;
  value: string | undefined | any;
};

export type IHeaders = {
  id: number;
  name: string;
};

export type ForgotPwd = {
  email: string;
  apiError?: "";
};

export type loginState = {
  username: string;
  password: string;
  apiError?: string;
};

export type OTP = {
  OTP: string;
  apiError?: string;
};

export type resetType = {
  password: string;
  cpassword: string;
  equalityError?: string;
  apiError?: string;
};
