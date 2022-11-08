import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FAQ from './components/FAQ';
import Landing from './components/landing'; 
import React from 'react';
import Nosotros from './components/nosotros';
import About from './components/about';
import Inicio from './components/inicio_sesion';
import Registro from './components/registro';
import Historico from './components/historico';
import Resultados from './components/resultados';
import Solicitudes from './components/solicitudes';
import Simulacion from './components/simulacion';
import CookieAuthProvider from './contexts/cookieAuth';

function Routing(){
    return(
        <BrowserRouter>
            <CookieAuthProvider>
                <TokenAuthProvider>
                    <Routes>
                        <Route path={'/'} element={<Landing/>} />
                        <Route path={'/FAQ'} element={<FAQ/>} />
                        <Route path={'/nosotros'} element={<Nosotros/>} />
                        <Route path={'/about'} element={<About/>} />
                        <Route path={'/inicio_sesion'} element={<Inicio/>} />
                        <Route path={'/registro'} element={<Registro/>} />
                        <Route path={'/historico'} element={<Historico/>} />
                        <Route path={'/resultados'} element={<Resultados/>} />
                        <Route path={'/solicitudes'} element={<Solicitudes/>} />
                        <Route path={'/simulacion'} element={<Simulacion/>} />
                    </Routes>
                </TokenAuthProvider>
            </CookieAuthProvider>
        </BrowserRouter>
    )
}

export default Routing;