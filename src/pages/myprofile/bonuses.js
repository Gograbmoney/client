import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'name', headerName: 'Name', width: 140},
  { field: 'amount', headerName: 'Amount', width: 200 },
  { field: 'status', headerName: 'Status', width: 200 },
  { field: 'date', headerName: 'Date', width: 200 }
];

const rows = [
  { id: 1, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 2, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 3, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 4, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 5, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 6, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 7, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 8, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 9, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 10, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 11, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 12, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 13, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"},
  { id: 14, name : 'Snow', amount: "250.00",date:"23/06/2022" ,status : "Success"}
];

export default function Bonuses() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
      />
    </div>
  );
}
