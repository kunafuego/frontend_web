import React from "react";

function Landing(props) {
    return(     
<div>

<body>

<ul class="topnav" id="topnav">
    <li><a class="active" href="">Inicio</a></li>
    <li><a href="/nosotros">Sobre Nosotros</a></li>
    <li><a href="/about">Sobre la Página</a></li>
    <li><a href="/FAQ">Preguntas Frecuentes</a></li>
    <li class="right"><a href="/registro">Registrar</a></li>
    <li class="right"><a href="/inicio_sesion">Iniciar Sesión</a></li>
</ul>

<div class="landing">

    <div class="box-foto">

        <div class ="texto-box">
            <h1> SOA (Simula, Optimiza, Ahorra) </h1> 
        </div>

        <div class ="caja">

            <div class ="texto1">
                <label>Ingrese el producto y cantidad a producir</label>
            </div>

            <div class ="fotos1">
                

                <div class ="label1">
                    <label>Producto</label>
                </div>


                <div class ="label2">
                    <label>Cantidad</label>
                </div>


                <div class ="label3">
                    <label>Simular</label>
                </div>

            </div>

            <div class ="texto2">
                <label>Y obten la información que necesitas</label>
            </div>

            <div class ="fotos2">
                <img class="fotoline" id="idfoto11" src="./src/assets/imgs/line-chart.png" />
                <img class="fotopie" id="idfoto12" src="./src/assets/imgs/pie.png" />
                <img class="fotobar" id="idfoto13" src="./src/assets/imgs/bar-chart.png" />
            </div>

        </div>

        <div class = "contenido">
            <div class="h2-contenido">
            <h2>Si deseas acceder a la simulación, sigue a alguna de estas dos rutas:</h2>
            </div>
            <div class = "boton_grid">
                <button onclick="window.location.href='./src/views/inicio_sesion.html';" class="button-72" >Iniciar Sesión</button>
            </div>
            <div class = "boton_grid">
                <button onclick="window.location.href='./src/views/registro.html';" class="button-73"> Registrar</button>
            </div>
        </div>

    </div>

    <div class="lower">
        <div class = "descripcion">
            <button onclick="window.location.href='./src/views/simulacion.html';" class="button-46" >Homepage para usuario loggeado</button>
        </div>

    </div>

    <div class="transparent">
        <section>
            <form class="conboton">
    
                <div class="todo">
    
                    <div class="arriba1">
    
                        <div class="inputs">
                        
                            <div class="producto">
                                <div class="labelproducto">
                                    <label>Tipo de Producto</label>
                                </div>
                                <div class="seleccionproducto">
                                    <span>
                                    <select class="seleccionar" id="tipo_usuario1" onchange="tipo_producto_index(this.value)">
                                        <option value="inputproducto">Lista de Productos</option>
                                        <option value="mueble">Muebles de vidrio</option>
                                        <option value="lyf">Laboratorio y Farmacia</option>
                                        <option value="espejo">Espejos</option>
                                        <option value="reciclado">Vidrio Reciclado</option>
                                        <option value="seguridad">Vidrio de seguridad</option>
                                        </select>
                                </span>
                                </div>
                            </div>
    
                            <div class="cantidad">
                                <div class="labelcantidad1">
                                    <label>Cantidad</label>
                                </div>
                                <div class="textocantidad1">
                                    <input class="input inputcantidad" type="text" id="idcantidad1" value=""/>
                                
                                </div>
                            </div>
    
                            <div class="fechas">
    
                                <div class="fechainicio">
                                    <div class="labelfechainicio1">
                                        <label>Fecha Inicio</label>
                                    </div>
                                    <div class="textoinicio1">
                                        <input class="input inputdateinicio" type="date" id="iddateinicio1" value=""/>
                                    </div>
                                </div>
    
                                <div class="fechafin">
                                    <div class="labelfechafin1">
                                        <label>Fecha Fin</label>
                                    </div>
                                    <div class="textofin1">
                                        <input class="input inputdatefin" type="date" id="iddatefin1" value=""/>
                                    </div>
                                </div>
    
                            </div>
    
                        </div>
    
                        <div class="outputs">
                            <img class="foto" id="idfoto1" src="./src/assets/imgs/empresa.jpeg" />
                        </div>
    
                        <div class="parrafo">
                            <label class="descripcion" id="idparrafo1">Bienvenido al simulador de SOA, para poder utilizarlo debe elegir un producto de la lista de productos, rellenar con la cantidad de unidades que desea producir y finalmente el rango de fechas que le gustaría dar a su proyecto</label>
                        </div>
    
                    </div>
    
                </div>
    
            </form>
    
        </section>

    </div>



</div>

</body>

</div>
)
}

export default Landing;