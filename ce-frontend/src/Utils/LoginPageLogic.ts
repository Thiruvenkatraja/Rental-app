import { useDispatch, useSelector } from "react-redux";
import LoginSlice from "../Redux/LoginSlice";
import { useState } from "react";
import { loginStatus } from "../Redux/LoginSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const LoginPageLogic = () => {
  const url = useSelector((state: any) => state.ClientSlice.url);
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
    axios.post(`${url}/token`, values).then((res: any) => {
      return console.log(res.data);
    });
    dispatch(loginStatus(true));
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  const handleClick = (element: any) => {
    if (element == "Logout") {
      dispatch(loginStatus(false));
      localStorage.removeItem("isLoggedIn");
      navigate("/");
    } else if (element == "Account") {
      navigate("/super_admin");
    } else if (element == "Dashboard") {
      navigate("/home");
    }
  };
  return {
    handleSubmit,
    handleChange,
    values,
    handleClick,
  };
};
