import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientData } from "../Redux/ClientSlice";

export const PropertyDataLogics = (id: any) => {
  const dispatch = useDispatch();
  const Data = useSelector((state: any) => state.ClientSlice.clientData);
  const Ids = useSelector((state: any) => state.ClientSlice.propertyId.propertyId);
  React.useEffect(() => {
    dispatch<any>(fetchClientData());
  }, []);

  const FilteredData = Data.filter(
    (item: any) => item.Client_ID === Ids
  );

  return {
    Data,
    FilteredData,
  };
};
