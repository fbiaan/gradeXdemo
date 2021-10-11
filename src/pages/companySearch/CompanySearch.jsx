import React, { useState, useEffect } from 'react';
import './companySearch.css';
import MaterialTable from "material-table";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Edit } from '@material-ui/icons';

 export default function CompanySearch() {
    const [data, setData]= useState([]);
    const columns= [
        { title: 'COMPANY', field: 'company_name' },
        { title: 'WEB SITE', field: 'web_site' },
        //{ title: "Profile", render:rowData=><Link to={'/overview'}>Profile</Link>},
        { title: "Profile", render:rowData=><Link to={'/product/'+ rowData.company_id}>Profile</Link>},
        //{ title: 'Género(s)', field: 'genero' },
        //{ title: 'Ventas Estimadas (millones)', field: 'ventas', type: 'numeric'}
      ];
      const baseUrl="http://168.181.186.118:9093/democompany/listar";
    //const baseUrl="http://localhost:8080/democompany/listar";

    const peticionGet=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
         console.log(response.data);
         setData(response.data);
        }).catch(error=>{
          console.log(error);
        })
      }

      useEffect(()=>{
        peticionGet();
      }, [])

      return(
        <div classname="comsearch">
          <h2>View Profile</h2>
          <div className="homeWidgets">
            
            <MaterialTable
            columns={columns}
            data={data}
            title="Company List" 
            />
          </div>
        </div>  
      )
  }
  