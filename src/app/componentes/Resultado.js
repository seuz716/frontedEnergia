import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


function Resultado(props) {
  let history = useNavigate();
  function handleClickCard(params) {
    params.preventDefault();
    history("/central/" + props.planta._id);
    alert("Mostrar detalle de la central");
    console.log(params);
    console.log(params.target.value);
  }
  function handleClickBotonBusqueda(params) {
    params.preventDefault();
    params.stopPropagation();
    console.log(params);
    console.log(params.target.value);
  }

  return (
    <>
      <Card onClick={handleClickCard} style={{ width: "18rem" }}>
        <Card.Img variant="top"   src="https://th.bing.com/th/id/OIP.BLo-e1Eyvg0Vjxr9VVVBrAHaD4?pid=ImgDet&rs=1" alt="poster" />
        <Card.Body>
          <Card.Title>{props.planta.name} </Card.Title>
          <Card.Text>
            <ListGroup className="list-group-flush">
              
            <ListGroup.Item>{props.planta._id} </ListGroup.Item> 
              <ListGroup.Item>Pais: {props.planta.country_long} </ListGroup.Item>
              <ListGroup.Item>Recurso: {props.planta.source} </ListGroup.Item>
              <ListGroup.Item>Capacidad: {props.planta.capacity_mw} </ListGroup.Item>
              <ListGroup.Item>Combustible: {props.planta.primary_fuel}</ListGroup.Item>
              <ListGroup.Item>Latitud: {props.planta.latitude}</ListGroup.Item>
              <ListGroup.Item>Longitud: {props.planta.longitude}</ListGroup.Item>
            </ListGroup>
          </Card.Text>
          <Button onClick={handleClickBotonBusqueda} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Resultado;
