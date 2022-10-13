import React from "react";

function Registro(props) {
    return (
<div>
    <header>
        <ul class="topnav">
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Sobre Nosotros</a></li>
            <li><a href="/about">Sobre la Página</a></li>
            <li><a href="/FAQ">Preguntas Frecuentes</a></li>
            <li class="right active"><a href="">Registrar</a></li>
        <li class="right"><a href="/inicio_sesion">Iniciar Sesión</a></li>
        </ul>
    </header> 

    <body>
        <div class="register">
            <form id="formulario">
                
                <h1 id="titulo_registro">Formulario Registro</h1>
                
                <fieldset class="esquema">
                    <legend class="letras"><span class="numero">1</span>Información Personal</legend>
                    <label class="labels" for="name">Nombre:</label>
                    <input type="text" id="nombre" />
                    
                    <label class="labels" for="mail">Email:</label>
                    <input type="email" id="mail" name="user_email" />
                    
                    <label class="labels" for="password">Contraseña:</label>
                    <input type="password" id="password" name="user_password" />
                </fieldset>
                
                <fieldset class="esquema">
                    <legend  class="letras"><span class="numero">2</span>Información Empresa</legend>
                </fieldset>

                <div class="drop">

                    <fieldset class="esquema">
                        <label class="labels" for="tipo_usuario">Tipo de Usuario:</label>
                        <select class="seleccionar" id="tipo_usuario" onchange="tipo_input(this.value)">
                            <option value="Usuario Finanzas">Usuario Finanzas</option>
                            <option value="Usuario Insumos">Usuario Insumos</option>
                            <option value="Usuario Empleos">Usuario Empleos</option>
                            <option value="Usuario Gerente">Usuario Gerente</option>
                        </select>
                        
                        <label class="labels" id="label_escondida"> Inserte nombre de su Empresa:</label>
                        <input type="hidden" id="texto_empresa" />
                        
                        <div class="empresa">
                            <label class="labels" id="label_nombre_empresa">Nombre Empresa:</label>
                            <select class="seleccionar" id="nombre_empresa">
                                <option value="Codelco">Codelco</option>
                                <option value="SQM">SQM</option>
                                <option value="Cristalerías Chile">Cristalerías Chile</option>
                            </select>
                        </div>
                        <div> 
                            <button onclick="window.location.href='./home.html';" class="registerbutton" type="submit">Sign Up</button> 
                        </div>
                    </fieldset>
                </div>
            </form>
        </div>
    </body>
</div>
)
}

export default Registro