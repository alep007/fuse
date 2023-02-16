import { selector } from "recoil";
import { axiosInstance } from "../../api/constants";

const compositionsQueryList = selector({
  key: "compositionsQueryList",
  get: async () => {
    const response = await axiosInstance.get("/compositions");
    return response;
  },
});

export default compositionsQueryList;
