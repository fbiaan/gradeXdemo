import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import imgabout from './imgcom/about2.JPG'
import linea from './imgcom/banda3colores.JPG'
import imgfin from './imgcom/financial.JPG'

function OverComp() {
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

    return (
        <div className="user">
        <img src={linea} width="400" height ="20"/>
        <img src={company.logo_file} border="1" alt="Logo empresa" width="200" height="100"></img>
        <h1>COMPANY : {company.COMPANY_NAME}</h1>
        <h2>{company.COMPANY_ID}</h2>
        
        </div>
    );

};


export default OverComp;