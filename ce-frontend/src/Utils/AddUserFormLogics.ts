import axios from "axios";
import React, { useState } from "react";
import { snackBarOpen } from "../Redux/PropertySlice";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const AddUserFormLogics = () => {
  const dispatch = useDispatch();
  const url = useSelector((state: any) => state.ClientSlice.Url);
  const [values, setValues] = useState<any>({
    mobile_no: "",
    password1: "changeme",
    password2: "changeme",
    full_name: "",
    email: "",
    role: "",
    construction_name: "",
    gst_no: "",
    city: "",
    address: "",
  });
  const handleClear = () => {
    setValues({
      mobile_no: "",
      password1: "",
      password2: "",
      full_name: "",
      email: "",
      role: "",
      construction_name: "",
      gst_no: "",
      city: "",
      address: "",
    });
  };
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
    axios
      .post(`${url}/user/signup/`, values)
      .then((res) => {
        console.log(res.data);
        dispatch<any>(snackBarOpen<any>(true));
      })
      .catch((err) => {
        console.log(err);
        window.alert("Something went wrong");
      });

    setValues({
      mobile_no: "",
      password1: "",
      password2: "",
      full_name: "",
      email: "",
      role: "",
      construction_name: "",
      gst_no: "",
      city: "",
      address: "",
    });
  };
  return { handleClear, handleSubmit, handleChange, values };
};

export default AddUserFormLogics;
