import "./userList.css";
import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'
//import MaterialTable from "material-table";
import { Link } from "react-router-dom";

const columns = [
  
  //getRowId={(row) => row._id}
  {field: 'company_id', headerName: 'ID'},
  {field: 'company_name', headerName: 'Title', width: 200},
  {field: 'web_site', headerName: 'web', width: 200},
  {
    field: "logo_file",
    headerName: "Logo",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.logo_file} alt="" />
        </div>
      );
    },
  },  
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={"/user/" + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>         
        </>
      );
    },
  }
];

const DataTable = () => {

  const [tableData, setTableData] = useState([]);
  //const [busqueda, setBusqueda]= useState("");
  //const [usuarios, setUsuarios]= useState([]);

 useEffect(() => {
   //fetch("http://localhost:8080/democompany/listar")
   fetch("http://168.181.186.118:9093/democompany/listar")
   
    .then((data) => data.json())
    .then((data) => setTableData(data))
 })


 
 
  return (
    
    
    <div style={{height: 700, width: '100%'}}>
      <div>
        <h1>hola</h1>
      </div>
      
      <DataGrid 
        getRowId={(r) => r.company_id}
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection

      />
    </div>
  )
}

export default DataTable