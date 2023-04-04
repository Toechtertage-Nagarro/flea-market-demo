import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Vendor from "./pages/Vendor/Vendor";
import Client from "./pages/Client/Client";
import { IFleaItem } from "./components/interfaces/vendor-interfaces";
import { initialArticles } from "./data/vendorData";
import { fleaItemKey } from "./constants/constant";

const container = document.getElementById("root");
if (!container) {
  throw new Error("failed to find root element.");
}
const root = createRoot(container);
const fleaItems: IFleaItem[] = [...initialArticles];

// Überprüfung ob im Speicher Flohmarktelemente exisiteren
if (!localStorage.getItem(fleaItemKey)) {
  // Wenn es keine gibt, dann füge die initialen Elemente hinzu
  const initialFleaItems = JSON.stringify(initialArticles);
  localStorage.setItem(fleaItemKey, initialFleaItems);
}

export const AppContext = React.createContext(fleaItems);

const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/vendor" element={<Vendor />} />
    <Route path="/client" element={<Client />} />
  </Routes>
);
const rendering: JSX.Element = (
  <AppContext.Provider value={fleaItems}>
    <BrowserRouter>
      <App />
      {routes}
    </BrowserRouter>
  </AppContext.Provider>
);
root.render(rendering);
reportWebVitals();
