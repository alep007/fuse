import Axios from "axios";
const API_ROUTE = "http://127.0.0.1:5001/firefuse-project/us-central1/api/";

export const axiosInstance = Axios.create({ baseURL: API_ROUTE });
