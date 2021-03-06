import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';
import { Link } from "react-router-dom";

 export default function DigiSearch() {
    const [data1, setData]= useState([]);
    const columns= [
        { title: 'COMPANY', field: 'COMPANY_NAME' },
        { title: 'logo', field: 'LOGO_FILE' },
        //{ title: 'Number of Acquisition', field: 'noa' },
        //{ title: 'WEB SITE', field: 'web_site' },
        
        //{ title: "Profile", render:rowData=><Link to={'/overview'}>Profile</Link>},
        //{ title: "Profile", render:rowData=><Link to={'/product/'+ rowData.company_id}>Profile</Link>},
        { title: "Detail", render:rowData=><Link to={'/overdigi/'+ rowData.COMPANY_ID}>Detail</Link>},
        //{ title: 'Género(s)', field: 'genero' },
        //{ title: 'Ventas Estimadas (millones)', field: 'ventas', type: 'numeric'}
      ];
    const baseUrl="http://168.181.186.118:9093/democompany/allcomp";
    //const baseUrl="http://localhost:8080/democompany/listar";
    //const baseUrl="http://localhost:8080/democompany/allcomp";

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
            <div className="newSearch">
             <h2>Digital Performance- Overview (Selected)</h2>
            <div >
            
            <MaterialTable
            columns={columns}
            data={data1}
            title="Company List Search" 
            />
          </div>
         </div>
     )
 }