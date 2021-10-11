import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Product() {
    // Obtenemos el parametro en esta variable
    const {productId} = useParams();
    const [companys, setData]= useState([]);
    console.log({productId})
    console.log(productId)
    //const baseUrl="http://localhost:8080/democompany/buscaxid/" + productId;
    const baseUrl="http://168.181.186.118:9093/democompany/buscaxid/" + productId;
    console.log (baseUrl);
    //const baseUrl2="http://localhost:8080/democompany/buscaxid/5";
    //console.log (baseUrl2);
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
   
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">{companys.company_name}</h1>
        
        <h1>El Id es: {productId}</h1>

        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
              <span className="productName">Datos</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">LOCATION:</span>
                      <span className="productInfoValue">{companys.hq_location}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">salesde:  </span>
                    <span className="productInfoValue">id</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Pais:</span>
                      <span className="productInfoValue">{companys.country}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
       <h1>{companys.company_name}</h1>

            
          <form className="productForm">
              <div className="productFormLeft">
                    
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      
                      <img src={companys.logo_file} border="1" alt="Logo empresa" width="200" height="150" className="productUploadImg" ></img>
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
