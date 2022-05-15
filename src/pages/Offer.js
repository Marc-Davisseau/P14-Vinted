import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 



const Offer = (  ) => {

  // const params = useParams();
   const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
//   const onButtonClick = async (data) =>{
 
 
// // state={{ title: data.product_name, price: data.product_price }

// // setIdd({id})
// // navigate("/payment", { state: { id2:"id" } });

// };
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vintedback-mda.herokuapp.com/offer/${id}`
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
    <div className="main" style={{display: "flex"}}>
  
  
     <div className="imageOffer">
       <img   src={data.product_image} alt="" />
       </div>
      

<div>
    
      <button >
       <Link to="/payment" state={{ title: data.product_name, price: data.product_price, image:data.product_image  }} >
Acheter
</Link>
       
</button>


<section className="cardSubInformationPrice">  <h2>{data.product_price} €</h2></section>

<section><p className="cardSubInformation">MARQUE</p><p className="cardSubInformation">{data.product_details[0]["MARQUE"]}</p></section>
<section><p className="cardSubInformation">TAILLE</p><p className="cardSubInformation" > {data.product_details[1]["TAILLE"]}</p></section>
<section><p className="cardSubInformation">ETAT</p><p className="cardSubInformation">  {data.product_details[2]["ETAT"]}</p></section>
<section><p className="cardSubInformation">COULEUR</p><p className="cardSubInformation" >   {data.product_details[3]["COULEUR"]}</p></section>
<section><p className="cardSubInformation">EMPLACEMENT</p><p className="cardSubInformation" >  {data.product_details[4]["EMPLACEMENT"]}</p> </section>


<p>{data.product_name}</p>
<p className="cardSubInformation2">{data.product_description}</p>

      <div>
      <img style={{ height: 50, borderRadius:50 }}  src={data.avatar} alt="" />
      {data.owner.Username}
      </div>


</div>
</div>

      
  );
};

export default Offer;
