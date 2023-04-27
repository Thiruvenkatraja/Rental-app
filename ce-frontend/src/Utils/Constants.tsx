import React from "react";

export interface Property {
  PropertyTitle: string;
  PropertyType: string;
  Property_Address: string;
  Property_Location: string;
  Property_ImgURL: string;
  Client_Block:string;
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
