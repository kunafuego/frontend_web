import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Historico(props){

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
    <ul className="topnav">
        <li><a href="/simulacion">Simular</a></li>
        <li><a className="active" href="">Mis Simulaciones</a></li>
        <li><a href="/solicitudes">Mis Solicitudes</a></li>
        <li className="right"><a href="/">Cerrar Sesión</a></li>
    </ul>

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

</div>  
)
}

export default Historico
