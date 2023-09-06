import { createSlice } from "@reduxjs/toolkit";
// import authService from "./authService";
// import authService from "./authService";
// import { Router } from "next/router";

const initialState = {
  user: {}, // user object
  userToken: null, // user token
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  secret: "",
  userPass: "",
};

// export const signUpUser = createAsyncThunk(
//   "auth/registerUser",
//   async (registerData, thunkAPI) => {
//     try {
//       return await authService?.registerUser(registerData);
//     } catch (error) {
//       const message =
//         (error.response && error.response.message) ||
//         error.error ||
//         error?.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// export const login = createAsyncThunk(
//   "auth/login",
//   async (userData, thunkAPI) => {
//     try {
//       const response = await authService.login(userData);
//       return response;
//     } catch (error: string) {
//       const message =
//         (error.response && error.response.message) ||
//         error.error ||
//         error?.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// //Logout
// export const logout = createAsyncThunk("auth/logout", () => {
//   authService?.logout();
// });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

// export const {
//    setUserPass,
// }

export default authSlice?.reducer;
