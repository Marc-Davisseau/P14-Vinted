import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [picture, setPicture] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  
  const navigate = useNavigate();

  return (
<div className="main">
    <form
    onSubmit={async e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("newsletter", newsletter);
      formData.append("picture", picture);

      try {
        const response = await axios.post(
      "https://vintedback-mda.herokuapp.com/user/signup",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "",
            }
          }
        )
        alert(JSON.stringify(response.data));
        console.log(response.data);
        if (response.data.token) {
          setUser(response.data.token, response.data.account.username);
        navigate("/")}
      } catch (err) {
        if (err.response.status === 500) {
          console.error("An error occurred");
        } else {
          console.error(err.response.data.msg);
        }
      }
    }}
  >

    <h1 className="main">Inscription</h1>
    Importer votre Avatar:<br/>
    <input
      type="file"
      onChange={event => {
        setPicture(event.target.files[0]);
      }}
    />
<br />
<input
          value={username}
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          value={email}
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          value={password}
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input
          value={newsletter}
          type="checkbox"
          placeholder="password"
          onChange={(event) => setNewsletter(event.target.checked)}
        /> S'inscrire à la newsletter
        <br />
        <input type="submit" value="S'inscrire" />
        <p style={{ color: "red" }}>{errorMessage}</p>
</form>
    </div>
  )
}

export default Signup;
