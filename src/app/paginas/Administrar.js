import React from 'react'
import React from "react";
import DetalleGeneral from "../componentes/DetalleGeneral";
import Detalle from '../componentes/Detalle';
import plantas from "../../generacionElectrica.json";

export default function Administrar() {
  return (
    <>
      <fieldset>
        <legend>Detalle Plantas</legend>
        <div>
          <h1></h1>
          <div>
            {" "}
            <img
              alt="poster"
              src="https://th.bing.com/th/id/OIP.BLo-e1Eyvg0Vjxr9VVVBrAHaD4?pid=ImgDet&rs=1"
            />{" "}
          </div>
          <div>
            <fieldset>
              <legend> año </legend>
              <span>2004</span>
            </fieldset>
            <fieldset>
              <legend> Produccion </legend>
              <span>999</span>
            </fieldset>
            <fieldset>
              <legend> Tipo  </legend>
              <span>Solar</span>
            </fieldset>
          </div>
          <div>
            <p>Sinopsis</p>
          </div>
          <hr></hr>
          <hr></hr>
        </div>
        <fieldset>
          <legend>Detalle</legend>
          <DetalleGeneral plantas={plantas} />
        </fieldset>
        <fieldset>
          <legend>Detalle</legend>
          <Detalle plantas={plantas} />
        </fieldset>
      </fieldset>

     </>
  );
}





