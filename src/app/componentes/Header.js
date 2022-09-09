import { NavLink } from "react-router-dom";
import "../css/header.css";

export default function Header(props) {

    function handleClick(evento) {
        evento.preventDefault();
    }
  return (
    <>
    
    <div className="header">
         <button className="button login__submit" type="button"  onClick={handleClick} name="btnini">
      <NavLink to= "/Login/" >Iniciar Sesion</NavLink>
      </button>
      <button className="button login__submit" type="button" onClick={handleClick} name="btnfin">
      <NavLink to= "/" >Finalizar Sesion</NavLink>  
      </button> 
      
    </div>
    <div ><h1>Api Generacion electrica mundial</h1></div>
    <br></br>
    
    {props.children}
    </>
  );
}
