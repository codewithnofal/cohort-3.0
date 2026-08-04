import { api } from "../../../config/axiosInstance";

export const loginUserApi = async (credentials) => {
  try {
    let res = await api.post("/auth/login", credentials);
    localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
  } catch (error) {
    console.log("login user api err", error);
  }
};

export const userHydrationApi = async () => {
  let token = localStorage.getItem("accessToken");
  try {
    let res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("hydration user api err", error);
  }
};
