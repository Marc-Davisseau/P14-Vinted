import "./App.scss";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";
//components
import Header from "./components/Header/Header";
import Cookies from "js-cookie";



function App() {

  const [id, setId] = useState("null");
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [username, setUsername] = useState(Cookies.get("userName") || null);
  const setUser = (token, username) => {
    if (token !== null) {
      //Action de connexion
      console.log("Création d'un cookie userTOken");
      Cookies.set("userToken", token, { expires: 10 });
      Cookies.set("userName", username, { expires: 10 });
    } else {
      //action de déconnexion
      console.log("Suppression d'un cookie userToken");
      Cookies.remove("userToken");
      Cookies.remove("userName");
    }
 ;




    setToken(token);
    console.log(`Mise à jour du state Token avec ${token}`);
    setUsername(username);
    console.log(`Mise à jour du state Token avec ${username}`);




  };

  
  

  return (





    <Router>
      <Header token={token} username={username} setUser={setUser} />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/offer/:id" element={<Offer id={id}/>} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/payment" element={<Payment token={token} />}/>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
