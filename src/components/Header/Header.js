import { Link, useNavigate, useRoutes } from "react-router-dom";
import "./header.scss";

const Header = ({ token, setUser }) => {console.log(window.location.pathname)
  const navigate = useNavigate();
  return (  
    <header className="header-component">

      <p style = {{ display : (window.location.pathname=== "/" && "/home") ? "none":""} }   ><Link to="/">Accueil</Link></p>
      {token === null ? (
        <div className="menu">
          <section>      <Link to="/signup">S'inscrire</Link></section>
          <section>    <Link to="/login">Se connecter</Link></section>
          <section>         <Link to="/login">Vends tes articles</Link></section>

 
        </div>
      ) : (

<div>
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
           <Link to="/publish">Vends tes articles</Link>
       </div>
       <div>
 
       </div>
       </div>
      )}
    </header>
  );
};

export default Header;
