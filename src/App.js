import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain="dev-5pnptnwhzxrmpick.us.auth0.com"
      clientId="4az07J4v7bEqygF0To0sR8elq5F2rDm6"
      redirectUri={window.location.origin}
    >
      <Home />
    </Auth0Provider>
  );
}

export default App;
