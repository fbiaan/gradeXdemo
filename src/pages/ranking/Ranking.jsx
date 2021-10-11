import "./ranking.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


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

//const baseUrl="http://localhost:8080/democompany/ranking";
const baseUrl="http://168.181.186.118:9093/democompany/ranking";

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



const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];


    return (
      <div className="ranking">
          rankings
          <img src="https://insyteglobal.com/wp-content/uploads/2020/05/logo-insyte-global-small.png" alt=""  />
          <ResponsiveContainer width="100%" aspect={3 / 1}>

              <ComposedChart
              layout="vertical"
              width={500}
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
              <YAxis dataKey="country" type="category" scale="band" />
              <Tooltip />
              <Legend />
              
              <Bar dataKey="score" barSize={20} fill="#413ea0" />
              
            </ComposedChart>

          
        </ResponsiveContainer>
      </div>
        
   
    );
  }