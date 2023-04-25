import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headername: 'ID', width: 90 },
  {
    field: 'name',
    headername: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'blocks',
    headername: 'Blocks',
    width: 150,
    editable: true,
  },
  {
    field: 'flat_no',
    headername: 'Flat No',
    width: 150,
    editable: true,
  },
  {
    field: 'type',
    headername: 'type',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'bhk',
    headername: 'BHK',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'status',
    headername: 'Status',
    type: 'number',
    width: 110,
    editable: true,
  },
 
];

const rows = [
  { id: 1, name: 'Snow', blocks:1, flat_no:12341, type:4, bhk:"2bhk", status:"active" },
  { id: 2, name: 'Snow', blocks:2, flat_no:12342, type:2, bhk:"1bhk", status:"inactive" },
  { id: 3, name: 'Snow', blocks:3, flat_no:12343, type:1, bhk:"2bhk", status:"active" },
  { id: 4, name: 'Snow', blocks:4, flat_no:12344, type:4, bhk:"4bhk", status:"inactive" },
  { id: 5, name: 'Snow', blocks:5, flat_no:12345, type:3, bhk:"3bhk", status:"active" },
  { id: 6, name: 'Snow', blocks:6, flat_no:12346, type:2, bhk:"5bhk", status:"inactive" },
  { id: 7, name: 'Snow', blocks:7, flat_no:12347, type:1, bhk:"6bhk", status:"active" },
  { id: 8, name: 'Snow', blocks:8, flat_no:12348, type:2, bhk:"2bhk", status:"inactive" },
  { id: 9, name: 'Snow', blocks:9, flat_no:12349, type:1, bhk:"5bhk", status:"active" },
 
];

export default function PropertyDataGrid() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
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
