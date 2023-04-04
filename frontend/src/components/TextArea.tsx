import { TextareaAutosize, TextField } from "@material-ui/core";
import React from "react";

export interface ITextArea {
  id: string;
  name: string;
  label: string;
}

export interface ITextAreaFormElements {
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.ChangeEvent<any>) => void;
}

interface TextAreaProps {
  textArea: ITextArea;
  formElements: ITextAreaFormElements;
}

export const TextArea = ({ textArea, formElements }: TextAreaProps) => {
  return (
    <TextField
      fullWidth
      multiline
      id={textArea.id}
      name={textArea.name}
      value={formElements.value}
      aria-label={textArea.label}
      placeholder={textArea.label}
      InputProps={{
        inputComponent: TextareaAutosize,
        rows: 3,
      }}
      onChange={formElements.onChange}
      onBlur={formElements.onBlur}
    />
  );
};
