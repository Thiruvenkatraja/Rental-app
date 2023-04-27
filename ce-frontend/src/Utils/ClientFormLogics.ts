import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const ClientFormLogics = () => {
  const url = useSelector((state: any) => state.ClientSlice.Url);
  const [values, setValues] = useState<any>({
    Client_Name: "",
    Client_MobileNumber: "",
    Client_EMail: "",
    Client_Block: "",
    Client_FlatNo: "",
    Client_PropertyTitle: "",
    Client_PropertyType: "Select",
    Client_ListingType: "Select",
    Client_Location: "",
    Client_Address: "",
    Client_ListingPrice: "",
    Client_BHK: "Select",
    Client_Status: "Select",
    Client_ParkingLot: "Select",
    Client_ConstructionSqft: "",
    Client_LandSqft: "",
    Client_ShortDesc: "",
    Client_LongDesc: "",
    Client_PropertyAmenities: [],
    Client_ImgURL: "",
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

  const handleCheckbox = (e: any) => {
    if (values.Client_PropertyAmenities.includes(e.target.value)) {
      setValues((preVal: any) => ({
        ...preVal,
        Client_PropertyAmenities: preVal.Client_PropertyAmenities.filter(
          (item: any) => item !== e.target.value
        ),
      }));
    } else {
      setValues((preVal: any) => ({
        ...preVal,
        Client_PropertyAmenities: [
          ...preVal.Client_PropertyAmenities,
          e.target.value,
        ],
      }));
    }
  };
  const handleSubmit = () => {
    axios
      .post(`${url}/clients/`, values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    handleChange,
    handleCheckbox,
    handleSubmit,
    values,
  };
};
