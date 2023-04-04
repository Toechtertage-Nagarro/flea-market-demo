import { IconButton } from "@material-ui/core";
import { Alert, AlertTitle, Color } from "@material-ui/lab";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";

interface ToasterProps {
  severity: Color | undefined;
  isError: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toaster({
  severity,
  isError,
  setOpenDialog,
}: ToasterProps) {
  const alertDescription = !isError
    ? "Erfolgreich Artikel abgeschickt"
    : "Fehler beim Abschicken!";

  const title = !isError ? "Erfolg" : "Fehler";
  return (
    <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      <div className="alert-container">
        <p>{alertDescription}</p>
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            setOpenDialog(false);
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </div>
    </Alert>
  );
}
