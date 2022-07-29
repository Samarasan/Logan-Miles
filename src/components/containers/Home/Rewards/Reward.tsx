import React from "react";
// import { dateInPast } from "../../../common/Script";
// import { Timer } from "../../../common/Timer/Timer";
import reward from "../../../../assets/image/LOGAN/Gallery/reward.gif";
import "./Reward.scss";
function Reward() {

//   const endDate = "12-07-2022";
//   const finalDate = new Date(endDate);
//   const today = new Date();
//   const isPastDate = dateInPast(finalDate, today);
  return (
    <>
      <div className="reward-Container">
        {/* <img src={reward} alt="rewardcup" /> */}
        {/* <div> {!isPastDate && <Timer endDate={endDate} showDay={true} />}</div> */}
        <h2 style={{color:"white"}}>WIN ! <span style={{color:"#DF3311"}}>$5000</span></h2>
        <b><h3>First time ever get a chance to win 5o miles rally</h3></b>
      <b>  <p>
          Skateboarders get a chance to win the race <br />
          Not all dreamers are winners, but all winners are dreamers…
        </p></b>
      </div>
    </>
  );
}

export default Reward;
