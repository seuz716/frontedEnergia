import { URL_API } from "../config/config";

export function servicioIniciarSesion(usuario, clave){

    const path = "/usuarios/iniciarSesion?usuario=" + usuario + "&clave=" + clave;
    
    const config = {
        method : "GET",
        mode : "cors"
    };

    return fetch(URL_API + path, config)
        .then(function(resultado){
            if(resultado.ok){
                
               
                return resultado.json();
              
            }
            else{
                return Promise.reject(resultado.statusText);
            }
        })
        .catch(function(error){
            console.log(error);
        });
}
