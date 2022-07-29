import { PostServices } from "../../../utils/API";

export const getLikesCountById = async (ppid:any): Promise<any> => {
    return PostServices.LikesCountById(ppid)
      .then((res: any) => res.data)
      .catch((error: any) => error);
  };