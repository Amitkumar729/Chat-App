import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
// import { ShowSnackbar } from "./app";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  token: "",
  email: "",
  error: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.action;
    },
    signOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
    },
    updateRegisterEmail(state, action) {
      state.email = action.payload.email;
    },
  },
});

//Reducer
export default slice.reducer;

//Login...
export function LoginUser(formValues) {
  //formValues = {email, password}....
  return async (dispatch, getState) => {
    await axios
      .post(
        "auth/login",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        //for the Login...
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );

        // //for the Snackbar...
        // dispatch(
        //   ShowSnackbar({
        //     severity: "success",
        //     message: response.data.message,
        //   })
        // );
      })
      .catch(function (error) {
        console.log(error); 
        //for the Snackbar...
        // dispatch(
        //   ShowSnackbar({
        //     severity: "error",
        //     message: error.message,
        //   })
        // );
      });
  };
}

//Logout...
export function LogOutUser() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.signOut());
  };
}

//Forgot Password...
export function ForgotPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/forgot-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//Reset Password...
export function NewPassword(formValues) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/auth/reset-password",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

//Register user...
export function RegisterUser(formValues) {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
    await axios
      .post(
        "/auth/register",
        { ...formValues },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          slice.actions.updateRegisterEmail({ email: formValues.email })
        );
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: false })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: true })
        );
      })
      .finally(() => {
        if (!getState().auth.error) {
          window.location.href = "/auth/verify";
        }
      });
  };
}

//Verify OTP...
export function VerifyEmail(formValues) {
  return async (dispatch, getState) => {
    // dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));

    await axios
      .post(
        "/auth/verify",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);

        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
