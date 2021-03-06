import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [interest, setInterest] =useState(false);
  const [picture, setPicture] = useState({});
const userToken = token 
  const navigate = useNavigate();
  console.log(token);

  return (
 
<section>
      <div className="main">


      <form
          onSubmit={async e => {
            e.preventDefault();
            const formData = new FormData();
            formData.append("picture", picture);
            formData.append("product_name", title);
            formData.append("product_description", description);
            formData.append("product_price", price);
            formData.append("product_details_etat", condition);
            formData.append("product_details_emplacement", city);
            formData.append("product_details_marque",  brand);
            formData.append("product_details_taille", size);
            formData.append("product_details_couleur", color);
        
            try {
              const response = await axios.post(
            "https://vintedback-mda.herokuapp.com/offer/publish",
                formData,
                {
                  headers: {
                    Authorization: "Bearer " + userToken,
                    "Content-Type": "multipart/form-data"
                  }
                }
              )
              alert(JSON.stringify(response.data));
              navigate("/")
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
              setPicture(event.target.files[0]);
            }}
          />
      <br />
      <input
        type="text"
        placeholder="ex:Chemise S??zane"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="D??cris ton article"
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
        placeholder="neuf avec ??tiquette"
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
        placeholder="0,00???"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <br />
      <input
        type="checkbox"
        value={interest}
        onChange={(event) => setInterest(!interest)}
      /> Je suis int??ress??(e) par les ??changes
      <br />
      <input type="submit"/>
      </form>
      </div>
    </section>
  );
};

export default Publish;
