import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { osReducer } from "./slices/os/reducer";
import { framesReducer } from "./slices/frames/reducer";
import { filesReducer } from "./slices/files/reducer";

export const store = configureStore({
  reducer: {
    os: osReducer,
    frames: framesReducer,
    files: filesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
