import React from "react";
// import { useSelector } from "react-redux";
import { useNavInfoContext } from "../../../react-context/NavContext";
// import { IRootState } from "../../../redux/reducer/CombineReducer";
import { Facebook, Instagram, ShowMore, Twitter } from "../../common/Icons";
import { Drawer } from "../../ui-kit/Drawer/Drawer";
import { productType, useNav } from "../useNav.hook";
import "./LeftDrawer.scss";
import { LoggedInUser } from "../../common/Script";
import axios from "axios";
import { MyCart, MyWishList } from "./LeftDrawerIcons";
import { Link } from "react-router-dom";

interface IProps {
  productList: productType[];
}

export const LeftDrawer: React.FC<IProps> = (props: IProps) => {
  const { productList } = props;
  const { MenuIconClick } = useNavInfoContext();

  const { MenuItemHandleClick } = useNav();
  // const { MenuItemHandleClick, SubMenuHandleClick } =
  //   useNav();

  // const { profileData } = useSelector((state: IRootState) => state);
  // const personDetails = profileData && profileData.profileDetails.Profile;
  // const { fname } = personDetails;
  const [profileInfo, setProfileInfo] = React.useState<any>();
  // const [activeIndex, setActiveIndex] = React.useState<null | number>(null);
  // const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const userProfile = async () => {
      await axios
        .get(
          "https://api.mememove.com:8443/Logan50miles/user/get/user/byEmail",
          {
            params: {
              email: LoggedInUser,
            },
          }
        )
        .then((res: any) => {
          setProfileInfo(res.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    };
    userProfile();
  }, []);

  // const populateSubMenu = (index: number) => {
  //   setActiveIndex(index);
  //   setOpen(!open);
  // };

  // const getList = (product: productType, index: number) => {
  //   const getSubCategory = () => {
  //     return (
  //       <ul className="inner-submenu u-h6">
  //         {product.sCategory.map((item: any, index: number) => {
  //           return (
  //             <li
  //               onClick={() => {
  //                 SubMenuHandleClick(product.mCategory, item);
  //               }}
  //             >
  //               <span>{item}</span>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     );
  //   };
  // }
  //   return (
  //     <li>
  //       <div className="link-category u-h6">
  //         <span onClick={() => MenuItemHandleClick(product.mCategory)}>
  //           {product.mCategory}
  //         </span>
  //         <span onClick={() => populateSubMenu(index)}>
  //           <ShowMore classname="icon-arrow" />
  //         </span>
  //       </div>
  //       {index === activeIndex &&
  //         open &&
  //         product.sCategory.length > 0 &&
  //         getSubCategory()}
  //     </li>
  //   );
  // };

  const RouteUrl = profileInfo?.fname ? "/myProfile" : "/logincard";

  // const GreetingText = fname ? `Hello ${profileInfo?.fname}!` : `Hello there!`;

  const socialIcons = [
    {
      icon: <Facebook />,
      href: "https://facebook.com/opheliamoonofficial?utm_medium=copy_link",
      name: "Facebook",
    },
    {
      icon: <Twitter />,
      href: "https://twitter.com/opheliamoonofficial?utm_medium=copy_link",
      name: "Twitter",
    },
    {
      icon: <Instagram />,
      href: "https://instagram.com/opheliamoonofficial?utm_medium=copy_link",
      name: "Instagram",
    },
  ];

  const getSocialIcons = () => {
    return socialIcons.map((item: any, index) => (
      <li key={item.name}>
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.name}
        >
          {item.icon}
        </a>
      </li>
    ));
  };

  const Body = () => {
    return (
      <div className="menu-drawer-content">
        <div className="menu-drawer-main" data-scrollable="">
          <div className="user-account">
            {/* <p className="user-account-name">{GreetingText}</p> */}
            {/* {uPhone && <p className="user-account-no">9498422064</p>} */}
          </div>
          <ul className="menu-linklist">
            <ul className="inner-submenu u-h6">
              <li>
                <span>
                  <Link to="/"> HOME </Link>
                </span>
              </li>
              <Link to="/eventreg">
                {" "}
                <li>
                  <span>EVENTS</span>
                </li>
              </Link>
              <Link to="/players">
                {" "}
                <li>
                  <span>PLAYERS</span>
                </li>
              </Link>
              <Link to="/ourevent">
                {" "}
                <li>
                  <span>TICKETS</span>
                </li>
              </Link>
              <Link to="/gallery">
                {" "}
                <li>
                  <span>GALLERY</span>
                </li>
              </Link>
              <Link to="/membership">
                {" "}
                <li>
                  <span>MEMBERSHIP</span>
                </li>{" "}
              </Link>
              {productList.map((item: productType, index: number) => {
                return (
                  <li
                    key={index}
                  >
                    <span className="mobileShop"
                      onClick={() => {
                        MenuItemHandleClick(item.mCategory);
                      }}
                    >
                      {item.mCategory}
                    </span>
                  </li>
                );
              })}
               <a href="/#contact">
                <li>
                  <span>CONTACT</span>
                </li>
              </a>
            </ul>
            <li>
              <a href="/cart" className="waves-effect">
                <MyCart />
                My Cart
              </a>
            </li>
            <li>
              <a href="/wishlist" className="waves-effect">
                <MyWishList />
                My WishList
              </a>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="link-category">
          {profileInfo?.fname ? "MyAccount" : "Sign in / Register"}
          <a href={RouteUrl}>
            <ShowMore classname="icon-arrow" />
          </a>
        </div>
        <div className="menu-drawer-footer">
          <ul className="menu-social">{getSocialIcons()}</ul>
        </div>
      </div>
    );
  };

  return (
    <Drawer
      body={<Body />}
      name="Menu"
      visibility={true}
      position="left"
      onClose={MenuIconClick}
    />
  );
};

export default LeftDrawer;
