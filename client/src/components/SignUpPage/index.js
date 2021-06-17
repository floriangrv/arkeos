import React, { useState } from "react";
import axios from "axios";
import SignInPage from "../SignInPage";

import "./styles.scss";

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
      axios({
        method: "POST",
        url: `http://localhost:3000/signin`,
        data: {
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            console.log(res.data.errors);
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {formSubmit ? (
        <>
          <SignInPage />
          <div className="signup-message">
            <h3 id="signup-sucess">
              Enregistrement réussi, veuillez-vous connecter
            </h3>
          </div>
        </>
      ) : (
        <form id="signup-form" onSubmit={handleRegister}>
          <label htmlFor="pseudo"></label>
          <input
            placeholder="Pseudo"
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
            value={pseudo}
          />
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
      )}
    </>
  );
};

export default SignUpPage;
