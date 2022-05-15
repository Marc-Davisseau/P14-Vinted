import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

;

export default function CheckoutForm({ price, title }) {

    const showSomething = () => { 
        navigate('/')
      }
  const elements = useElements();
  const stripe = useStripe();
  const navigate = useNavigate();
  const [completed, setCompleted] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState();
  const handlePayment = async (event) => {
    try {
      event.preventDefault();
      //Récupérer les données bancaires
      const cardInfos = elements.getElement(CardElement);
      //envoyer ces données à l'api Stripe
      const stripeResponse = await stripe.createToken(cardInfos, {
        name: "Nicolas",
      });
      //   console.log(stripeResponse);
      //Récupérer un stripToken
      //Envoyer ce stripeTOken à l'api Vinted
      const response = await axios.post(
        "http://localhost:4000/payment",
        {
            stripeToken: stripeResponse.token.id,
           amount: price,
           title: title,
        }
      );
      setCompleted(true)
      if (response.data.status === "succeeded")
      
      {
        setConfirmMessage(`Paiement validé pour l'achat de ${title} d'un montant de ${price}€`);

        setTimeout(showSomething, 3000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={handlePayment}>
       <CardElement /> 
       <input type="submit" /> 
      <span style={{ color: "green" }}>{confirmMessage}</span>

  


    </form>
  );
}
