import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import useCookieAuth from "../hooks/useCookieAuth";

function Registro(props) {

    const tipo = 'Gerente'
    const estado_solicitud = 'Aceptada'
    
    const [nombre, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [empresa, setCompany] = useState("");

    const navigate = useNavigate();
    const { handleUserLogin } = useCookieAuth();

    const userRegister = async (e) => {
        try {
            e.preventDefault();
            const response = await axios
                .post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
                "tipo": tipo,
                "estado_solicitud": estado_solicitud,
                "nombre": nombre,
                "email": mail,
                "contrasena": password,
                "contrasena2": password2,
                "nombre_empresa": empresa,
            });
            if (!response.data.error) {
                navigate("/");
            } else {
                console.log(response.data.error);
            }
        } catch(error) {
            alert(`[${error.response.status}] ${error.response.data}`)
        }
    }

    const tipo_input = event => {
        const valor = event.target.value
        // setter_tipo_usuario(valor)
        console.log(valor)
        if (valor == "Usuario Gerente"){
            // Hacemos aparecer el texto que le pide el nombre a la empresa
            document.getElementById("texto_empresa").type = "text"
            // Aparece también la label
            document.getElementById("label_escondida").style.visibility = "visible"
            // Escondemos el label y el dropdown que había
            document.getElementById("label_nombre_empresa").style.display = "none"
            document.getElementById("nombre_empresa").hidden = true
        } else {
            // el mismo proceso viceversa
            document.getElementById("texto_empresa").type = "hidden"
            document.getElementById("label_escondida").style.visibility = "hidden"
            document.getElementById("label_nombre_empresa").style.display = "inline"
            document.getElementById("nombre_empresa").hidden = false
        }
    }

    return (
<div>
    <header>
        <ul className="topnav">
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Sobre Nosotros</a></li>
            <li><a href="/about">Sobre la Página</a></li>
            <li><a href="/FAQ">Preguntas Frecuentes</a></li>
            <li className="right active"><a href="">Registrar</a></li>
        <li className="right"><a href="/inicio_sesion">Iniciar Sesión</a></li>
        </ul>
    </header> 

    <body>
        <div className="register">
            <form id="formulario" onSubmit={userRegister}>
                
                <h1 id="titulo_registro">Formulario Registro</h1>
                
                <fieldset className="esquema">
                    <legend className="letras"><span className="numero">1</span>Información Personal</legend>
                    <label className="labels" for="name">Nombre:</label>
                    <input type="text" id="nombre" value={nombre} onChange={(e) => setName(e.target.value)} required />
                    
                    <label className="labels" for="mail">Email:</label>
                    <input type="email" id="mail" name="user_email" value={mail} onChange={(e) => setMail(e.target.value)} required />
                    
                    <label className="labels" for="password">Contraseña:</label>
                    <input type="password" id="password" name="user_password" value={password} onChange={(e) => setPassword(e.target.value)} required  />

                    <label className="labels" for="confirma_password">Confirmar Contraseña:</label>
                    <input type="password" id="confirmapassword" name="user_password" value={password2} onChange={(e) => setPassword2(e.target.value)} required/>
                </fieldset>
                
                <fieldset className="esquema">
                    <legend  className="letras"><span className="numero">2</span>Información Empresa</legend>
                </fieldset>

                <div className="drop">

                    <fieldset className="esquema">
                        <label className="labels" for="tipo_usuario">Tipo de Usuario:</label>
                        <select className="seleccionar" id="tipo_usuario" onChange={tipo_input}>
                            <option value="Usuario Finanzas">Usuario Finanzas</option>
                            <option value="Usuario Insumos">Usuario Insumos</option>
                            <option value="Usuario Empleos">Usuario Empleos</option>
                            <option value="Usuario Gerente">Usuario Gerente</option>
                        </select>
                        
                        <label className="labels" id="label_escondida"> Inserte nombre de su Empresa:</label>
                        <input type="hidden" id="texto_empresa" value={empresa} onChange={(e) => setCompany(e.target.value)} required/>
                        
                        <div className="empresa">
                            <label className="labels" id="label_nombre_empresa">Nombre Empresa:</label>
                            <select className="seleccionar" id="nombre_empresa">
                                <option value="Codelco">Codelco</option>
                                <option value="SQM">SQM</option>
                                <option value="Cristalerías Chile">Cristalerías Chile</option>
                            </select>
                        </div>
                        <div> 
                            <button onclick="window.location.href='./home.html';" className="registerbutton" type="submit">Sign Up</button> 
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