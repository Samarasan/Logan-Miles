import { useSelector } from "react-redux";
import { IRootState } from "../../../redux/reducer/CombineReducer";

export const useAmbassador = () => {
  const { brandData } = useSelector((state: IRootState) => state);
  const ambassadorGallery = brandData && brandData.ambassadorGallery;
  const selectedUser = brandData && brandData.selectedUser;
  const supportTeam = brandData && brandData.SupportTeam;

  return { ambassadorGallery, selectedUser, supportTeam };
};
