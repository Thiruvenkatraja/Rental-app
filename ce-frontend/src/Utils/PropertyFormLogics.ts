import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export const PropertyFormLogics = () => {
  const checkbox: Array<string> = [];
  const url = useSelector((state: any) => state.ClientSlice.Url);
  const [values, setValues] = useState<any>({
    Property_Title: "",
    Property_Type: "Select",
    Listing_Type: "Select",
    Location: "",
    Address: "",
    Overall_sqft: "",
    Blocks: "",
    Floors: "",
    Flats: "",
    One_BHK: "",
    Two_BHK: "",
    Three_BHK: "",
    ImgURL: "",
    Property_amenities: [],
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
    if (values.Property_amenities.includes(e.target.value)) {
      setValues((prevValues: any) => ({
        ...prevValues,
        Property_amenities: prevValues.Property_amenities.filter(
          (item: any) => item !== e.target.value
        ),
      }));
    } else {
      setValues((prevValues: any) => ({
        ...prevValues,
        Property_amenities: [...prevValues.Property_amenities, e.target.value],
      }));
    }
    console.log(values.Property_amenities);
  };
  const propertyData = {
    PropertyTitle: values.Property_Title,
    PropertyType: values.Property_Type,
    Property_ListingType: values.Listing_Type,
    Property_Location: values.Location,
    Property_Address: values.Address,
    Property_OverallSqft: values.Overall_sqft,
    Property_Blocks: values.Blocks,
    Property_Floors: values.Floors,
    Property_Flats: values.Flats,
    Property_1BHK: values.One_BHK,
    Property_2BHK: values.Two_BHK,
    Property_3BHK: values.Three_BHK,
    Property_Amenities: values.Property_amenities,
    Property_ImgURL: values.ImgURL,
  };

  const handleSubmit = () => {
    axios
      .post(`${url}/property/`, propertyData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    handleChange,
    values,
    handleCheckbox,
    handleSubmit,
  };
};
