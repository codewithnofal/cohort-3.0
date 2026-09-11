import React, { useContext, useEffect } from "react";
import useApi from "../../../config/useApi";
import { authContext } from "../../../context/AuthContext";

const Profile = () => {
  const api = useApi();
  const { setUser, user } = useContext(authContext);

  const getUser = async () => {
    const res = await api.get("/auth/me");

    console.log(res.data);
    setUser(res.data.user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <p>Profile Info: User</p>
      <p>Name:{user?.name} </p>
      <p>Email:{user?.email}</p>
    </div>
  );
};

export default Profile;
