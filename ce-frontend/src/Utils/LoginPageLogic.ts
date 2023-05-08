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
  //   const isLoggedIn = useSelector((state: any) => state.LoginSlice.isLoggedIn);
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
    navigate("/home");
  };
  return {
    handleSubmit,
    handleChange,
    values,
  };
};
