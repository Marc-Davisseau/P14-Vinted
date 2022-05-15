
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import {  Navigate } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51KxxC3JlL7nGC6IO19CYBlGNmFf77L7nGZUn15CLzQve7bTWjbCiJ5GHvloObJmqKmFNHbgRFJUI5CAIP7AKuoA900SnA1FK35");

const Payment =( { token  }  ) =>{
  const location = useLocation();
  const { title, price, image } = location.state;
 const userToken = token 

return (token) ? (


<div className="main2">
<span>Résumé de la commande</span><br/>
<span>Article : {title}</span> <br/>
<span>Prix: {price}</span><br/>
<span><img style={{width:310}} src={image} alt="" /></span>
<span>Saisir vos coordonnées bancaires</span><br/>
<Elements stripe={stripePromise}  >
      <CheckoutForm  title={title} price={price} />
</Elements>



</div>
) :(
  <Navigate to="/login" />)
}



export default Payment;