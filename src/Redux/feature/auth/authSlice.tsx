import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService, { RegisterUserData, UserData } from "./authService";
import Router from "next/router";

type AuthState = {
  user?: [];
  userInitialData?: [];
  userToken?: string | null;
  isError?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  message?: "";
  token?: string;
};

const initialState = {
  user: [],
  userInitialData: [],
  userToken: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  token: "",
} as AuthState;

// interface CustomError {
//   response?: {
//     message?: string;
//   };
//   error?: string;
// }

type Error = {
  response?: {
    message?: string;
  };
  error?: string;
};

//create a slice to register users

export const signUpUser = createAsyncThunk(
  "auth/registerUser",
  async (registerData: RegisterUserData, thunkAPI) => {
    try {
      return await authService?.registerUser(registerData);
    } catch (error) {
      const typedError = error as Error;
      const message =
        typedError?.response?.message ?? typedError?.error ?? error?.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData: UserData, thunkAPI) => {
    try {
      const response = await authService.login(userData);
      return response;
    } catch (error) {
      const typedError = error as Error;
      const message =
        typedError?.response?.message ?? typedError?.error ?? error?.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

// refresh token
export const refresh = createAsyncThunk("auth/refreshToken", () => {});

//Logout
export const logout = createAsyncThunk("auth/logout", () => {
  authService?.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearUser: (state) => {
      state.user = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.message = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInitialData = action.payload;
        state.message = action.payload;
        Router.push("/dashboard");
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        // state.message = action.payload as string;
      });
  },
});

export const { setUser, setToken, clearUser } = authSlice.actions;

export default authSlice.reducer;
