import React, { useState } from "react";
import axios from "axios";
import "./styles.scss";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogiin = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      url: `http://localhost:3000/login`,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          console.log(res.data.errors);
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // reste a faire toute la logique front
  return (
    <form id="signup-form" onSubmit={HandleLogiin}>
      <label htmlFor="email"></label>
      <input
        placeholder="Email"
        type="text"
        name="email"
        id="email"
        required
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <label htmlFor="password"></label>
      <input
        type="password"
        placeholder="Mot de passe"
        type="password"
        name="password"
        id="password"
        required
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <input id="submit-button" type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInPage;
