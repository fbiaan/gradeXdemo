import "./ranking.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {DataGrid} from '@material-ui/data-grid'


import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


export default function RankingCountry() {
const [paises, setData]= useState([]);
const [tableData, setTableData] = useState([]);
//const baseUrl="http://localhost:8080/democompany/ranking";
const baseUrl="http://168.181.186.118:9093/democompany/ranking20";
//const baseUrl="http://localhost:8080/democompany/ranking20"
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
      <div className="ranking">
        
          Ranking TOP 20   _
          <img src="https://insyteglobal.com/wp-content/uploads/2020/05/logo-insyte-global-small.png" alt=""  />
          <ResponsiveContainer width="100%" aspect={1 / 1}>

              <ComposedChart
              layout="vertical"
              width={400}
              height={400}
              data={paises}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="company_name" type="category" scale="band" />
              <Tooltip />
              <Legend />
              
              <Bar dataKey="score" barSize={20} fill="#413ea0" />
              
            </ComposedChart>

          
        </ResponsiveContainer>
      
      
      
     </div>
    );
  }