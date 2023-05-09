import { useDispatch, useSelector } from "react-redux";
import LoginSlice from "../Redux/LoginSlice";
import { useState } from "react";
import { loginStatus } from "../Redux/LoginSlice";
import { useNavigate } from "react-router-dom";
export const LoginPageLogic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues((preVal: any) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const handleSubmit = () => {
    dispatch(loginStatus(true));
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  const handleClick = (element: any) => {
    if (element == "Logout") {
      dispatch(loginStatus(false));
      localStorage.removeItem("isLoggedIn");
      navigate("/");
    }
  };
  return {
    handleSubmit,
    handleChange,
    values,
    handleClick,
  };
};
