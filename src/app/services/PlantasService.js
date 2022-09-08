import { URL_API } from "../config/config";

export function servicioBusquedaNombre(nombre) {
  const path = "/centrales/obtenercentralPorNombre/" + nombre;
  const config = {
    method: "GET",
    mode: "cors"
  };
  return fetch(URL_API + path, config)
    .then(function (respuesta) {
      if (respuesta.status === 200) {
        return respuesta.json();
      } else {
        return Promise.reject(respuesta.statusText);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function servicioBusquedaId(id) {
  const path = "/centrales/obtenerCentral/" + id;
  const config = {
    method: "GET",
    mode: "cors",
  };
  return fetch(URL_API + path, config)
    .then(function (respuesta) {
      if (respuesta.ok) {
        return respuesta.json();
      } else {
        return Promise.reject(respuesta.statusText);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function servicioBusquedaPais(pais) {
  const path = "/centrales/obtenercentralPorPais/" + pais;
  const config = {
    method: "GET",
    mode: "cors",
  };
  return fetch(URL_API + path, config)
    .then(function (respuesta) {
      if (respuesta.ok) {
        return respuesta.json();
      } else {
        return Promise.reject(respuesta.statusText);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
