import "./rankinglist.css";
import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'
//import MaterialTable from "material-table";
import { Link } from "react-router-dom";

const columns = [
  
  //getRowId={(row) => row._id}
  {field: 'company_id', headerName: 'ID'},
  {field: 'company_name', headerName: 'Company', width: 300},
  
  {field: 'score', headerName: 'Score', width: 200, sorteable: 'asc'},
  {
    field: "logo_file",
    headerName: "Logo",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.logo_file} alt="" />
        </div>
      );
    },
  },  
  
];

const DataTable = () => {

  const [tableData, setTableData] = useState([]);
  //const [busqueda, setBusqueda]= useState("");
  //const [usuarios, setUsuarios]= useState([]);

 useEffect(() => {
   //fetch("http://localhost:8080/democompany/ranking20")
   fetch("http://168.181.186.118:9093/democompany/ranking20")
   //fetch("http://168.181.186.118:9093/democompany/listar")
   
    .then((data) => data.json())
    .then((data) => setTableData(data))
    
 })


 
 
  return (
    
    
    <div style={{height: 600, width: '100%'}}>
      <div>
        <h1>Ranking company</h1>
      </div>
      
      <DataGrid 
        getRowId={(r) => r.company_id}
        rows={tableData}
        columns={columns}
        pageSize={20}
        checkboxSelection

      />
    </div>
  )
}

export default DataTable