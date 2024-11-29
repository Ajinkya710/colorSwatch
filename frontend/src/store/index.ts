import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import colorReducer from '../Pages/ColorSwatch/store/slice';

const store = configureStore({
  reducer: {
    colors: colorReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
