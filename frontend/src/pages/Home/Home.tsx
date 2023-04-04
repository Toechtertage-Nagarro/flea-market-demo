import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="page-header">
        <h1 className="home-title">Willkomen auf "Nagarros Marktplatz"! </h1>
      </div>
      <div className="nav-sections">
        <div className="nav-vendor">
          <p>
            Hast du Möbel, Kleidung, Geräte oder andere Dinge zuhause rumliegen,
            die du nicht mehr brauchst und verkaufen oder verschenken willst?
            <br />
            <br />
            Dann teil sie doch hier mit deinen Kollegen!
          </p>
          <Link className="nav-link" to="/vendor">
            Ich will etwas loswerden
          </Link>
        </div>
        <div className="nav-customer">
          <p>
            Suchst du gebrauchte Möbel, Geräte, Kleidung oder andere
            Gegenstände?
            <br />
            <br />
            Dann wirf doch einen Blick in unseren Marktplatz und schau was deine
            Kollegen anzubieten haben!
          </p>
          <Link className="nav-link" to="/client">
            Ich will im Marktplatz stöbern
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
