import { useContext } from "react";
import { AuthStore } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const useRegister = () => {
  const { users, setUsers } = useContext(AuthStore);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    watch,
  } = useForm({});

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let password = watch("password");

  const formSubmit = (data) => {
    let user = users.find((u) => u.email === data.email);
    if (user) {
      toast.error("user email already exist", {duration: 1000});
      return;
    }

    const newUser = {
      firstLetter: data.name.at(0).toUpperCase(),
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      cart: [],
    };
    let formData = [...users, newUser];
    setUsers(formData);
    toast.success("User Registered Successfully")
    localStorage.setItem("users", JSON.stringify(formData));

    reset();

    navigate("/auth/login");
  };

  const onError = (errors) => {
    if (
      errors.name &&
      errors.email &&
      errors.password &&
      errors.confirmPassword
    ) {
      toast.error("Please fill all the fields!", {duration:1000});
    }
     else if (errors.name) {
      toast.error(errors.name.message, {duration:1000});
    }
    else if (errors.email) {
      toast.error(errors.email.message, {duration:1000});
    }

    else if (errors.password) {
      toast.error(errors.password.message, {duration:1000});
    }

    else if (errors.confirmPassword) {
      toast.error(errors.confirmPassword.message, {duration:1000});
    }
  };

  return {
    navigate,
    passwordRegex,
    password,
    errors,
    getValues,
    handleSubmit,
    register,
    formSubmit,
    onError,
  };
};
