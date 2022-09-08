import { useState, useEffect } from "react";
import * as PlantasServices from "../services/PlantasService";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
            <Navbar.Brand href="#">Energía</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleChangeBarraBusqueda}
                />
                <Button
                  variant="outline-success"
                  onClick={handleClickBotonBusqueda}
                >
                  Search
                </Button>
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
            <Resultado key={index.toString()} planta={resultado} />
          ))}
      </div>
     
    </>
  );
}

export default ResultadoBusqueda;
