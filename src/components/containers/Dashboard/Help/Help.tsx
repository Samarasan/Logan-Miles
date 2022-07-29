 import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { onClick } from "../../../../constant/Types";
// import { UpdateProfileservice } from "../../../../utils/API";
//  import {  LoggedInUser } from "../../../common/Script";
// import { addNotification } from "../../../stateContainers/Toast/Slice";
// import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
// import { SideMenu } from "../Layout/SideMenu/SideMenu";
// import "./Help.scss";

// function Help() {
//   const [textAreaValue, setTextAreaValue] = useState("");

//   const dispatch = useDispatch();

//   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setTextAreaValue(event.target.value);
//   };

//   const helpNotify = (message: string) => {
//     dispatch(
//       addNotification({
//         isOpen: true,
//         text: message,
//       })
//     );
//     setTimeout(() => {
//       dispatch(addNotification({ isOpen: false, text: "" }));
//     }, 1000);
//   };

//   const handleSubmit = async (event: onClick) => {
//     event.preventDefault();

//     if (textAreaValue) {
//       try {
//         await UpdateProfileservice.help({
//           message: textAreaValue,
//           email: LoggedInUser as string,
//           id: `#${generateRandomId()}`,
//         });
//         helpNotify("Sent successfully");
//       } catch (error) {
//         console.log(error);
//         helpNotify("Something Went Wrong, Please Contact support team");
//       }
//     } else {
//       helpNotify("Enter Something...");
//     }
//   };

//   return (
//     <>
//       <div className="column main">
//         <div className="block">
//           <div className="block-title u-h3">Contact Us</div>

//           <div className="help-container">
//             <textarea
//               id="subject"
//               name="subject"
//               placeholder="how Can I help you ?"
//               value={textAreaValue}
//               rows={5}
//               onChange={handleChange}
//               required
//             ></textarea>
//             <TextButton
//               isprimary
//               items={"Submit"}
//               onClick={handleSubmit as any}
//             />
//           </div>
//         </div>
//       </div>
//       <SideMenu />
//     </>
//   );
// }

// export default Help;
