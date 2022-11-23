import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../App';
import jwtDecode from 'jwt-decode';
import useTokenAuth from '../hooks/useTokenAuth';

function Deletesimulacion() {

  const navigate = useNavigate()
  const { handleTokenChange } = useTokenAuth();

  const deletesimulacions = (e) => {
    try {
      e.preventDefault();
      let simulacions = jwtDecode(localStorage.getItem('simulacions'))['simulacions'];

      simulacions.map((item) => {
        const response = axios.delete(`${process.env.REACT_APP_SERVER_URL}/delete/${item.id}`,
                    { headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('simulacions'))}`} });
        } 
      )
      
      navigate('/borrar_simulacion')
    } catch(error) {
      alert(`[${error.response.status}] ${error.response.data}`)
    }
  };

  const [simulaciones, setSimulaciones] = useState([]);

    useEffect( () => {
        const get_simulaciones = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/simulacions`;
        await axios
        .get(url)
        .then((response) => {
            setSimulaciones(response.data);
        })
        .catch((error) =>
        alert(`[${error.response.status}] ${error.response.data}`)
        );
    };
        get_simulaciones();
    }, []);

    return  (
<div>
    <Navbar />
    <div className='centrar'>

    <h1 className='titulo'>Simulaciones Históricas</h1>


    <table className='tabla_simulaciones'> 
        <tr>
            <th className='tabla_s'> Nombre </th>
            <th className='tabla_s'> Unidades a Producir </th>
            <th className='tabla_s'> Costo </th>
            <th className='tabla_s'> Empleos </th>
            <th className='tabla_s'> Fecha Incio </th>
            <th className='tabla_s'> Fecha término </th>
        </tr>
        {simulaciones.map((simulacion) => {
        return (
            <tr>
                <td className='tabla_s'>{simulacion.nombre}</td>
                <td className='tabla_s'>{simulacion.producción}</td>
                <td className='tabla_s'>{simulacion.costo}</td>
                <td className='tabla_s'>{simulacion.empleos}</td>
                <td className='tabla_s'>{simulacion.fecha_inicio.toString()}</td>
                <td className='tabla_s'>{simulacion.fecha_fin.toString()}</td>
            </tr>
        );
        })}
    </table>
    <button onClick={deletesimulacions} className="erase_button" type="submit">Borrar simulaciones</button> 
    </div>  
</div>  
)
}

export default Deletesimulacion;