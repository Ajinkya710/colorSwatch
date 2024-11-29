import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Color } from "./types";

export const fetchColors = createAsyncThunk<Color[]>('colors/fetchColors', async () => {
    const response = await axios.get('http://localhost:8000/api/colors');
    return response.data;
  });