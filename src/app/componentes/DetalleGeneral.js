import React from 'react';


export default function DetalleGeneral(props) {

    
  return (
    <> 
   <div>
    <ul>
    <legend> generacionElectrica</legend>
    {props.plantas.map((planta, key) => (
        <li  key={key} >  <h2>Nombre</h2> <h3>{planta.name}</h3> <h2> Produccion:  {planta.capacity_mw}</h2>  
        </li>
    ) ) }
    </ul>
   </div>
    </>
  )
   
}
