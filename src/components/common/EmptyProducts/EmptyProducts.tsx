import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import "./EmptyProducts.scss";
import { useHistory } from "react-router-dom";
import EmptyProduct from "../../../assets/image/LOGAN/IMAGES/Comingsoon.gif";

function EmptyProducts() {
  const history = useHistory();

  return (
    <div className="productsNotFoundCard-wrapper">
      <img
        src={EmptyProduct}
        alt="products-not-found"
        className="productsNotFoundCard-image"
      />

      <TextButton
        items="COMING SOON"
        isprimary={true}
        className="productsNotFoundCard-button"
        onClick={() => {
          history.push("/");
        }}
      />
    </div>
  );
}

export default EmptyProducts;
