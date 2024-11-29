import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchColors } from "./action";
import { Color } from "./types";

interface ColorState {
  colors: Color[];
  loading: boolean;
  error: string | null;
}

const initialState: ColorState = {
  colors: [],
  loading: false,
  error: null,
};

const colorSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchColors.fulfilled,
        (state, action: PayloadAction<Color[]>) => {
          state.colors = action.payload;
        }
      )
      .addCase(fetchColors.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch colors";
      });
  },
});

export const { setIsLoading } = colorSlice.actions;
export default colorSlice.reducer;
