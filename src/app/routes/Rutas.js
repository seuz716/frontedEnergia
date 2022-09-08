import ResultadoBusqueda from "../paginas/ResultadoBusqueda";
import { Routes, Route } from "react-router-dom";
import DetallePlanta from "../paginas/DetalleCentral";
import Detallado from "../paginas/Detallado";
import ResultadoPais from "../paginas/ResultadoPais";
import Login from "../paginas/Login";
import Header from "../componentes/Header";
import Administrar from "../paginas/Administrar";


export function Rutas() {
  return (
    <>
    <Header/>
    
        <Routes>
          <Route path="/" element={<ResultadoBusqueda />}></Route>
          <Route path="/central/:id" element={<DetallePlanta />}></Route>
          <Route path="/centralPais/" element={<ResultadoPais />}></Route>
          <Route path="/centrales" element={<Detallado />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/administrar" element={<Administrar/>}></Route>
          
            
        </Routes>
     
    </>
  );
}
