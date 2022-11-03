import axios from "axios";
import React from "react";
import useCookieAuth from "../hoooks/useCookieAuth";

function Navbar(props) {
    const {handleUserLogout, currentUser} = useCookieAuth()
    console.log(currentUser);

    const logout = async () => {
      handleUserLogout();
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/logout`)
            .then(() => console.log("cerramos sesión"))
            .catch(err => console.log(err));
    }
return (
  <ul className="topnav" id="topnav">
      <li><a href="/">Inicio</a></li>
      <li><a href="/nosotros">Sobre Nosotros</a></li>
      <li><a href="/about">Sobre la Página</a></li>
      <li><a href="/FAQ">Preguntas Frecuentes</a></li>
      {currentUser ?
      <div>
        <li><a href="/simulacion">Simular</a></li>
        <li><a href="/historico">Mis Simulaciones</a></li>
        <li><a href="/solicitudes">Mis Solicitudes</a></li>
        <li className="right"><a href="#" onClick={logout}>Cerrar Sesión</a></li>
      </div> 
        :
      <div>
        <li className="right"><a href="/registro">Registrar</a></li>
        <li className="right"><a href="/inicio_sesion">Iniciar Sesión</a></li>
      </div>
      }
  </ul>
);
};

export default Navbar;


