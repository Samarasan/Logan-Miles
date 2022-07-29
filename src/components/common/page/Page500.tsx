import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "../../../hook/useWindowSize.hook";
import "./Style.scss";

export const Page500 = () => {
  const history = useHistory();
  const [width, height] = useWindowSize();

  return (
    <div
      className="error-container"
      style={{ minHeight: height, minWidth: width }}
    >
      <div className="error-container-wrapper">
        <h1 className="u-h2 error-head">Server Error (500)</h1>
        <p className="error-text">
          Something bad happened. It's not your fault.
        </p>
        <TextButton
          items="Back To Home"
          isprimary={true}
          className="ErrorBtn"
          onClick={() => {
            history.push("/");
          }}
        />
      </div>
    </div>
  );
};
