import { useState } from "react";
import { useNavigate } from "react-router";
import * as UsuariosService from "../services/UsuariosService";


// Formik -> Manipular formularios.

export default function Login(props){
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const navigate = useNavigate();

    function handleChange(evento){
        if(evento.target.name === "usuario"){
            setUsuario(evento.target.value);
        }
        
        if (evento.target.name === "clave"){
            setClave(evento.target.value);
        }
    }

    function handleClick(evento){
        evento.preventDefault();
        UsuariosService.servicioIniciarSesion(usuario, clave)
            .then(function(resultadosUsuarios){
                if(resultadosUsuarios.token){
                    
                    const datosUsuario = {
                        token : resultadosUsuarios.token,
                        nombre : resultadosUsuarios.nombre,
                        roles : resultadosUsuarios.roles
                    }
                    localStorage.setItem("auth", JSON.stringify(datosUsuario) );
                  
                    navigate("/administrar");
                }
                else{
                    console.log(usuario+clave);
                }
            })
            .catch(function(error){
                console.log(error);
            });
    }

    return(
        <>
            <div className="text-center mt-5">
                <form className="inicioSesion">
                    <img className="imagen" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mejores-peliculas-2021-1640687462.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*" alt="foto"></img>
                    <fieldset>
                    <legend className="h3 mb-3 font-weight-normal">Iniciar Sesión</legend>
                     <div>
                            <label className="sr-only" htmlFor="usuario">Usuario: </label>
                            <input className="form-control" type="text" name="usuario" id="usuario" onChange={handleChange} value={usuario} />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="clave">Contraseña: </label>
                         <input className="form-control"  type="password" name="clave" id="clave" onChange={handleChange} value={clave} />
                        </div>
                        <div className="mt-3">
                            <button clas type="button"  className="btn btn-lg btn-primary btn-block" onClick={handleClick}>Iniciar Sesión</button>
                        </div>
                    </fieldset>
                </form>
            </div> 
        </>
    )
}