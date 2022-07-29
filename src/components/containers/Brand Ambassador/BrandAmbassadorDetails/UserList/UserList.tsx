import React from "react";
import { onClick } from "../../../../../constant/Types";
import { IAmbassador } from "../../../../stateContainers/BrandUsers/Types";
import { useAmbassador } from "../../useAmbassador.hook";

interface IProps {
  onViewDetailsClick: (e: onClick, item: IAmbassador) => void;
}

export const UserList: React.FC<IProps> = (props: IProps) => {
  const { onViewDetailsClick } = props;
  const { ambassadorGallery } = useAmbassador();

  return (
    <div className="categories-featured">
      <div className="categories-banner"></div>
      <div className="categories-container">
        <div className="categories-header">
          <h2 className="u-h2">Meet Our Irocker Ambassador Family!</h2>
        </div>
        {ambassadorGallery.map((item: IAmbassador) => {
          return (
            <section className="category">
              <a href="/" className="ratio ratio-1-1">
                <img src={item.dp} alt="profile" />
                <div
                  className="tag u-h5"
                  onClick={(e: onClick) => onViewDetailsClick(e, item)}
                >
                  <span>{item.ambassadorName}</span>
                </div>
              </a>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
