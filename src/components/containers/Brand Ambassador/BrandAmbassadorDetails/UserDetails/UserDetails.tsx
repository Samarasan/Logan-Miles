import { UserCard } from "./UserCard";
import { UserInfo } from "./UserInfo";
import "./UserDetails.scss";

function UserDetails() {
  return (
    <div>
      <div className="brd-amb-banner"></div>
      <UserInfo />
      <UserCard />
    </div>
  );
}

export default UserDetails;
