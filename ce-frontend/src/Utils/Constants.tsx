import React from "react";

export interface Property {
  PropertyTitle: string;
  PropertyType: string;
  Property_Address: string;
  Property_Location: string;
  Property_ImgURL: string;
  Client_Block: string;
}

export function getUniqueValuesFromArray(
  arr: Property[],
  key: keyof Property
): string[] {
  return arr.reduce((acc: string[], obj: Property) => {
    if (!acc.includes(obj[key])) {
      acc.push(obj[key]);
    }
    return acc;
  }, []);
}
export const TextFieldStyle = {
  "& .MuiOutlinedInput-root": {
    background: "#ececec",
    marginTop: "0.5rem",
    height: "3rem",
    boxShadow: `0.5px .5px 5px .5px rgba(0,0,0,0.2)`,
  },

  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    borderRadius: "12px",
    height: "1rem",
  },
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    border: "1px solid black",
  },
};
export const TextValidatorStyle = {
  "& .MuiOutlinedInput-root": {
    // boxShadow: `0.2px .2px 5px .5px rgba(0,0,0,0.2)`,
    background: "#F6F6F6 !important",
    marginTop: "0.5rem",
  },
  "& .MuiTextValidator-root": {
    backgroundColor: "#F6F6F6 !important",
  },
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    background: "#F6F6F6 !important",
    borderRadius: "12px",
  },
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    border: "1px solid #f6f6f600",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#84342d !important",
  },
};
export const TypographyStyles = {
  fontFamily: "Poppins",
  fontWeight: "650",
  color: "inherit",
  textDecoration: "none",
};
