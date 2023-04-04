import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import { IOptionElement } from "./Options";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface FilterProps {
  elements: IOptionElement[];
  name: string;
  id: string;
  onHandleFilter: (value: string) => void;
}

export default function Filter({
  elements,
  name,
  id,
  onHandleFilter,
}: FilterProps) {
  const classes = useStyles();

  const [filter, setFilter] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setFilter(value);
    onHandleFilter(value);
  };

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id={`filter__input__label__${id}`}>{name}</InputLabel>
        <Select
          labelId={`filter__select__label__${id}`}
          id={`filter__select__${id}`}
          value={filter}
          displayEmpty
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          <MenuItem value="">
            <em>Wähle einen Filter aus</em>
          </MenuItem>
          {elements.map((element) => (
            <MenuItem
              id={`filter__menu__item__${id}`}
              key={element.id}
              value={element.value}
            >
              <ListItemText primary={element.value} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
