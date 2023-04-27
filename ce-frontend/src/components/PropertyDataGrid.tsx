import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { PropertyDataLogics } from "../Utils/PropertyDataGridLogics";

const columns: GridColDef[] = [
  { field: "Client_ID", headerName: "ID", width: 100 },
  {
    field: "Client_FullName",
    headerName: "Name",
    width: 160,
    editable: true,
  },
  {
    field: "Client_Block",
    headerName: "Blocks",
    width: 160,
    editable: true,
  },
  {
    field: "Client_FlatNo",
    headerName: "Flat No",
    width: 160,
    editable: true,
  },
  {
    field: "Client_ListingType",
    headerName: "type",
    type: "number",
    width: 120,
    editable: true,
  },
  {
    field: "Client_BHK",
    headerName: "BHK",
    type: "number",
    width: 120,
    editable: true,
  },
  {
    field: "Client_Status",
    headerName: "Status",
    type: "number",
    width: 120,
    editable: true,
  },
];

export default function PropertyDataGrid() {
  const { FilteredData } = PropertyDataLogics();
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          border: "none",
          "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
            backgroundColor: "#F6F6F6",
            borderRadius: "5px",
            borderBottom: "none",
          },
        }}
        rows={FilteredData}
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
