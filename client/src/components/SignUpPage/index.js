import React, { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    // get div element
    const passwordConfirmError = document.querySelector(".password-conf-error");

    if (password !== controlPassword) {
      passwordConfirmError.textContent =
        "Les mot de passe ne sont pas identiques";
    } else {
      await fetch({
        method: "get",
        url: `http://localhost:3000/articles`,
        data: {
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <form id="signup-form" onSubmit={handleRegister}>
      <label htmlFor="email"></label>
      <input
        placeholder="Email"
        type="text"
        name="email"
        id="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        required
      />
      <label htmlFor="password"></label>
      <input
        type="password"
        placeholder="Mot de passe"
        type="password"
        name="password"
        id="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
        required
      />
      <div className="password-conf-error"></div>
      <label htmlFor="password-conf"></label>
      <input
        type="password"
        name="password"
        id="password-conf"
        placeholder="Confirmer le Mot de passe"
        onChange={(event) => setControlPassword(event.target.value)}
        value={controlPassword}
        required
      />
      <input id="submit-button" type="submit" value="S'inscrire" />
    </form>
  );
};

export default SignUpPage;
