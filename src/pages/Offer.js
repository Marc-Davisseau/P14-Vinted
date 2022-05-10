import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Offer = () => {
  // const params = useParams();
  const { id } = useParams();
  const [id2, setId2] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const onButtonClick = (data) =>{
    // event.preventDefault();

console.log(data)
      navigate(`/payment` , {data} )
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:4000/offer/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading === true ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <h2>{data.product_name}</h2>
      <div>
      {data.owner.Username}
      <img style={{ height: 50, borderRadius:50 }}  src={data.avatar} alt="" />
      <button
  onClick={()=>onButtonClick(data._id)}
      >Acheter</button>
     <div>
       <img style={{ width: 250, borderRadius:50 }}  src={data.product_image} alt="" />
       </div>
      </div>
      <span>{data.product_price} €</span>
      <div>
        {data.product_details.map((item, index) => {
          const keys = Object.keys(item);

          return (
            <div key={index}>
              <p>
                {keys[0]} : {item[keys[0]]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
