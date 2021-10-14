import "./compCompanies.css"
import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';

export default function ProductList() {
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);


    const { useState2 } = React;
    const [selectedRow2, setSelectedRow2] = useState(null);


    const [data1, setData]= useState([]);
    const columns= [
        { title: 'COMPANY', field: 'COMPANY_NAME', width : "200" },
        
    ];
    //const baseUrl="http://localhost:8080/democompany/allcomp";
    const baseUrl="http://168.181.186.118:9093/democompany/allcomp";
    const peticionGet=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
         console.log(response.data.return);
         setData(response.data.return);
        }).catch(error=>{
          console.log(error);
        })
      }

      useEffect(()=>{
        peticionGet();
      }, [])    

    

    return(
        <div className= "titleCompare">
            <h2>COMPARE COMPANIES</h2>
        
            <div className= "gridsearch">
                <MaterialTable
                columns={columns}
                data={data1}
                title="Add Company 1" 
                onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                options={{
                    rowStyle: rowData => ({
                    backgroundColor: (selectedRow === rowData.tableData.id) ? '#01579b' : '#FFF'
                    })
                }}
                />
                <MaterialTable
                columns={columns}
                data={data1}
                title="Add Company 2" 
                onRowClick={((evt, selectedRow2) => setSelectedRow2(selectedRow2.tableData.id))}
                options={{
                    rowStyle: rowData => ({
                    backgroundColor: (selectedRow2 === rowData.tableData.id) ? '#01579b' : '#FFF'
                    })
                }}
                />                
            </div>
        </div>
    );
}