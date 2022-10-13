import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FAQ from './components/FAQ';
import Landing from './components/landing'; 
import React from 'react';
import Nosotros from './components/nosotros';
import About from './components/about';
import Inicio from './components/inicio_sesion';
import Registro from './components/registro';

function Routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Landing/>} />
                <Route path={'/FAQ'} element={<FAQ/>} />
                <Route path={'/nosotros'} element={<Nosotros/>} />
                <Route path={'/about'} element={<About/>} />
                <Route path={'/inicio_sesion'} element={<Inicio/>} />
                <Route path={'/registro'} element={<Registro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;