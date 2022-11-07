import React from "react";
import Navbar from "./navbar"
import perfil from '../assets/imgs/perfil.png'
import perfil_pablo from '../assets/imgs/perfil_pablo.jpeg'

function Nosotros(props) {
    return (
<div>
    <header>
        <Navbar />
        
        <title>Sobre Nosotros</title>

    </header>

        <div className="nosotros">
            <h1 className="titulo">Sobre Nosotros</h1>

            <div className="sub">
                <h3 className="probandos">Somos el equipo creador de SOA, conformado por:</h3>
            </div>

            <section className="grid_nosotros">
                <div className="domingo">
                    <div className="grid_item_nosotros" id="item_1">
                        <img className="imagen_nosotros" src={perfil} />
                        <h3 className="nombre_nosotros"> Domingo Agüero Ureta</h3>
                        <h3 className="cargo_nosotros"> Co-Fundador SOA</h3>
                        <div className="texto_escondido" id="texto_escondido_domingo">
                            Estudiante de Ingeniería Civil en la Pontificia Universidad Católica de Chile. Cursando 
                            un major en Ingeniería de Software y un minor en Data Science. <br />
                            Muy apasionado por el atletismo y los deportes outdooor. También le gustan el Rock, el fútbol y salir con sus amigos.
                        </div>
                    </div>

                    {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4dVbhS6OiYvFikshyaQaCN?utm_source=generator" width="40%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> <br /> */}

                </div>

                <div className="pablo">

                    <div className="grid_item_nosotros" id="item_2">
                        <img className="imagen_nosotros" src={perfil_pablo} />
                        <h3 className="nombre_nosotros"> Pablo San Francisco Rolla</h3>
                        <h3 className="cargo_nosotros"> Co-Fundador SOA</h3>
                        <div className="texto_escondido" id="texto_escondido_pablo">
                            Estudiante de Ingeniería Civil en la Pontificia Universidad Católica de Chile. Cursando 
                            un major en Ingeniería de Software y un minor en Data Science. <br />
                            Pablo disfruta mucho jugar ligas de fútbol con sus amigos y salir con sus amigos y amigas de noche. <br />
                            <a href="https://laligapp.com/torneo/detalle/campeonato-clausura-1ra-division-2022/equipo/panzetas">El equipo de Pablo</a>
                        </div>
                    </div>

                    {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0q6LuUqGLUiCPP1cbdwFs3?utm_source=generator" width="40%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> <br /> */}
                </div>
            </section>
        </div>
</div>
)
}

export default Nosotros;