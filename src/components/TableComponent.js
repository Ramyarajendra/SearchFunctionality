import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'postId', headerName: 'ID', flex: 0.5},
    { field: 'name', headerName: 'Name', flex :1 },
    { field: 'email', headerName: 'Email', flex : 1 }
  ];

const TableComponent = ({ rows }) => {
    return (
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={15} />
            </div>
    )
}

export default TableComponent
