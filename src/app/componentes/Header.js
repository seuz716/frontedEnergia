import { NavLink } from "react-router-dom";
import "../css/header.css";

export default function Header(props) {

    function handleClick(evento) {
        evento.preventDefault();
    }
  return (
    <>
    
    <div className="header">
      
      
    </div>
    <div ><h1>Api Generacion electrica mundial</h1>
    </div>
    <br></br>
    
    {props.children}
    </>
  );
}
