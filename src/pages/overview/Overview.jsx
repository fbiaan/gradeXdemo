import "./overview.css";
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {

    const [usuarios, setUsuarios]= useState([]);
    const [tablaUsuarios, setTablaUsuarios]= useState([]);
    const [busqueda, setBusqueda]= useState("");
  
    const peticionGet=async()=>{
        //await axios.get("https://jsonplaceholder.typicode.com/users")
        await axios.get("http://168.181.186.118:9093/democompany/listar")
        //await axios.get("http://localhost:8080/democompany/listar")
        .then(response=>{
            console.log(response.data);
            setUsuarios(response.data);
            setTablaUsuarios(response.data);
        }).catch(error=>{
          console.log(error);
        })
      }
    
    const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
      }  

    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
          if(elemento.company_name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ){
            return elemento;
          }
        });
        setUsuarios(resultadosBusqueda);
      }

    useEffect(()=>{
        peticionGet();
    },[])

    return (
        <div className="App">
        <div className="containerInput">
          <input
            className="form-control inputBuscar"
            value={busqueda}
            placeholder="Búsqueda por Nombre o Empresa"
            onChange={handleChange}
          />
          <button className="btn btn-success">
            
          </button>
        </div>
  
       <div className="table-responsive">
         <table className="table table-sm table-bordered">
           <thead>
             <tr>
               <th>ID</th>
               <th>Nombre</th>
               <th>web</th>
               <th>logo</th>
             </tr>
           </thead>
  
           <tbody>
             {usuarios && 
             usuarios.map((usuario)=>(
               <tr key={usuario.company_id}>
                 <td>{usuario.company_id}</td>
                 <td>{usuario.company_name}</td>
                 <td>{usuario.web_site}</td>
                 <td>{usuario.logourl}</td>
               </tr>
             ))}
           </tbody>
  
         </table>
  
       </div>
      </div>
    );
  }