import React, { useState } from 'react'
import empresa from '../assets/imgs/empresa.jpeg';
import mueble from '../assets/imgs/mueble.jpeg';
import laboratorio from '../assets/imgs/laboratorio.jpeg';
import espejo from '../assets/imgs/espejo.jpeg';
import reciclado from '../assets/imgs/reciclado.jpeg';
import seguridad from '../assets/imgs/seguridad.jpeg';

function Simulacion(props){
    const [initial_product, setter_product] = useState("")
    const [simulation_img, setter_img] = useState(empresa)
    const tipo_producto_index = event => {
        const valor = event.target.value
        setter_product(valor)
        if (valor == "mueble"){
            document.getElementById("idparrafo").innerHTML = "Estos muebles utilizan un sistema de pegado ultravioleta invisible, líquido e incoloro. Se puede pegar vidrio con vidrio o vidrio con acero. Su principal característica es proyectar transparencia y claridad al interior del lugar incorporando la más alta calidad y tecnología en el proceso de pegado de cristales."
            setter_img(mueble)
        } else if (valor == "lyf") {
            document.getElementById("idparrafo").innerHTML = "La cristalería de laboratorio se refiere a una variedad de equipos utilizados en el trabajo científico y tradicionalmente hechos de vidrio. El vidrio se puede soplar, doblar, cortar, moldear y formar en muchos tamaños y formas y, por lo tanto, es común en los laboratorios de química, biología y análisis."
            setter_img(laboratorio)
        } else if (valor == "espejo") {
            document.getElementById("idparrafo").innerHTML = "Los espejos modernos consisten en una delgada capa de plata o aluminio depositado sobre una plancha de vidrio, la cual protege el metal y hace al espejo más duradero. Este proceso se conoce como plateado."
            setter_img(espejo)
        } else if (valor == "reciclado") {
            document.getElementById("idparrafo").innerHTML = "Tiene una gran cantidad de usos y aplicaciones. Para la fabricación de mosaicos y azulejos, para encimeras de cuartos de baño y cocinas, para la fabricación de todo tipo de envases, y para fachadas e interiores."
            setter_img(reciclado)
        } else if (valor == "seguridad") {
            document.getElementById("idparrafo").innerHTML = "Un vidrio de seguridad es aquel que en caso de rotura no presenta potencial para causar heridas de consideración a las personas, un concepto adicional y complementario al de la seguridad es el concepto de protección que, en general, está ligado con las propiedades de aquellos vidrios difíciles de ser traspasados por el impacto de personas u objetos."
            setter_img(seguridad)
        } else {
            document.getElementById("idparrafo").innerHTML = "Bienvenido al simulador de SOA, para poder utilizarlo debe elegir un producto de la lista de productos, rellenar con la cantidad de unidades que desea producir y finalmente el rango de fechas que le gustaría dar a su proyecto"
            setter_img(empresa)
        }
    }


    return  (
<div>
 
<ul class="topnav">
    <li><a class="active" href="">Simular</a></li>
    <li><a href="/historico">Mis Simulaciones</a></li>
    <li><a href="/solicitudes">Mis Solicitudes</a></li>

    <li class="right"><a href="../../index.html">Cerrar Sesión</a></li>
</ul>

<body>

    <header class="header">
        <h1 class="titulo">
            Simulador de Vidrio SOA
        </h1>
    </header>

    <section class="lineamiento">
        <form class="conboton">

            <div class="todo">

                <div class="arriba">

                    <div class="inputs">
                    
                        <div class="producto">
                            <div class="labelproducto">
                                <label>Tipo de Producto</label>
                            </div>
                            <div class="seleccionproducto">
                                <select class="seleccionar" id="tipo_usuario" onChange={tipo_producto_index}>
                                    <option value="inputproducto">Lista de Productos</option>
                                    <option value="mueble">Muebles de vidrio</option>
                                    <option value="lyf">Laboratorio y Farmacia</option>
                                    <option value="espejo">Espejos</option>
                                    <option value="reciclado">Vidrio Reciclado</option>
                                    <option value="seguridad">Vidrio de seguridad</option>
                                </select>
                            </div>
                        </div>

                        <div class="cantidad">
                            <div class="labelcantidad">
                                <label>Cantidad</label>
                            </div>
                            <div class="textocantidad">
                                <input class="input inputcantidad" type="text" id="idcantidad" />
                            </div>
                        </div>

                        <div class="fechas">

                            <div class="fechainicio">
                                <div class="labelfechainicio">
                                    <label>Fecha Inicio</label>
                                </div>
                                <div class="textoinicio">
                                    <input class="input inputdateinicio" type="date" id="iddateinicio" />
                                </div>
                            </div>

                            <div class="fechafin">
                                <div class="labelfechafin">
                                    <label>Fecha Fin</label>
                                </div>
                                <div class="textofin">
                                    <input class="input inputdatefin" type="date" id="iddatefin" />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div class="outputs">
                        <img class="foto" id="idfoto" src={simulation_img} />
                    </div>

                    <div class="parrafo">
                        <label class="descripcion" id="idparrafo">Bienvenido al simulador de SOA, para poder utilizarlo debe elegir un producto de la lista de productos, rellenar con la cantidad de unidades que desea producir y finalmente el rango de fechas que le gustaría dar a su proyecto</label>
                    </div>

                </div>

                <div class="boton">
                    {/* <!-- https://getcssscan.com/css-buttons-examples -->  */}
                    <button class="button-86" id="idbotoncalcular" type="button" onclick="window.location.href='./resultados.html';">Calcular</button>
    
                </div>

            </div>

        </form>

    </section>
</body>
</div>  
    )
}

export default Simulacion