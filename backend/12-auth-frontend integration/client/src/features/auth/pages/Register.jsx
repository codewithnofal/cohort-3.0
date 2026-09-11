import React, { useContext, useState } from "react";
import useApi from "../../../config/useApi";
import { authContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const api = useApi();
  const { setAccessToken, setUser } = useContext(authContext);
    const navigate = useNavigate()


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await api.post("/auth/register", formData);

    console.log(res.data);

    setAccessToken(res.data.accessToken);
    setUser(res.data.data);

    navigate('/profile')
  };

  return (
    <div className="h-screen w-full bg-[#2f2f2f] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="h-[50vh] w-[60vh] flex flex-col items-center justify-center gap-2 bg-blue-300"
      >
        <input
          className="bg-white p-1 rounded-sm"
          type="text"
          placeholder="Name"
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <input
          className="bg-white p-1 rounded-sm"
          type="email"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
        <input
          className="bg-white p-1 rounded-sm"
          type="password"
          placeholder="Password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        />
        <button
          className="w-[45%] p-1 cursor-pointer bg-blue-700 rounded-sm"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
