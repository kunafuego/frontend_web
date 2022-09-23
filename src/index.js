function tipo_input(valor){
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

function tipo_producto(valor){
    if (valor == "mueble"){
        document.getElementById("idparrafo").innerHTML = "Estos muebles utilizan un sistema de pegado ultravioleta invisible, líquido e incoloro. Se puede pegar vidrio con vidrio o vidrio con acero. Su principal característica es proyectar transparencia y claridad al interior del lugar incorporando la más alta calidad y tecnología en el proceso de pegado de cristales."
        document.getElementById("idfoto").src = "../assets/imgs/mueble.jpeg"
    } else if (valor == "lyf") {
        document.getElementById("idparrafo").innerHTML = "La cristalería de laboratorio se refiere a una variedad de equipos utilizados en el trabajo científico y tradicionalmente hechos de vidrio. El vidrio se puede soplar, doblar, cortar, moldear y formar en muchos tamaños y formas y, por lo tanto, es común en los laboratorios de química, biología y análisis."
        document.getElementById("idfoto").src = "../assets/imgs/laboratorio.jpeg"
    } else if (valor == "espejo") {
        document.getElementById("idparrafo").innerHTML = "Los espejos modernos consisten en una delgada capa de plata o aluminio depositado sobre una plancha de vidrio, la cual protege el metal y hace al espejo más duradero. Este proceso se conoce como plateado."
        document.getElementById("idfoto").src = "../assets/imgs/espejo.jpeg"
    } else if (valor == "reciclado") {
        document.getElementById("idparrafo").innerHTML = "Tiene una gran cantidad de usos y aplicaciones. Para la fabricación de mosaicos y azulejos, para encimeras de cuartos de baño y cocinas, para la fabricación de todo tipo de envases, y para fachadas e interiores."
        document.getElementById("idfoto").src = "../assets/imgs/reciclado.jpeg"
    } else if (valor == "seguridad") {
        document.getElementById("idparrafo").innerHTML = "Un vidrio de seguridad es aquel que en caso de rotura no presenta potencial para causar heridas de consideración a las personas, un concepto adicional y complementario al de la seguridad es el concepto de protección que, en general, está ligado con las propiedades de aquellos vidrios difíciles de ser traspasados por el impacto de personas u objetos."
        document.getElementById("idfoto").src = "../assets/imgs/seguridad.jpeg"
    } else {
        document.getElementById("idparrafo").innerHTML = "Bienvenido al simulador de SOA, para poder utilizarlo debe elegir un producto de la lista de productos, rellenar con la cantidad de unidades que desea producir y finalmente el rango de fechas que le gustaría dar a su proyecto"
        document.getElementById("idfoto").src = "../assets/imgs/fotoprueba.png"
    }
}

window.onscroll = function() {stickyNavbar()};
function stickyNavbar() {
  if (window.pageYOffset >= document.getElementById("topnav").offsetTop) {
    document.getElementById("topnav").classList.add("sticky");
  } else {
    document.getElementByClassName("topnav").classList.remove("sticky");
  }
}

// Función obtenida de https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
