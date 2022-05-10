import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:4000/offers?offerPerPage=3&page=${page}`
        // `https://lereacteur-vinted-api.herokuapp.com/offers?limit=3&page=${page}`
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);
  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <p>Les offres Vinted !</p>

      <button onClick={() => setPage(page - 1)}>Page précédente</button>
      <button onClick={() => setPage(page + 1)}>Page suivante</button>
      {data.search.map((offer) => {
        // console.log(offer._id);
        return (
          <Link to={`/offer/${offer._id}`} key={offer._id}>
            <div className="card">
              <h2>{offer.product_name}</h2>
              <img
                style={{ height: 150 }}
                src={offer.product_image.secure_url}
                alt=""
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
