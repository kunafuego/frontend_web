import React, { useState, useEffect }from "react";
import line_chart from '../assets/imgs/line-chart.png';
import pie from '../assets/imgs/pie.png';
import bar_chart from '../assets/imgs/bar-chart.png';
import empresa from '../assets/imgs/empresa.jpeg';
import mueble from '../assets/imgs/mueble.jpeg';
import laboratorio from '../assets/imgs/laboratorio.jpeg';
import espejo from '../assets/imgs/espejo.jpeg';
import reciclado from '../assets/imgs/reciclado.jpeg';
import seguridad from '../assets/imgs/seguridad.jpeg';
import axios from 'axios';
import Slider from './slider.js';   
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Landing(props) {
    const [initial_product, setter_product] = useState("")
    const [product_lists, setProducts] = useState([])
    const [simulation_img, setter_img] = useState(empresa)

    const handleButton = (e) => {
        
    }

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

    useEffect( () => {
        const get_products = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/productos`;
        await axios
        .get(url)
        .then((response) => {
            setProducts(response.data);
        })
        // .catch((error) =>
        //     alert(`[${error.response.status}] ${error.response.data}`)
        // );
    };
        get_products();
    }, []);



    return(     
<div>

    <Navbar />

<div className="landing">

    <div className="box-foto">

        <div className ="texto-box">
            <h1> SOA (Simula, Optimiza, Ahorra) </h1> 
        </div>

        <div className="caja">
            <div className ="texto1">
                <label>Ingrese el producto y cantidad a producir</label>
            </div>

            <div className ="fotos1">
                
                <div className ="label1">
                    <label>Producto</label>
                </div>

                <div className ="label2">
                    <label>Cantidad</label>
                </div>

                <div className ="label3">
                    <label>Simular</label>
                </div>
            </div>

            <div className ="texto2">
                <label>Y obten la información que necesitas</label>
            </div>

            <div className ="fotos2">
                <img className="fotoline" id="idfoto11" src={line_chart} />
                <img className="fotopie" id="idfoto12" src={pie} />
                <img className="fotobar" id="idfoto13" src={bar_chart} />
            </div>
        </div>

        <div className = "contenido">
            <div className="h2-contenido">
                <h2>Si deseas acceder a la simulación, sigue a alguna de estas dos rutas:</h2>
            </div>
            <div className = "boton_grid">
                <button onClick={event => window.location.href='/inicio_sesion'} className="button-72" >Iniciar Sesión</button>
            </div>
            <div className = "boton_grid">
                <button onClick={event => window.location.href='/registro'} className="button-73"> Registrar</button>
            </div>
        </div>
    </div>

    <div className="transparent">
        <section>
            <form className="conboton">
                <div className="todo">
                    <div className="arriba1">
                        <div className="inputs">

                            <div className="producto">
                                <div className="labelproducto">
                                    <label>Tipo de Producto</label>
                                </div>
                                <div className="seleccionproducto">
                                    <select className="seleccionar" id="tipo_producto" onChange={tipo_producto_index}>
                                    {product_lists.map((product) => {
                                        return (
                                            <option value={product.nombre}>{product.nombre}</option>
                                        );
                                    })}
                                    </select>
                                </div>
                            </div>

                            <div className="slidecontainer">
                                <Slider />
                            </div>
    
                            <div className="fechas">
                                <div className="fechainicio">
                                    <div className="labelfechainicio1">
                                        <label>Fecha Inicio</label>
                                    </div>
                                    <div className="textoinicio1">
                                        <input className="input inputdateinicio" type="date" id="iddateinicio1"/>
                                    </div>
                                </div>
    
                                <div className="fechafin">
                                    <div className="labelfechafin1">
                                        <label>Fecha Fin</label>
                                    </div>
                                    
                                    <div className="textofin1">
                                        <input className="input inputdatefin" type="date" id="iddatefin1"/>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="outputs">
                            <img className="foto" id="idfoto1" src={simulation_img} />
                        </div>
    
                        <div className="parrafo">
                            <label className="descripcion" id="idparrafo">Bienvenido al simulador de SOA, para poder utilizarlo debe elegir un producto de la lista de productos, rellenar con la cantidad de unidades que desea producir y finalmente el rango de fechas que le gustaría dar a su proyecto</label>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</div>


</div>
)
}

export default Landing;