import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import { useState } from "react";


const Header = ({ token, setUser, username }) => {console.log(window.location.pathname)
  const navigate = useNavigate();
  const [term, setTerm] = useState()
  
   
  return (  
    <header className="header-component">

  
      {token === null ? (
        <div className="menu">


          <p style = {{ display : (window.location.pathname=== "/" && "/home") ? "none":""} }>
            
          <button
          onClick={()=> navigate ("/")}>Accueil</button></p>

  
         <button
          onClick={()=> navigate ("/login")}>S'inscrire | Se connnecter</button>
          
              </div>
      
      ) : (


        

<div>
<button
          onClick={()=> navigate ("/")}>Accueil</button>
        <button
          onClick={() => {
            //Je me déconnecte et je redirige l'utilsateur vers la home page
            setUser(null);
            navigate("/");
          }}
        >
          Se déconnecter
        </button>
       <div>
           <Link to="/publish">Vends tes articles !</Link>
       </div>
       <div>Vendeur: {username}</div>
       <div>
 
       </div>
       </div>
      )}
    </header>
  );
};

export default Header;
