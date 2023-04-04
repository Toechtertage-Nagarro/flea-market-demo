import React from "react";
import { IFleaItem } from "./interfaces/vendor-interfaces";
import DeleteIcon from "@material-ui/icons/Delete";
import Delete from "./Delete";

interface AccordionDetailsProps {
  fleaItem: IFleaItem;
  onDelete: (fleaItem: IFleaItem) => void;
}
export default function AccordionDetail({
  fleaItem,
  onDelete,
}: AccordionDetailsProps) {
  return (
    <div className="accordion-details-container">
      <div className="mandatory-details-container">
        <span className="mandatory-title">
          Kontaktdaten
          {/*Email anzeigen lassen*/}
        </span>
        <span className="mandatory-title">
          Zustand der Ware
          <br /> <p className="details-value">{fleaItem.condition}</p>
        </span>
        <span className="mandatory-title">
          Preis
          <br /> <p className="details-value">€ {fleaItem.price}</p>
        </span>
      </div>
      <div className="optional-details-container">
        <span className="mandatory-title">Details</span>
        <br />
        <p className="details-value">{fleaItem.description}</p>
      </div>
      <Delete fleaItem={fleaItem} onDelete={onDelete} />
      {/*<Delete fleaItem={fleatItem} onDelete={onDelete} /> */}
    </div>
  );
}
