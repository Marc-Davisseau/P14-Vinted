import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Payment =({token} , {data}) =>{

//    console.log(token)

  console.log({data})
return (token) ? (
<div>hel</div>
) :(
    <div>notoc</div>)
}



export default Payment;