import React from "react";
import axios from "axios";
import "./styles.scss";

const SignInPage = () => {
  return (
    <form id="signup-form">
      <label htmlFor="email">Email</label>
      <input placeholder="Email" type="text" name="email" id="email" required />
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        placeholder="Mot de passe"
        type="password"
        name="password"
        id="password"
        required
      />
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInPage;
