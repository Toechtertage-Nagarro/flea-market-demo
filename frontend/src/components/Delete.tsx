import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { IFleaItem } from "./interfaces/vendor-interfaces";

interface DeleteProps {
  fleaItem: IFleaItem;
  onDelete: (fleaItem: IFleaItem) => void;
}

export default function Delete({ fleaItem, onDelete }: DeleteProps) {
  return (
    <div className="delete-container" onClick={() => onDelete(fleaItem)}>
      <DeleteIcon />
      <span className="mandatory-title delete-span">Ware löschen 😯</span>
    </div>
  );
}
