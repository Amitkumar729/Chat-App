import { InputBase, styled } from "@mui/material";

const SearchInputbase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: "100%",
    },
  }));
  



  export default SearchInputbase;