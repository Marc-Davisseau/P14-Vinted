import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Offer = ( {setIdd} ) => {
  // const params = useParams();
  const product_price =data.product_price;
  const product_name =data.product_name;
  const product_description =data.product_description;
  const product_details =data.product_details;
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const onButtonClick = async (data) =>{
    try {
    

console.log(data)
setIdd({id})
navigate("/payment", { state: { id2:"id"  ,  name: `data.puct_name`, price: product_price, description: product_description, detail : product_details } });
  }
 catch (error) {
  console.log(error.message);
}
};
  
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
