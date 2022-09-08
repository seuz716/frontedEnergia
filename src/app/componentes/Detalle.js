import React from "react";

export default function Detalle(props) {
  return (

    
    <>
     {props.plantas.map(planta =>(
        
             <table className="default">
             <tr>
               <th scope="row">Generacion anual Planta</th>
     
               <th>2015 </th>
     
               <th>2016</th>
     
               <th>2017</th>
             </tr>
     
             <tr>
               <th>Generación</th>
     
               <td>{planta.estimated_generation_gwh_2015} </td>
     
               <td>{planta.estimated_generation_gwh_2016}</td>
     
               <td>{planta.estimated_generation_gwh_2017} </td>
             </tr>
     
           </table>
        
    ) ) }

 
    </>
  );
}
