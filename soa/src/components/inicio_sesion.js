import React from "react";

function Inicio(props) {
    return (
<div>
    <header>
        <ul class="topnav">
            <li><a href="../../index.html">Inicio</a></li>
            <li><a href="./nosotros.html">Sobre Nosotros</a></li>
            <li><a href="./about.html">Sobre la Página</a></li>
            <li><a href="./FAQ.html">Preguntas Frecuentes</a></li>
            <li class="right"><a href="/registro">Registrar</a></li>
            <li class="right active"><a href="">Iniciar Sesión</a></li>
        </ul>
    </header>  
    <body>
        <div class="cuerpo_inicio">
            <form id="formulario_sesion">
                <h1 id="titulo_sesion">Iniciar Sesión</h1>

                <fieldset class="esquema_inicio">
                    <label class="labels" for="name">Email:</label>
                    <input type="text" id="nombre" />
                    
                    <label class="labels" for="mail">Contraseña:</label>
                    <input type="password" id="mail" name="user_email" />

                    <button onclick="window.location.href='./home.html';" type="submit" class="submit_button">Iniciar Sesión</button>
                </fieldset>
                
            </form>
        </div>
    
    </body>
</div>
)
}

export default Inicio