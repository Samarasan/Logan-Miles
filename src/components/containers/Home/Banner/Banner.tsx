import "./Banner.scss";
//  import mouseico from "../../../../assets/image/Banner/mouseImg.png"

export const Banner = () => {
  return (
    <div className="slideshow-container">
      <div className="mySlides">
      <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            filter:" brightness(0.6)"
            // objectFit: "cover",
            // height: containerHeight,
          }}
          className="slideimg"
        >
          <source
            src="https://video.wixstatic.com/video/5e82fd_a44ee5a5b1eb4df085e2ab85debdc483/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="homepage-center-promo">
        <h1 className="homepage-center-promo-head">
          Skateboard <br /> Rally
        </h1>
        <span className="homepage-center-promo-content u-h3" >
          IT'S TIME TO JUMP ON THE LOGAN
        </span>
      </div>
       {/* <div className="homepage_center_ral">
       <Link to ="/ourevent" ><p> Upcomming Rally</p></Link>
      </div>
      <div className="homepage-center-ico">
      <span className="homepage-center-promo-content u-h3" >
        <img src={mouseico} alt="mouseIcon" />
        </span>
      </div> */}
      
    </div>
  );
};
