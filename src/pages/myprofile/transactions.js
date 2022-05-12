import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'store', headerName: 'Store', width: 140},
  { field: 'mTransId', headerName: 'Merchant Transaction Id', width: 200 },
  { field: 'transAmt', headerName: 'Transaction Ammount', width: 200 },
  { field: 'transDate', headerName: 'Transaction Date', width: 200 },
  { field: 'transStatus', headerName: 'Transaction Status', width: 200},
  { field: 'cashbackAmmount', headerName: 'Cashback Ammount', width: 200 }
];

const rows = [
  { id: 1, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 2, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 3, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 4, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 5, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 6, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 7, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 8, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 9, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 10, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 11, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 12, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 13, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 14, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},
  { id: 15, store: 'Snow',mTransId : "685268", transAmt: "250.00",transDate:"23/06/2022" ,transStatus : "Success" , cashbackAmmount : "250.00"},

];

export default function Transactions() {
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
