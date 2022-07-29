import React from "react";
import "./Player.scss";
import Footer from "../../Footer/Footer";
import Header from "../../header/Header.logic";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { LoggedInProf, LoggedInUser } from "../../common/Script";

export default function Players() {
  // enum PageView {
  //   Player10Page,
  //   Player25Page,
  //   Player50Page,
  // }
  const [players, setPlayers] = React.useState<any>([]);
  React.useEffect(() => {
    const playerProfile = async () => {
      await axios
        .get("https://api.mememove.com:8443/Logan50miles/Players/get/all/Player")
        .then((res: any) => {
          setPlayers(res.data);
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
  }, [players]);

  const CardContainer = (props: any) => {
    const item = props.item;
    const notify = () => toast("Login Required");
    return (
      <>
      {LoggedInUser || LoggedInProf ? ( <div className="contnerCard">
        <div className="playercard">
          <Link
            to={{
              pathname: `/plrdetails/${item?.pid}`,
              state: { item },
            }}
          >
            <div className="card-header-player">
              <img src={item.pimg} alt="rover" />
            </div>
            <div className="card-body-player">
              <h4>
                {item.fname} {item.lname}
              </h4>
              <p>{item.description}</p>
              <p className="seemore">See more</p>
            </div>
          </Link>
        </div>
      </div>):(<><div className="playercard" onClick={notify}>
            <div className="card-header-player">
              <img src={item.pimg} alt="rover" />
            </div>
            <div className="card-body-player">
              <h4>
                {item.fname} {item.lname}
              </h4>
              <p>{item.description}</p>
              <p className="seemore">See more</p>
            </div>
        </div><ToastContainer /></>)}
     
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="playerContainer">
        <h3>PLAYERS OF LOGAN 50 MILES</h3>

        <div className="playerSection">
          {players.map((item: any, index: any) => {
            return (
              <>
                {item.eventlevel === "50 Miles" ? (
                  <>
                    <CardContainer item={item} />
                  </>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
        <h3>PLAYERS OF LOGAN 25 MILES</h3>
        <div className="playerSection">
          {players.map((item: any, index: any) => {
            return (
              <>
                {item.eventlevel === "25 Miles" ? (
                  <CardContainer item={item} />
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
        <h3>PLAYERS OF LOGAN 10 MILES</h3>
        <div className="playerSection">
          {players.map((item: any, index: any) => {
            return (
              <>
                {item.eventlevel === "10 Miles" ? (
                  <CardContainer item={item} />
                ) : (
                  ""
                )}
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
