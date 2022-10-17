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

    <h1>SIMULACIONES HISTÓRICAS HTML</h1>

    {simulaciones.map((simulacion) => {
       return (
          <div className="post-card" key={simulacion.id}>
             <h2 className="post-title">{simulacion.nombre}</h2>
             </div>
       );
    })}
</div>  
)
}

export default Historico

// const newPlay = async () => {
//     const tiles = document.getElementsByClassName("Tile")
//     const url = `${SERVER_URL}/plays`;
//     const body = {
//       x: 0,
//       y: 1,
//       player: playerId,
//       match_id: matchId,
//     };
//     await axios
//       .post(url, body)
//       .then((response) => {
//         alert(` JUGADA CONCRETADA EN (${body.x}, ${body.y})`);
//         tiles[body.x * 3 + body.y].firstElementChild.innerText = "X"
//       })
//       .catch((error) =>
//         alert(`[${error.response.status}] ${error.response.data}`)
//       );
//   };