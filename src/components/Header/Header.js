import { Link, useNavigate } from "react-router-dom";
import "./header.scss";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  return (
    <header className="header-component">
      <p>My header !</p>
      {token === null ? (
        <div>
          <Link to="/signup">S'inscrire</Link>
          <br />
          <Link to="/login">Se connecter</Link>
          <br />
          <Link to="/login">Vends tes articles</Link>
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
       </div>
      )}
    </header>
  );
};

export default Header;
