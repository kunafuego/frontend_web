import React from 'react'

function FAQ(props){
    return  (
<div>
    <header>
    <ul className="topnav" id="topnav">
        <li><a href="../../index.html">Inicio</a></li>
        <li><a href="./nosotros.html">Sobre Nosotros</a></li>
        <li><a href="./about.html">Sobre la Página</a></li>
        <li><a className="active" href="">Preguntas Frecuentes</a></li>
        <li className="right"><a href="./registro.html">Registrar</a></li>
        <li className="right"><a href="./inicio_sesion.html">Iniciar Sesión</a></li>
    </ul>

    {/* <div class="feq"> */}

        <h1 class="titulo">Preguntas Frecuentes</h1>

    </header>


        <ul className="lista_faq">
            <li className="elemento_faq"> 
                <details className="details_faq">
                    <summary className="texto_faq">¿Cómo puedo formar una nueva cuenta para mi empresa?</summary>
                    Primero deberás tener que crear una cuenta de tipo Usuario Gerente, en la cual se te presentará un 
                    input de texto en el que deberás ingresar el nombre de tu empresa.

                    Luego, el resto de los usuarios que quieran ser parte de tu empresa deberán crear cuenta con el tipo 
                    de usuario que quieran y seleccionar tu empresa dentro de los nombres que aparecen.
                </details>
            </li>
            <li className="elemento_faq"> 
                <details className="details_faq">
                    <summary class="texto_faq">¿Cuántos usuarios puede tener una empresa?</summary>
                    Una empresa puede llegar a tener un máximo de cuatro usuarios, uno por cada tipo de usuarios que existen. 
                    Idealmente para cada puesto debe estar la persona a cargo de esa área
                </details>
            </li>
            <li className="elemento_faq"> 
                <details className="details_faq">
                    <summary className="texto_faq">¿Qué hacer una vez que el Usuario Gerente creó una simulación?</summary>
                    A cada uno de los usuarios de la empresa le aparecerá en su perfil una nueva simulación a la que 
                    podrá acceder. Con esta podrá, después de analizarla, rechazarla, aceptarla o enviar una contraoferta.
                </details>
            </li>
            <li className="elemento_faq"> 
                <details className="details_faq">
                    <summary className="texto_faq">¿Cuántos tipos de usuarios existen?</summary>
                    Son cuatro: el Usuario Gerente, el Usuario Finanzas, el Usuario Empleos y el Usuario Insumos.
                </details>
            </li>
            <li className="elemento_faq"> 
                <details className="details_faq">
                    <summary className="texto_faq">¿Todos los tipos de usuarios pueden crear simulaciones?</summary>
                    Solo los usuarios de tipo gerente tendrán el acceso a crear simulaciones, los otros tipos de 
                usuario solo podrán ver los resultados de este y simular en sus propias áreas a partir de la simulación generada por el gerente.
                </details>
            </li>
            <li className="elemento_faq"> 
                <details className="details_faq">
                    <summary className="texto_faq">¿Se pueden guardar simulaciones?</summary>
                    Sí, el usuario gerente al momento de mandar una simulación al resto de la empresa, se guarda automáticamente esta simulación en la pestaña de 
                    simulaciones históricas.
                </details>
            </li>
            <li className="elemento_faq"> 
                <details className="details_faq">
                    <summary className="texto_faq">¿Todos tendrán acceso a mis simulaciones?</summary>
                    No, solo las personas de la empresa de uno podrán ver las simulaciones, pero solo tendrán acceso a el área de la empresa que les corresponda, la única
                    persona que tiene acceso a la simulación en su completitud es el usuario gerente.
                </details>
            </li>
            <li className="elemento_faq"> 
                <details className="details_faq">
                    <summary className="texto_faq">¿Podré utilizar la aplicación si es que no hay una persona en cada cargo?</summary>
                    Sí, pero las responsabilidades de los cargos donde no hay otro usuario recaeran sobre el Usuario Gerente.
                </details>
            </li>

            <li className="elemento_faq"> 
                <details className="details_faq">
                    <summary className="texto_faq">¿Como se aprueba un proyecto?</summary>
                    El proyecto se aprueba cuando los cuatro tipos de usuario de la aplicación deciden darle su visto bueno, ahí la simulación pasa a ser aprobada.
                </details>
            </li>

            <li className="elemento_faq"> 
                <details className="details_faq">
                    <summary className="texto_faq">¿Que pasa si no estoy seguro sobre un proyecto?</summary>
                    Si no sabes si aprobar o rechazar, existe la posibilidad de simular de acuerdo a tu rol dentro de la empresa y mandar a revisión la simulación al Usuario Gerente,
                    en este momento la simulación desaparece de las simulaciones por aprobar y rechazar y el Usuario Gerente tendrá solo dos opciones, aprobar y el proyecto volverá a partir de cero
                    o rechazar y el proyecto será abandonado.
                </details>
            </li>

            <li className="elemento_faq"> 
                <details className="details_faq">
                    <summary className="texto_faq">¿Que pasa si se me rechaza la solicitud a la empresa?</summary>
                    Tendrás que mandar una solicitud a otra empresa, si no, no podrás tener acceso a la plataforma.
                </details>
            </li>
        </ul>

        <section className="extra_faq">
            <h3 className="aun_dudas">¿Aún tienes dudas?</h3>
            <h4 className="contactarnos">No dudes en contactarnos a nuestro <a href = "mailto:psanfrancisco@uc.cl?subject = SOA&body = Message"> Mail </a> donde podremos contestar todas tus dudas</h4>
        </section>

</div>
    )
    
}

export default FAQ;