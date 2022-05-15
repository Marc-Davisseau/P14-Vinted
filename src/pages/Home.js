import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vintedback-mda.herokuapp.com/offers?offerPerPage=6&page=${page}&title=${term}`
        // `https://lereacteur-vinted-api.herokuapp.com/offers?limit=3&page=${page}`
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page,term]);
  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="main">
      <div className="headerbis">
      <h2  className="headerbistitre">Les articles vinted</h2>
      <input 
    className='searchbar-input' 
    type='text' 
    placeholder="Recherche par article"
    onChange={event => setTerm(event.target.value)}
    value={term}/>
 
      <button className="page" onClick={() => setPage(page - 1)} style ={{display: (page > ((data.count/6)))? "" : "none"    }} >-</button>
      <button className="page" onClick={() => setPage(page + 1)} style ={{display: (page < 1 || (page*6 > data.count) )? "none" : ""    }}>+</button>
      </div>
<div className="mainhome">
      {data.search.map((offer) => {
        // console.log(offer._id);
        return (
          <div className="card">
          <Link to={`/offer/${offer._id}`} key={offer._id}>
            <div>

            <p><img style={{width:230 , height:300}}src={offer.product_image.secure_url} alt="" /></p>
              <div className="cardInformation">

         
                <p>{offer.product_price}€</p>
                  <p className="cardSubInformation">taille :{offer.product_details[1]["TAILLE"]}<br />
                  {offer.product_details[0]["MARQUE"]}
                  </p>
     
              </div>
            </div>
          </Link>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Home;
