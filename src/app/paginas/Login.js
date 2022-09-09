import { useState } from "react";
import { useNavigate } from "react-router";
import * as UsuariosService from "../services/UsuariosService";
import "../css/login.css";


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
        <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input"  name="usuario" id="usuario" onChange={handleChange} value={usuario} placeholder="User name / Email"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" name="clave" id="clave" onChange={handleChange} value={clave} placeholder="Password"/>
				</div>
				<button className="button login__submit" onClick={handleClick}>
					<span className="button__text">Iniciar</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div className="social-login">
				<h3>Inicie sesión</h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
           {/*  <div className="text-center mt-5">
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
            </div> */} 
        </>
    )
}