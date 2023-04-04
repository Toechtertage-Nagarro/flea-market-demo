import React from "react";
import { IFleaItem } from "./interfaces/vendor-interfaces";

interface SummaryProps {
  fleaItem: IFleaItem;
}

export default function Summary({ fleaItem }: SummaryProps) {
  return (
    <div className="accordion-summary-container">
      <p className="summary-title">{fleaItem.name}</p>
      <div className="summary-details-container">
        <p className="summary-title-second">{fleaItem.category}</p>
        <p className="summary-title-second">€ {fleaItem.price}</p>
        {/*Preis hinzufügen*/}
      </div>
    </div>
  );
}
