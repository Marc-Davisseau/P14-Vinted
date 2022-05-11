
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";


const stripePromise = loadStripe("pk_test_51KxxC3JlL7nGC6IO19CYBlGNmFf77L7nGZUn15CLzQve7bTWjbCiJ5GHvloObJmqKmFNHbgRFJUI5CAIP7AKuoA900SnA1FK35");

const Payment =( { token }  ) =>{
  const location = useLocation();
  const { price } = location.state 
  const { description } = location.state 
  const { detail } = location.state 
  const { id2 } = location.state 
  const { name } = location.state 
  // state: { name: data.product_name, price: data.product_price, description: data.product_description, detail : data.product_details } })
  const userToken = token 

  console.log(name)
return (token) ? (
<div>
<span>Résumé de la commande</span>
<span>product_name</span>
<span>{name}</span>
<Elements stripe={stripePromise}  >
      <CheckoutForm id2={id2} name={name} price={price} description={description} detail={detail}/>
    </Elements>
 


</div>
) :(
    <div>Pas de token</div>)
}



export default Payment;