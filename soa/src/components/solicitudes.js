import React from 'react'

function Solicitudes(props){
    return  (
<div>
    <ul class="topnav">
        <li><a href="/simulacion">Simular</a></li>
        <li><a href="/historico">Mis Simulaciones</a></li>
        <li><a class="active" href="/solicitudes">Mis Solicitudes</a></li>

        <li class="right"><a href="/">Cerrar Sesión</a></li>
    </ul>

    <h1>SOLICITUDES HTML</h1>
</div>  
    )
}

export default Solicitudes