import { useDispatch, useSelector } from "react-redux";
import LoginSlice from "../Redux/LoginSlice";
import { useState } from "react";
import { loginError } from "../Redux/LoginSlice";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { snackBarOpen } from "../Redux/PropertySlice";
export const LoginPageLogic = () => {
  const [token, setToken] = useState<any>(null);
  const url = useSelector((state: any) => state.ClientSlice.Url);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    Mobile_No: "",
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
  const handleSubmit = async () => {
    try {
      let res = await axios.post(`${url}/user/token/`, values);
      console.log(res);
      const decodedToken = jwtDecode(res.data.access);
      setToken(decodedToken);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } catch (err) {
      dispatch<any>(snackBarOpen(true));
      dispatch<any>(loginError(true));
      console.log(err);
    }
  };

  const handleClick = (element: any) => {
    if (element == "Logout") {
      localStorage.removeItem("isLoggedIn");
      navigate("/");
    } else if (element == "Users") {
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
