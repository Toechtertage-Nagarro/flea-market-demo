import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  createStyles,
  Theme,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import React from "react";
import { IFleaItem } from "./interfaces/vendor-interfaces";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetail from "./AccordionDetail";
import Summary from "./Summary";

interface ListViewProps {
  fleaItems: IFleaItem[];
  onDelete: (fleaItem: IFleaItem) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  })
);

export function Listview({ fleaItems, onDelete }: ListViewProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={classes.root}>
      {fleaItems.map((x, i) => {
        return (
          <Accordion
            key={`accordion__${i}`}
            expanded={expanded === `panel_${i}`}
            onChange={handleChange(`panel_${i}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`accordion__${i}-content`}
              id={`accordion__${i}`}
            >
              <Summary fleaItem={x} />
            </AccordionSummary>
            <AccordionDetails>
              <AccordionDetail onDelete={onDelete} fleaItem={x} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
