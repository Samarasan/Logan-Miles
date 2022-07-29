import { TextButton } from "../../ui-kit/TextButton/TextButton.view";

interface IProps {
  name: string;
  phone: string;
  url?: string;
}

export const ThumbProfileImageWrapper: React.FC<IProps> = (props: IProps) => {
  const { name, phone, url } = props;

  const getUrl =
    url !== ""
      ? url
      : "//cdn.shopify.com/s/files/1/0250/7571/2047/products/image_98ba96cb-5569-4b08-b98b-b75af1dd0b05_240x.jpg?v=1622836856";

  return (
    <div className="Profile__wrapper">
      <div
        className="Profile__ImageWrapper AspectRatio"
        style={{ aspectRatio: " 1.0" }}
      >
        <img className="Profile__Image" src={getUrl} alt="profile pic" />
      </div>
      <div className="Profile__Info">
        <h1> {`Hello ${name}`}</h1>
        <h1>{phone}</h1>
        <TextButton
          items="Subscribe"
          isprimary={true}
          className="Profile__button"
        />
      </div>
    </div>
  );
};
