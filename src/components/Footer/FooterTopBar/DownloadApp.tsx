import appleStore from "../../../assets/image/appleStore.png";
import googlePlay from "../../../assets/image/googlePlay.png";

export const DownloadApp = () => {
  return (
    <div className="dwn-wrapper">
      <a
        className="dwn-anc"
        href="https://meme-global.com/"
        rel="noreferrer"
        target="_blank"
      >
        <div className="dwn-img-container">
          <img
            className="download-app-img"
            src={googlePlay}
            alt="Google Play Store"
          />
        </div>
      </a>
      <a
        className="dwn-anc"
        href="https://meme-global.com/"
        rel="noreferrer"
        target="_blank"
      >
        <div className="dwn-img-container">
          <img
            className="download-app-img"
            src={appleStore}
            alt="Apple App Store"
          />
        </div>
      </a>
    </div>
  );
};
