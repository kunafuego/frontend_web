import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from "./navbar";
import useCookieAuth from "../hooks/useCookieAuth";


function Inicio(props) {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { handleUserLogin } = useCookieAuth();

    const userValidation = async (e) => {
        try {
            e.preventDefault();
            const response = await axios
                .post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
                "email": mail,
                "password": password
            });
            if (!response.data.error) {
                handleUserLogin();
                navigate("/simulacion");
        }
        } catch(error) {
            alert(`[${error.response.status}] ${error.response.data}`)
        }
    }

    return (
<div>
    <Navbar />
        <div className="cuerpo_inicio">
            <form id="formulario_sesion" onSubmit={userValidation}>
                <h1 id="titulo_sesion">Iniciar Sesión</h1>

                <fieldset className="esquema_inicio">
                    <label className="labels">Email:</label>
                    <input type="text" placeholder="Correo electrónico" value={mail} onChange={(e) => setMail(e.target.value)} required />
                    
                    <label className="labels">Contraseña:</label>
                    <input type="password" placeholder="Contaseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                    <input type="submit" className="submit_button" value="Iniciar Sesión" />
                </fieldset>
                
            </form>
        </div>
    
</div>
)
}

export default Inicio