import "./App.scss";

import { useState } from "react";
import { useLocation } from "react-router-dom";

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
  const [id2, setId2] = useState("null");
  const [id, setId] = useState("null");
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token) => {
    if (token !== null) {
      //Action de connexion
      console.log("Création d'un cookie userTOken");
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      //action de déconnexion
      console.log("Suppression d'un cookie userToken");
      Cookies.remove("userToken");
    }
 ;



    setToken(token);
    console.log(`Mise à jour du state Token avec ${token}`);
  };

  const setIdd = (x) => {
    if (x !== null) {
      setId2(x)
 console.log(id2)
    }
    else {
      console.log(id2)
      console.log("hed")
    }
  }

  return (





    <Router>
      <Header token={token} setUser={setUser} />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/offer/:id" element={<Offer id={id} setIdd={setIdd} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/payment" element={<Payment token={token} id2={id2}/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
