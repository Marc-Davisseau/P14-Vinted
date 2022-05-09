import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
//   const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [interest, setInterest] =useState(false);
  const [file, setFile] = useState({});

const userToken = token 

  const navigate = useNavigate();

  const handlePublish = async (event) => {


console.log(userToken)

    
        try {
            event.preventDefault();

            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
            
          
            {
                title: title,
                description: description,
                price: price,
                condition: condition,
                city: city,
                brand: brand,
                size: size,
                color: color,
                picture: file// le fichier image sélectionné par l'utilisateur
              }, 
{
                headers: {
                  authorization: `Bearer ${token}`
                }}
            );
            console.log(response.data);
      if (response.data) {
    
              // redirection
              navigate("/");
            
          } }catch (error) {
            console.log(error.message);
          }
 }





  return (
    <form onSubmit={handlePublish}>
      <h1>Vends ton article</h1>


      <form
          onSubmit={async e => {
            e.preventDefault();

            const formData = new FormData();
            formData.append("files", file);

            try {
              const response = await axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,
                {
                  headers: {
                    Authorization: "Bearer " + userToken,
                    "Content-Type": "multipart/form-data"
                  }
                }
              );

              alert(JSON.stringify(response.data));
            } catch (err) {
              if (err.response.status === 500) {
                console.error("An error occurred");
              } else {
                console.error(err.response.data.msg);
              }
            }
          }}
        >
            <input
            type="file"
            onChange={event => {
              setFile(event.target.files[0]);
            }}
          />
          <input type="submit" />
        </form>


      <br />
      <input
        type="text"
        placeholder="ex:Chemise Sézane"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Décris ton article"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="ex: Zara"
        value={brand}
        onChange={(event) => setBrand(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="ex:L/40/12"
        value={size}
        onChange={(event) => setSize(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="ex:Fushia"
        value={color}
        onChange={(event) => setColor(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="neuf avec étiquette"
        value={condition}
        onChange={(event) => setCondition(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="ex: Paris"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="0,00€"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <br />
      <input
        type="checkbox"
        value={interest}
        onChange={(event) => setInterest(!interest)}
      /> Je suis intéressé(e) par les échanges
      <br />

      <input type="submit" value="Ajouter" 
      onSubmit={handlePublish}
      
      />
      <br />
    </form>
  );
};

export default Publish;