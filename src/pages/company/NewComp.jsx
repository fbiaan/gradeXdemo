import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import imgabout from './imgcom/about2.JPG'
import linea from './imgcom/banda3colores.JPG'
import imgfin from './imgcom/financial.JPG'

function Newcomp() {
    const {productId} = useParams();
    console.log({productId})


    const [company, setData]= useState([]);
    //const baseUrl="http://168.181.186.118:9093/democompany/buscaxid/15";
    const baseUrl="http://168.181.186.118:9093/democompany/buscaxid/" + productId;
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

    return (
        <div>
        <img src={linea} width="400" height ="20"/>
        <img src={company.logo_file} border="1" alt="Logo empresa" width="200" height="100"></img>
        <h1>COMPANY : {company.company_name}</h1>
        </div>
    );

};


export default Newcomp;