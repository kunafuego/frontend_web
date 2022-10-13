import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FAQ from './components/FAQ';
import React from 'react';

function Routing(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<FAQ/>} />
                {/* <Route path={'/FAQ'} element={<FAQ/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;