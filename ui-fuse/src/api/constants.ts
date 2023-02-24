import Axios, { AxiosInstance } from "axios";
const API_ROUTE: string = "http://127.0.0.1:5001/firefuse-project/us-central1/api/";

export const axiosInstance: AxiosInstance = Axios.create({ baseURL: API_ROUTE });
