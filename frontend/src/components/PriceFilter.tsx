import { TextField, InputAdornment } from "@material-ui/core";
import React, { useState } from "react";

interface SearchProps {
  onHandleSearch: (priceFilter: number) => void;
}

export default function PriceFilter({ onHandleSearch }: SearchProps) {
  const [searchInput, setSearchInput] = useState(0);
  const handleSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = Number(e.target.value);
    setSearchInput(price);
    onHandleSearch(price);
  };
  return (
    <div className="price-filter-container">
      <TextField
        style={{ width: "100px" }}
        value={searchInput}
        type="number"
        id="outlined-basic"
        onChange={handleSearchInputChanged}
        variant="standard"
        fullWidth
        label="Preis (max)"
        InputProps={{
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
      />
    </div>
  );
}
