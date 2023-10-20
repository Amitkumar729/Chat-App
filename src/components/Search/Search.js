import { alpha, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    background: 20,
    backgroundColor: alpha(theme.palette.background.default, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    borderRadius: "15px",
  }));
  

  
 export default Search