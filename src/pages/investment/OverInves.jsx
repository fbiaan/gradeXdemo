
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable from "material-table";
import { useParams } from 'react-router-dom';
import imgabout from './imgcom/about2.JPG'
import linea from './imgcom/banda3colores.JPG'
import imgfin from './imgcom/financial.JPG'

function OverInves() {
    const {productId} = useParams();
    console.log({productId})
    const [company, setData]= useState([]);
    //const baseUrl="http://168.181.186.118:9093/democompany/buscaxid/15";
    //const baseUrl="http://168.181.186.118:9093/democompany/buscaxid/" + productId;
    const baseUrl="http://localhost:8080/democompany/onecompani?idcom=" + productId;
    //const baseUrl="http://localhost:8080/democompany/buscaxid/" + productId;
    const peticionGet=async()=>{
        await axios.get(baseUrl)
        .then(response=>{
        console.log(response.data.return[0]);
        setData(response.data.return[0]);
        }).catch(error=>{
        console.log(error);
        })
    }

    useEffect(()=>{
        peticionGet();
    }, [])


    const [inves, setInves]= useState([]);
    //const baseUrl="http://168.181.186.118:9093/democompany/buscaxid/15";
    //const baseUrl="http://168.181.186.118:9093/democompany/buscaxid/" + productId;
    const baseUrl2="http://localhost:8080/democompany/invesover?idcom=" + productId;
    //const baseUrl="http://localhost:8080/democompany/buscaxid/" + productId;
    const peticionGet2=async()=>{
        await axios.get(baseUrl2)
        .then(response=>{
        console.log(response.data.return);
        setInves(response.data.return);
        }).catch(error=>{
        console.log(error);
        })
    }

    useEffect(()=>{
        peticionGet2();
    }, [])

    const columns= [
        { title: 'INFO', field: 'OUTPUT_NAME' },
        { title: 'DATA', field: 'TEXT_VALUE' },
    ];
    return (
        <div className="user">
         <h3> Investment</h3>   
        <img src={linea} width="400" height ="20"/>
        <img src={company.logo_file} border="1" alt="Logo empresa" width="200" height="100"></img>
        <h1>COMPANY : {company.COMPANY_NAME}</h1>
        <h2>{company.COMPANY_ID}</h2>
        
        
        <div>

            <MaterialTable
            columns={columns}
            data={inves}
            title="Investment" 
            />
        </div>
        </div>
    );

};


export default OverInves;