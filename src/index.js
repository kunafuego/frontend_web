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

window.onscroll = function() {stickyNavbar()};
function stickyNavbar() {
  if (window.pageYOffset >= document.getElementById("topnav").offsetTop) {
    document.getElementById("topnav").classList.add("sticky");
  } else {
    document.getElementByClassName("topnav").classList.remove("sticky");
  }
}

// Función obtenida de https://www.w3schools.com/howto/howto_js_navbar_sticky.asp