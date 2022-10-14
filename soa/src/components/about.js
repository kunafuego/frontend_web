import React from 'react'
import Navbar from './navbar';

function About(props){
    return(  
<div>
    <Navbar />

    <div class="orden">
    <h1 class="titulo"> Sobre la aplicación</h1>
        <section id="sobre_la_app">
            <div class="historia">
                <h3 class="subtitulo_sobre"> Historia: 📝</h3>
                <p class="parrafos_sobre"> Esta aplicación nació de la necesidad de un grupo de compañeros de generar una plataforma donde 
                    se puedan realizar simulaciones sobre la industria del vidrio. Bajo ese contexto, nos surgió la idea de 
                    hacer una plataforma donde distintos agentes de una empresa se puedan comunicar mediante ella. </p>
            </div>
            <div class="mision">
                <h3 class="subtitulo_sobre"> Nuestra Misión: 🎯</h3>
                <p class="parrafos_sobre"> Como aplicación queremos ser un centro del manejo de la producción de las empresas de todas las industrias.
                    Por ahora estaremos enfocados solamente en la industria del vidrio como plan piloto, pero esperamos pronto poder 
                    ir migrando a otras áreas de la producción. </p>
            </div>
            <div class="funciona">
                <h3 class="subtitulo_sobre"> ¿Cómo Funciona? 🤔</h3>
                <p class="parrafos_sobre"> En un principio, el gerente debe crearse una cuenta de tipo Usuario Gerente, donde podrá
                    ingresar como texto el nombre de su empresa. Una vez que esté registrado, el resto de los usuarios de la empresa podrán
                    registrarse como el tipo de Usuario que deseen (Finanzas, Insumos o Empleos), y cuando presione registrar se le enviará
                    automaticamente una request al usuario gerente de esa empresa, indicándole que una cierta persona quiere registrarse a su 
                    empresa. El usuario gerente será capaz de aceptar o rechazar esta petición, con lo que el inicio de sesión estaría listo para 
                    todos los usuarios de la empresa.<br /><br />
                    Luego, para realizar simulaciones el usuario gerente será capaz de iniciar una, y al momento de hacerla, se le enviará
                    esta simulación a todos los usuarios que pertenezcan a la empresa. A cada uno se le mostrará información distinta de la simulación
                    dependiendo de su cargo en la empresa. En ese momento, y después de analizar la simulación, los usuarios serán capaces de aceptar
                    o rechazar la simulación hecha por el gerente.
                </p>
            </div>
        </section>
    </div> 
</div>
)
}

export default About;