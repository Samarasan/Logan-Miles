import { BrandServices } from "../../../utils/API";

export const getTeamService = async (): Promise<any> => {
  return BrandServices.Team()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const getAmbassadorService = async (): Promise<any> => {
  return BrandServices.BrandAmbassador()
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export interface IFund {
  fundId?: number;
  name: string;
  mailId: string;
  amount: string;
}

export const addFundingService = async (item: IFund): Promise<any> => {
  return BrandServices.Funding(item)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};

// export const getSupportTeamService = async (): Promise<any> => {
//   return BrandServices.SupportTeam()
//     .then((res: any) => res.data)
//     .catch((error: any) => error);
// };
