import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdornment, TextField } from "@material-ui/core";
import React, { useState } from "react";

interface SearchProps {
  onHandleSearch: (searchInput: string) => void;
}

export default function Search({ onHandleSearch }: SearchProps) {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    //TODO Fehler eingebaut, Lowercase wird ignoriert
    // const lowerCase = e.target.value.toLowerCase();
    setSearchInput(e.target.value);
    onHandleSearch(e.target.value);
  };
  return (
    <div className="name-filter-container">
      <TextField
        style={{ width: "200px" }}
        value={searchInput}
        id="outlined-basic"
        onChange={handleSearchInputChanged}
        variant="standard"
        fullWidth
        label="Artikelname"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FontAwesomeIcon icon={faSearch} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
