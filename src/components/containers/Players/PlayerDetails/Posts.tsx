import React, { Component } from "react";
import Slider from "react-slick";
import player1 from "../../../../assets/image/LOGAN/Player/1.png";
import player2 from "../../../../assets/image/LOGAN/Player/2.png";
import player3 from "../../../../assets/image/LOGAN/Player/3.png";
import "./Post.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

// export default class MultipleItems extends Component {
export default function MultipleItems(props :any) {
    const [postData, setPostdata] = React.useState<any>([]);
    
  const imgData = props.playerId
  const sortImgPosts = [...postData].sort(function (a: any, b: any) {
    return b.ppid - a.ppid
  })
   {/* {LoggedInUser?(<>  <div classNameName="commentContainer">
        <Box component="form">
          <TextareaAutosize
            id="output"
            aria-label="minimum height"
            minRows={4}
            name="comment"
            placeholder="Add a Comment"
            style={{
              width: 600,
              height: 150,
              border: "1px solid #707070",
              borderRadius: "22px",
              marginLeft: "16px",
              color: "black",
              paddingTop: "14px",
              paddingLeft: "11px",
            }}
            onChange={handleOnComments}
          />
        </Box>
        <TextButton
          items="Submit"
          className="cmt-btn"
          onClick={commentOnSubmit as any}
          isprimary={true}
        />
      </div></>):("")}
    

      <div className="commentShow">
        {commentFeed?.map((feed: any) => {
          return (
            <div className="user-card">
              <h2>{feed?.username}</h2>
              <div className="profile-img">
                <img src={noUser} alt="nouser" />
              </div>
              <div className="description">{feed?.comment}</div>
            </div>
          );
        })}
      </div>
      style={{backgroundImage: `url(https://images.unsplash.com/photo-1524591431555-cc7876d14adf)`}}
      */}

{/* new card */}

  React.useEffect(() => {
    const playerProfile = async () => {
      await axios
        .get(
          "https://api.mememove.com:8443/Logan50miles/Players/get/all/feeds/byPlayerId",
          {
            params: { pid: imgData?.item?.pid},
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


const SlideToShow  : any= () =>{
    if(postData?.length == 1){
      return  1
    } else if ( postData?.length == 2){
       return 2
    }else if (postData?.length > 2){
       return 3
    }
    return 3
}

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
     slidesToShow: SlideToShow(),
     slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
        {sortImgPosts.map((scroll:any)=>{
return(
   
      <div>
        <img
          className="Sliderpics"
          style={{ borderRadius: "1cm" }}
          src={scroll.feedurl}
          alt="Firstslide"
        />
      </div>
      )
    })}
      {/* <div>
        <img
          className="Sliderpics"
          style={{ borderRadius: "1cm" }}
          src={player2}
          alt="Firstslide"
        />
      </div> */}
      {/* <div>
        <img
          className="Sliderpics"
          style={{ borderRadius: "1cm" }}
          src={player3}
          alt="Firstslide"
        />
      </div>
      <div>
        <img
          className="Sliderpics"
          style={{ borderRadius: "1cm" }}
          src={player1}
          alt="Firstslide"
        />
      </div>
      <div>
        <img
          className="Sliderpics"
          style={{ borderRadius: "1cm" }}
          src={player1}
          alt="Firstslide"
        />
      </div> */}
    </Slider>
  );
}
