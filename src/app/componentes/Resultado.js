import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../css/resultados.css";

function Resultado(props) {
  let history = useNavigate();
  function handleClickCard(params) {
    params.preventDefault();
    history("/central/" + props.planta._id);  
    console.log(params);
    console.log(params.target.value);
  }
  function handleClickBotonBusqueda(params) {
    params.preventDefault();
    params.stopPropagation();
    history("/central/" + props.planta._id);
    console.log(params);
    console.log(params.target.value);
  }

  return (
    <>
      <div className="row">
        <div
          className="example-1 card"
          onClick={handleClickCard}
          style={{ width: "100" }}
        >
          <div className="wrapper">
            <div className="date">
              <span className="day">
                Produccion 2017 {props.planta.estimated_generation_gwh_2017} gwh{" "}
              </span>
            </div>
            <div className="data">
              <div className="content">
                <h1 className="title">
                  <a href="#">{props.planta.name}</a>
                </h1>
                <Card.Body>
                  <Card.Title>{props.planta.name} </Card.Title>
                  <Card.Img
                    variant="top"
                    src="https://th.bing.com/th/id/OIP.BLo-e1Eyvg0Vjxr9VVVBrAHaD4?pid=ImgDet&rs=1"
                    alt="poster"
                  />
                  <Card.Text>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>{props.planta.name} </ListGroup.Item>
                      <ListGroup.Item>
                        Pais: {props.planta.country_long}{" "}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Recurso: {props.planta.source}{" "}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Capacidad: {props.planta.capacity_mw}{" "}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Combustible: {props.planta.primary_fuel}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Latitud: {props.planta.latitude}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Longitud: {props.planta.longitude}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Text>
                  <Button onClick={handleClickBotonBusqueda} variant="primary">
                    Detalles de {props.planta.name}
                  </Button>
                </Card.Body>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resultado;
