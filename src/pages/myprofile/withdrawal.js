import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'amount', headerName: 'Amount', width: 200 },
  { field: 'status', headerName: 'Status', width: 200 },
  { field: 'date', headerName: 'Date', width: 200 },
  { field: 'paymentMethod', headerName: 'Payment Method', width: 200 },
  { field: 'paymetDate', headerName: 'Payment Date', width: 200 },
  { field: 'paymentRefernce', headerName: 'Payment Reference', width: 200 }
];

const rows = [
  // { id: 1, amount: "250.00",date:"23/06/2022" ,status : "Success" , paymentMethod : "UPI" , paymetDate : "27/06/2022" , paymentRefernce : "No Reference"},
  // { id: 2, amount: "250.00",date:"23/06/2022" ,status : "Success" , paymentMethod : "UPI" , paymetDate : "27/06/2022" , paymentRefernce : "No Reference"},
  // { id: 3, amount: "250.00",date:"23/06/2022" ,status : "Success" , paymentMethod : "UPI" , paymetDate : "27/06/2022" , paymentRefernce : "No Reference"},
  // { id: 4, amount: "250.00",date:"23/06/2022" ,status : "Success" , paymentMethod : "UPI" , paymetDate : "27/06/2022" , paymentRefernce : "No Reference"},
  // { id: 5, amount: "250.00",date:"23/06/2022" ,status : "Success" , paymentMethod : "UPI" , paymetDate : "27/06/2022" , paymentRefernce : "No Reference"},
  // { id: 6, amount: "250.00",date:"23/06/2022" ,status : "Success" , paymentMethod : "UPI" , paymetDate : "27/06/2022" , paymentRefernce : "No Reference"},
  // { id: 7, amount: "250.00",date:"23/06/2022" ,status : "Success" , paymentMethod : "UPI" , paymetDate : "27/06/2022" , paymentRefernce : "No Reference"}
];

export default function Withdrawals() {
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
