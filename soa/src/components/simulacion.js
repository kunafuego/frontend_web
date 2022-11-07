import React, { useState, useEffect } from 'react';
import axios from 'axios';
import empresa from '../assets/imgs/empresa.jpeg';
import mueble from '../assets/imgs/mueble.jpeg';
import laboratorio from '../assets/imgs/laboratorio.jpeg';
import espejo from '../assets/imgs/espejo.jpeg';
import reciclado from '../assets/imgs/reciclado.jpeg';
import seguridad from '../assets/imgs/seguridad.jpeg';
import Slider from './slider.js';
import Navbar from './navbar';
import { Navigate, useNavigate } from 'react-router-dom';
export const SERVER_URL = process.env.REACT_APP_SERVER_URL;


function Simulacion(props){
    const [initial_product, setter_product] = useState("")
    const [product_lists, setProducts] = useState([])
    const [simulation_img, setter_img] = useState(empresa)
    const navigate = useNavigate();
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
        .catch((error) =>
        alert(`[${error.response.status}] ${error.response.data}`)
        );
    };
        get_products();
    }, []);



    const newSimulation = async (event) => {
        const url = `${SERVER_URL}/simulacions/new`;
        const body = {
            nombre: document.getElementById("nombre_simulacion_id").value,
            fecha_inicio: document.getElementById("iddateinicio").value,
            fecha_fin: document.getElementById("iddatefin").value,
            producción: document.getElementById("sliderid").value,
            producto: document.getElementById("tipo_producto").value,
        };
        await axios
        .post(url, body)
        .then((response) => {
            navigate("/historico");
        })
        .catch((error) =>
            alert(`[${error.response.status}] ${error.response.data}`)
        );
        event.stopPropagation();
    };


    return  (
<div>
 
    <Navbar />


    <header className="header">
        <h1 className="titulo">
            Simulador de Vidrio SOA
        </h1>
    </header>

    <section className="lineamiento">
        <form className="conboton">

            <div className="todo">

                <div className="arriba">

                    <div className="inputs">
                    
                        <div className="nombre">
                            <div className="labelnombre">
                                <label >Nombre Simulación</label>
                            </div>
                            
                            <div className="nombre_simulacion">
                                <input className="nombre_input" type="text" id="nombre_simulacion_id"/>
                            </div>
                        </div>

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
                                <div className="labelfechainicio">
                                    <label>Fecha Inicio</label>
                                </div>
                                <div className="textoinicio">
                                    <input className="input inputdateinicio" type="date" id="iddateinicio" />
                                </div>
                            </div>

                            <div className="fechafin">
                                <div className="labelfechafin">
                                    <label>Fecha Fin</label>
                                </div>
                                <div className="textofin">
                                    <input className="input inputdatefin" type="date" id="iddatefin" />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="outputs">
                        <img className="foto" id="idfoto" src={simulation_img} />
                    </div>

                    <div className="parrafo">
                        <label className="descripcion" id="idparrafo">Bienvenido al simulador de SOA, para poder utilizarlo debe elegir un producto de la lista de productos, rellenar con la cantidad de unidades que desea producir y finalmente el rango de fechas que le gustaría dar a su proyecto</label>
                    </div>

                </div>

                <div className="boton">
                    {/* <!-- https://getcssscan.com/css-buttons-examples -->  */}
                    <button className="button-86" id="idbotoncalcular" type="button" onClick={newSimulation}>Calcular</button>
    
                </div>

            </div>

        </form>

    </section>
</div>  
)
}

export default Simulacion