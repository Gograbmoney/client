import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ClickId', width: 140 },
  { field: 'store', headerName: 'Store', width: 260 },
  { field: 'date', headerName: 'Date', width: 260 }
];

const rows = [
  // { id: 1, store: 'Snow', date: '23/06/2002' },
  // { id: 2, store: 'Lannister', date: '23/06/2002'},
  // { id: 3, store: 'Lannister', date: '23/06/2002'},
  // { id: 4, store: 'Stark', date: '23/06/2002' },
  // { id: 5, store: 'Targaryen', date: '23/06/2002' },
  // { id: 6, store: 'Melisandre', date: null},
  // { id: 7, store: 'Clifford', date: '23/06/2002'},
  // { id: 8, store: 'Frances', date: '23/06/2002'},
  // { id: 9, store: 'Roxie', date: '23/06/2002'}
];

export default function Clicks() {
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
