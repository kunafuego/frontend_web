import React from 'react'
import Navbar from './navbar';

function About(props){
    return(  
<div>
    <Navbar />

    <div class="orden">
    <h1 class="titulo"> Sobre la aplicaci贸n</h1>
        <section id="sobre_la_app">
            <div class="historia">
                <h3 class="subtitulo_sobre"> Historia: 馃摑</h3>
                <p class="parrafos_sobre"> Esta aplicaci贸n naci贸 de la necesidad de un grupo de compa帽eros de generar una plataforma donde 
                    se puedan realizar simulaciones sobre la industria del vidrio. Bajo ese contexto, nos surgi贸 la idea de 
                    hacer una plataforma donde distintos agentes de una empresa se puedan comunicar mediante ella. </p>
            </div>
            <div class="mision">
                <h3 class="subtitulo_sobre"> Nuestra Misi贸n: 馃幆</h3>
                <p class="parrafos_sobre"> Como aplicaci贸n queremos ser un centro del manejo de la producci贸n de las empresas de todas las industrias.
                    Por ahora estaremos enfocados solamente en la industria del vidrio como plan piloto, pero esperamos pronto poder 
                    ir migrando a otras 谩reas de la producci贸n. </p>
            </div>
            <div class="funciona">
                <h3 class="subtitulo_sobre"> 驴C贸mo Funciona? 馃</h3>
                <p class="parrafos_sobre"> En un principio, el gerente debe crearse una cuenta de tipo Usuario Gerente, donde podr谩
                    ingresar como texto el nombre de su empresa. Una vez que est茅 registrado, el resto de los usuarios de la empresa podr谩n
                    registrarse como el tipo de Usuario que deseen (Finanzas, Insumos o Empleos), y cuando presione registrar se le enviar谩
                    automaticamente una request al usuario gerente de esa empresa, indic谩ndole que una cierta persona quiere registrarse a su 
                    empresa. El usuario gerente ser谩 capaz de aceptar o rechazar esta petici贸n, con lo que el inicio de sesi贸n estar铆a listo para 
                    todos los usuarios de la empresa.<br /><br />
                    Luego, para realizar simulaciones el usuario gerente ser谩 capaz de iniciar una, y al momento de hacerla, se le enviar谩
                    esta simulaci贸n a todos los usuarios que pertenezcan a la empresa. A cada uno se le mostrar谩 informaci贸n distinta de la simulaci贸n
                    dependiendo de su cargo en la empresa. En ese momento, y despu茅s de analizar la simulaci贸n, los usuarios ser谩n capaces de aceptar
                    o rechazar la simulaci贸n hecha por el gerente.
                </p>
            </div>
        </section>
    </div> 
</div>
)
}

export default About;