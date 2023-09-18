"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "./feature/auth/authSlice";
import storage from "redux-persist/lib/storage";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "persisitRoot",
  storage,
  // blacklist: ["auth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: [thunkMiddleware],
  devTools: process.env.NODE_ENV !== "development",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
//appthunk dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export const persistor = persistStore(store);
