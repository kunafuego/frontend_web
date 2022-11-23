import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../App';
import jwtDecode from 'jwt-decode';
// import useTokenAuth from '../hooks/useTokenAuth';

function Deletesimulacion() {
  const navigate = useNavigate()
//   const { handleTokenChange } = useTokenAuth();

  const deletesimulacion = (e) => {
    e.preventDefault();
    let simulacion = jwtDecode(localStorage.getItem('simulacions'))['simulacions'];
    console.log(simulacion);
    simulacion.map((item) => {
      const response = axios.delete(`${process.env.REACT_APP_SERVER_URL}/delete/${item.id}`,
                  { headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('simulacions'))}`} });
      }
      
    )
    navigate('/')
  };
  
  return ( 
    <div>
        <h2>Borrar partidas</h2>
        <p>Como este es un procedimiento importante (y sin vuelta atrás), 
          debes volver a iniciar sesión antes de borrar las partidas</p>
        <button className="button-86" id="idbotoncalcular" type="button" onClick={deletesimulacion}>Calcular</button>
    </div>
  );
}

export default Deletesimulacion;