import axios from "axios";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";

export default function useApi() {
  const { accessToken, setAccessToken } = useContext(authContext);

  const api = axios.create({
    baseURL: "http://localhost:5173/api",
    withCredentials: true,
  });

  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response && error.response.status === 500) {
        const res = await axios.post("http://localhost:5173/api/auth/refresh");

        setAccessToken(res.data.accessToken);
        error.config.headers.Authorization = `Bearer ${res.data.accessToken}`;

        return axios(error.config);
      }
    },
  );

  return api;
}
