import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as centralService from '../services/PlantasService';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";

import "../css/carta.css";

// useParams()=> devuelve todos los parametroe de la URL

export default function Detallecentral() {
  const [central, setCentral] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
      centralService.servicioBusquedaId(id)

          .then(function(datos){
            console.log({datos});
              setCentral(datos.data);
          })
          .catch(function(error){
              console.log(error);
          })
  }, [id]);

  function handleClick(evento) {
    evento.preventDefault();
}

  return (
    <>
      <fielset>
        <legend> Detalle central Eléctrica</legend>
        <div className="contenedor">
          <Card className="carta">
            <div>
              {" "}
              <Card.Img variant="top"   src="https://th.bing.com/th/id/OIP.BLo-e1Eyvg0Vjxr9VVVBrAHaD4?pid=ImgDet&rs=1" alt="poster" />{" "}
            </div>
            
            <div>
              {" "}
              <legend> Datos central Eléctrica: {central.id} </legend>
              <Card.Body>
                <Card.Title>{central.name} </Card.Title>
                <Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item> Pais: {central.country_long}  ({central.country}) </ListGroup.Item>
                    <ListGroup.Item> Capacidad: {central.capacity_mw} Mw </ListGroup.Item>
                    <ListGroup.Item>Latitud: {central.latitude} </ListGroup.Item>
                    <ListGroup.Item>Longitud: {central.longitude}</ListGroup.Item>
                    <ListGroup.Item>Tipo de combustible: {central.primary_fuel}</ListGroup.Item>
                    <ListGroup.Item> Generacion 2017:  {central.estimated_generation_gwh_2017} gwh </ListGroup.Item>
                    <ListGroup.Item>{id}</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
               
      
    
                <Button type="button" className="button login__submit" variant="primary" onClick={handleClick}><NavLink to= "/" >Nueva Busqueda</NavLink></Button>
              </Card.Body>
            </div>
          </Card>
        </div>
      </fielset>
    </>
  );
}
