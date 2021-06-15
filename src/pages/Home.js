import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

export default function Home() {
  return (
    <div className="home">
      <Logo />
      <Navigation />
      <Countries />
    </div>
  );
}
