import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginUserApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { toast } from "react-toastify";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginForm = async (data) => {
    try {
      let response = await loginUserApi(data);
      console.log(response);
      dispatch(addUser(response));
      toast.success("user logged in!");
    } catch (error) {
      console.log("err from loginForm", error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    loginForm,
    navigate,
  };
};
