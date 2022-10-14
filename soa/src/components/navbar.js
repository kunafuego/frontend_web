import React from "react";

function Navbar(props) {
    
    return (
    <ul className="topnav" id="topnav">
        <li><a href="/">Inicio</a></li>
        <li><a href="/nosotros">Sobre Nosotros</a></li>
        <li><a href="/about">Sobre la Página</a></li>
        <li><a href="/FAQ">Preguntas Frecuentes</a></li>
        <li className="right"><a href="/registro">Registrar</a></li>
        <li className="right"><a href="/inicio_sesion">Iniciar Sesión</a></li>
    </ul>
  );
}

export default Navbar;
