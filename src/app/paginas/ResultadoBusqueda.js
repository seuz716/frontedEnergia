import { useState, useEffect } from "react";
import * as PlantasServices from "../services/PlantasService";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Resultado from "../componentes/Resultado";
// import Busqueda from "../../Busqueda";

import "../css/resultados.css";

function ResultadoBusqueda() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    if (busqueda.length >= 3) {
      PlantasServices.servicioBusquedaNombre(busqueda)
      .then(function (central) {
        setResultados(central.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      setResultados([]);
    }
  }, [busqueda]);

  function handleChangeBarraBusqueda(params) {
    params.preventDefault();
    params.stopPropagation();
    let tituloPlanta = params.target.value;
    // console.log( tituloPlanta.length );
    setBusqueda(tituloPlanta);
  }

  function handleClickBotonBusqueda(params) {
    params.preventDefault();
    params.stopPropagation();
    console.log(params);
    console.log("texto de busqueda: " + params.target.value);
  }

  return (
    <>
    <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Busqueda de centrales de generación de energía electrica</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              
              <Form className="d-flex ">
                <Form.Control
                  type="Busqueda"
                  placeholder="Busque por nombre Central eléctrica"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleChangeBarraBusqueda}
                />
                
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
     <div>
      <legend>listando plantas</legend> 
      </div>
      <div>
        {" "}
        <span> Mostrando resultados para: {busqueda} </span>
      </div>
      <div className="resultados">
        {resultados &&
          resultados.length > 0 &&
          resultados.map((resultado, index) => (
            <Resultado clasName="result" key={index.toString()} planta={resultado} />
          ))}
      </div>
     
    </>
  );
}

export default ResultadoBusqueda;
