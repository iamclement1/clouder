import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import authService, { RegisterUserData } from "./authService";
import { useRouter } from "next/router";

const router = useRouter();

type AuthState = {
  user?: [];
  userInitialData?: RegisterUserData;
  userToken?: string | null;
  isError?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  message?: string;
};

const initialState: AuthState = {
  user: [],
  userInitialData: undefined,
  userToken: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

interface CustomError {
  response?: {
    message?: string;
  };
  error?: string;
}

//create a slice to register users

export const signUpUser = createAsyncThunk(
  "auth/registerUser",
  async (registerData: RegisterUserData, thunkAPI) => {
    try {
      return await authService?.registerUser(registerData);
    } catch (error: unknown) {
      const typedError = error as CustomError;
      const message =
        (typedError.response && typedError.response.message) ||
        typedError.error ||
        error?.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

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
  reducers: {
    resestAuthDetails: (state) => {
      state.user = [];
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        signUpUser.fulfilled,
        (state, action: PayloadAction<RegisterUserData>) => {
          state.isLoading = false;
          state.userInitialData = action.payload;
          router.push("/dashboard");
        },
      );
  },
});

export const { resestAuthDetails } = authSlice.actions;

export default authSlice?.reducer;
