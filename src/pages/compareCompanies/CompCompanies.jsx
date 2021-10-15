import "./compCompanies.css"
import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';
import { Edit } from "@material-ui/icons";

export default function ProductList() {
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);


    const { useState2 } = React;
    const [selectedRow2, setSelectedRow2] = useState(null);


    const [data1, setData]= useState([]);
    const [data2, setData2]= useState([]);
    const [selectcomp1, setSelectcomp1]= useState();
    const [selectcomp2, setSelectcomp2]= useState();
    const [selectcri,setSelectcri] = useState();
    const [datagrilla,setDataGrilla ]= useState([]);
    const [datagrilla2,setDataGrilla2 ]= useState([]);
    // datagirlal, tiene el jason
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
         setData2(response.data.return);
         setSelectcomp1(response.data.return[0].COMPANY_ID);
         setSelectcomp2(response.data.return[0].COMPANY_ID);         
         setSelectcri("d");
        }).catch(error=>{
          console.log(error);
        })
      }

      useEffect(()=>{
        peticionGet();
      }, [])    

    const clickBuscar = ()=>{
        const buscarGrilla=async(url)=>{
            await axios.get(url)
            .then(response=>{
                setDataGrilla(response.data.return)
            }).catch(error=>{
              console.log(error);
            })
          }
        //console.log({selectcomp1}.value)
        const param1 = selectcomp1
        console.log(param1)
        //const baseUrl3="http://localhost:8080/democompany/invesover?idcom=" + selectcomp1 
        const baseUrl3="http://168.181.186.118:9093/democompany/invesover?idcom=" + selectcomp1 
        //const baseUrl3="http://168.181.186.118:9093/democompany/allcomp";
          // agergar los paremtroo en la consta baseurl3
        buscarGrilla(baseUrl3)
    

        const buscarGrilla2=async(url)=>{
            await axios.get(url)
            .then(response=>{
                setDataGrilla2(response.data.return)
            }).catch(error=>{
              console.log(error);
            })
          }
        //console.log({selectcomp1}.value)
        //const baseUrl4="http://localhost:8080/democompany/invesover?idcom=" + selectcomp2
        const baseUrl4="http://168.181.186.118:9093/democompany/invesover?idcom=" + selectcomp2
        //const baseUrl3="http://168.181.186.118:9093/democompany/allcomp";
          // agergar los paremtroo en la consta baseurl3
        buscarGrilla2(baseUrl4)

    }
    

    return(
        <div className= "titleCompare">
            <h2>COMPARE COMPANIES</h2>
            <h3>Select Companies :</h3>
        
            <div className= "gridsearch">
                <div style={{display: "flex"}}>
                    
                    <select name="selectcomp1" value={selectcomp1} onChange={e => setSelectcomp1(e.target.value)}>
                        {
                            data1.map((company) => {
                                return <option key={company.COMPANY_ID} value={company.COMPANY_ID}>{company.COMPANY_NAME}</option>
                            })
                        }
                    </select>
                   
                    <select name="selectcomp2" value={selectcomp2} onChange={e => setSelectcomp2(e.target.value)}>
                        {
                            data2.map((company2) => {
                                return <option key={company2.COMPANY_ID} value={company2.COMPANY_ID}>{company2.COMPANY_NAME}</option>
                            })
                        }
                    </select>
                    
                </div>
                <div>
                <h3>Select Criteria :</h3>
                <select name="selectcri" value={selectcri} onChange={e => setSelectcri(e.target.value)}>
                    <option value="a" selected>Talent</option>
                    <option value="b">Teck Stack</option>
                    <option value="c">Digital Performance</option>
                    <option value="d">Investment</option>
                </select>
                    
                </div>
                <button onClick={clickBuscar}>Execute</button>
                <div>
                <div style={{display: "flex"}}>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Info</th>
                                <th>COMP1</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datagrilla.map((d) =>{
                                    return (
                                        <tr>
                                            <td>{d.OUTPUT_NAME}</td>
                                            <td>{d.TEXT_VALUE}</td>
                                            
                                        </tr>
                                    )
                                } )  
                            }
                        </tbody>
                    </table>
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Info</th>
                                <th>COMP2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                datagrilla2.map((d) =>{
                                    return (
                                        <tr>
                                            <td>{d.OUTPUT_NAME}</td>
                                            <td>{d.TEXT_VALUE}</td>
                                        </tr>
                                    )
                                } )  
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
                                
            </div>
        </div>
    );
}

/*
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
*/