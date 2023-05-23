import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { UserFilteredlist, fetchUserList } from "../../Redux/LoginSlice";

export default function SuperAdminDataGrid() {
  const Data: any = useSelector((state: any) => state.LoginSlice.userList);
  console.log("data", Data);
  const role = localStorage.getItem("role");
  const dispatch = useDispatch();

  const filteredData = useMemo(() => {
    let filtered = [];
    if (role === "admin") {
      filtered = Data.filter(
        (data: any) => data.role === "owner" && data.role === "tenent"
      );
    } else if (role === "owner") {
      filtered = Data.filter((data: any) => data.role === "tenent");
    }
    return filtered;
  }, [role]);

  useEffect(() => {
    dispatch<any>(fetchUserList());
    dispatch<any>(UserFilteredlist<any>(filteredData));
  }, [filteredData]);
  const columns: GridColDef[] = [
    // { field: "Client_ID", headerName: "S.NO", width: 100 },
    {
      field: "Full_Name",
      headerName: "Name",
      width: 200,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },
    {
      field: "role",
      headerName: "Role",
      width: 210,
      headerAlign: "center",
      align: "center",
      // editable: true,
    },

    {
      field: " Status",
      headerName: "Status",
      type: "number",
      width: 200,
      headerAlign: "center",
      align: "center",
      // editable: true,
      renderCell: (params) => {
        const status = params.value as string;
        return (
          <p
            style={{
              background: status === "Active" ? "#36B37E33" : "#FF563033",
              padding: "0.5rem",
              borderRadius: "10px",
              color: status === "Active" ? "#1B806A" : "#B71D18",
            }}
          >
            {status}
          </p>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          border: "none",
          "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
            backgroundColor: "#ffffff00",
            borderRadius: "5px",
            borderBottom: "none",
          },
        }}
        getRowId={(row: any) => row.User_Id}
        rows={Data ? Data : []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
