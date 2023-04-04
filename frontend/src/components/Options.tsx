import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import * as React from "react";

export interface IOptions {
  inputLabel: string;
  labelId: string;
  selectId: string;
  options: IOptionElement[];
}

export interface IOptionsHooks {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface IOptionElement {
  value: string;
  id: string;
}

export interface OptionsProps {
  selectOptions: IOptions;
  hooks: IOptionsHooks;
}

// Hier wird das Styling von der Dropdown Komponente festgelegt.
const useStyles = makeStyles({
  select: {
    "&:before": {
      borderColor: "#47d7ac",
    },
    "&:after": {
      borderColor: "#47d7ac",
    },
    "&:not(.Mui-disabled):hover::before": {
      borderColor: "#47d7ac",
    },
  },
  icon: {
    fill: "black",
  },
  root: {
    color: "black",
  },
});

export const Options = ({
  selectOptions,
  hooks,
}: OptionsProps): JSX.Element => {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    hooks.setValue(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id={selectOptions.labelId}>
        {selectOptions.inputLabel}
      </InputLabel>
      <Select
        className={classes.select}
        labelId={selectOptions.labelId}
        id={selectOptions.selectId}
        label={selectOptions.labelId}
        value={hooks.value}
        inputProps={{
          classes: {
            icon: classes.icon,
            root: classes.root,
          },
        }}
        onChange={handleChange}
      >
        {selectOptions.options.map((x, i) => {
          return (
            <MenuItem key={i} value={x.value}>
              {x.value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
