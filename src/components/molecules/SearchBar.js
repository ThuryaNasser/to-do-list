import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const SearchBar = ({ setSearchInput }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchInput(inputValue);
    }, 700);

    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <TextField
      id="search-bar"
      sx={{ width: "90%", px: 2 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      variant="standard"
      placeholder={"Search for exact match"}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
};
export default SearchBar;
