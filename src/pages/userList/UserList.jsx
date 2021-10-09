import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'

const columns = [
  //getRowId={(row) => row._id}
  {field: 'idcom', headerName: 'ID'},
  {field: 'company_name', headerName: 'Title', width: 300},
  {field: 'web_site', headerName: 'web', width: 300}
]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

 useEffect(() => {
   //fetch("http://localhost:8080/democompany/listar")
   fetch("http://168.181.186.118:9093/democompany/listar")
    .then((data) => data.json())
    .then((data) => setTableData(data))
 })

  return (
    <div style={{height: 700, width: '100%'}}>
      <DataGrid 
        getRowId={(r) => r.idcom}
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable