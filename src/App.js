import React from "react";
import Router from "./routes";
import ThemeProvider from "./theme";
import ThemeSettings from "./components/settings";
// import { Snackbar } from "@mui/material";
// import { useSelector } from "react-redux";
// import { CloseSnackbar } from "./redux/slices/app";
// import MuiAlert from "@mui/material/Alert";

// const vertical = "top";
// const horizontal = "center";

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

function App() {
  // const dispatch = useDispatch();

  // const { open, severity, message } = useSelector((state) => state.app.Snackbar);
  // const snackbar = useSelector((state) => state.snackbar)

  return (
    <>
      <ThemeProvider>
        <ThemeSettings>
          {" "}
          <Router />{" "}
        </ThemeSettings>
      </ThemeProvider>
{/*
    
      {message && open ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={4000}
          key={vertical + horizontal}
          onClose={() => {
            console.log("This is clicked");
            dispatch(CloseSnackbar());
          }}
        >
          <Alert
            onClose={() => {
              console.log("This is clicked");
              dispatch(CloseSnackbar());
            }}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
*/}
    </>
  );
}

export default App;
