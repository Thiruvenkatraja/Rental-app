import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientData } from "../Redux/ClientSlice";
import { useParams } from "react-router-dom";
import { Property, getUniqueValuesFromArray } from "./Constants";

export const PropertyDataLogics = () => {
  const { id }: any = useParams();
  const Idx = parseInt(id);
  const dispatch = useDispatch();
  const Data: any = useSelector((state: any) => state.ClientSlice.clientData);
  const [block, setBlock] = React.useState<string>("All");
  const [search, setSearch] = React.useState<string>("");
  React.useEffect(() => {
    dispatch<any>(fetchClientData());
  }, [dispatch]);
  const FilteredData = Data.filter((item: any) => item.Client_ID === Idx);
  const [filteredClientData, setFilteredClientData] =
    React.useState<Property[]>(FilteredData);
  const blockType = getUniqueValuesFromArray(FilteredData, "Client_Block");
  const handleFilterChange = (key: string, value: string) => {
    if (key === "block") {
      setBlock(value);
    }
  };
  const filteredProperties = React.useMemo(() => {
    let filtered = FilteredData.filter(
      (property: any) =>
        property.Client_FullName.toLowerCase().includes(search.toLowerCase()) ||
        property.Client_ListingType.toLowerCase().includes(search.toLowerCase())
    );
    if (block !== "All") {
      filtered = filtered.filter(
        (property: any) => property.Client_Block === block
      );
    }
    return filtered;
  }, [search, block, Data, FilteredData]);

  React.useEffect(() => {
    setFilteredClientData(filteredProperties);
  }, [filteredProperties]);

  return {
    Data,
    block,
    blockType,
    setBlock,
    handleFilterChange,
    search,
    setSearch,
    filteredClientData
  };
};
