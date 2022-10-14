import React from 'react'

function Resultados(props){
    return  (
<div>
    <ul class="topnav">
        <li><a href="./simulacion.html">Simular</a></li>
        <li><a href="./historico.html">Mis Simulaciones</a></li>
        <li><a href="./solicitudes.html">Mis Solicitudes</a></li>

        <li class="right"><a href="../../index.html">Cerrar Sesión</a></li>
    </ul>

    <body>

        <header class="header">
            <h1 class="titulo">
                Resultados de su Simulación
            </h1>
        </header>

    </body>
</div>  
    )
}

export default Resultados