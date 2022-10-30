import React from "react";
import "./Hero.css";
import { useAuth0 } from "@auth0/auth0-react";

function Hero() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  // create sign in fuction with AuthO
  const signIn = () => {
    // Auth0
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  };

  return (
    <div className="hero">
      <div className="left">
        <h1>Hello there!</h1>
        <h2>Welcome to Ensemble</h2>
        <h3>Ensemble embraces retro music</h3>
        <h3>and is dedicated in prividing the world facts</h3>
        <h3>and histroy of artists.</h3>
        <button onClick={signIn}>Sign In</button>
      </div>
      <div className="right">
        <button onClick={signIn}>Sign In</button>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signIn}>Sign In</button>
      </div>
    </div>
  );
}

export default Hero;
