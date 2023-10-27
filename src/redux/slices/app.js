import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be contact, starred, shared...
  },
  // snackbar: {
  //   open: false,
  //   severity: null,
  //   message: null,
  // },
  users: [],
  friends: [],
  friendRequests: [],
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // toggle Sidebar
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    //updateSidebarType
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    // openSnackbar(state, action) {
    //   // console.log(action.payload);
    //   console.log("hello!!!");
    //   state.snackbar.open = true;
    //   state.snackbar.severity = action.payload.severity;
    //   state.snackbar.message = action.payload.message;
    // },
    // closeSnackbar(state) {
    //   console.log("This is getting executed");
    //   state.snackbar.open = false;
    //   state.snackbar.message = null;
    // },
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequests(state, action) {
      state.friendRequests = action.payload.request;
    },
  },
});

//Reducer
export default slice.reducer;

//for the sidebar....
export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}

// //for the snackbar...
// export function ShowSnackbar({ severity, message }) {
//   return async (dispatch, getState) => {
//     dispatch(
//       slice.actions.openSnackbar({
//         severity,
//         message,
//       })
//     );
//   };
// }

// export const CloseSnackbar = () => async (dispatch, getState) => {
//   dispatch(slice.actions.closeSnackbar());
// };

//for the all Users....
export function FetchUsers() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-users",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateUsers({ users: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

//for the all friends...
export function FetchFriends() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-friends",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(slice.actions.updateFriends({ friends: response.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

//for the all friends requests...
export function FetchFriendRequests() {
  return async (dispatch, getState) => {
    await axios
      .get(
        "/user/get-friend-requests",

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(
          slice.actions.updateFriendRequests({ request: response.data.data })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
