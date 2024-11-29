import { RootState } from "../../../store";

const selectColors = (state: RootState) => state.colors.colors;

const selectIsLoading = (state: RootState) => state.colors.loading;

const selectError = (state: RootState) => state.colors.error;

export { selectColors, selectIsLoading, selectError };
