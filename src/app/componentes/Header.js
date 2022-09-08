import { NavLink } from "react-router-dom";
export default function Header(props) {

    function handleClick(evento) {
        evento.preventDefault();
    }
  return (
    <>
    <div className="header">
      <button type="button" onClick={handleClick} name="btnini">
      <NavLink to= "/Login/" >Iniciar Sesion</NavLink>
      </button>
      <button type="button" onClick={handleClick} name="btnfin">
      <NavLink to= "/" >Finalizar Sesion</NavLink>  
      </button>
    </div>
    
    {props.children}
    </>
  );
}
