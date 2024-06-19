import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface NewsState {
  isLoading: boolean;
  data: any | null;
  isError: boolean;
}

// Define the initial state using that type
const initialState: NewsState = {
  isLoading: false,
  data: null,
  isError: false,
};

export const fetchNews = createAsyncThunk("fetchNews", async () => {
  const response = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=general&apikey=c9afbf03991076d7dee0f5d6d9c6202f&lang=en"
  );
  return response.json();
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      fetchNews.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload;
        // console.log("Data", action.payload);
      }
    );
    builder.addCase(fetchNews.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default newsSlice.reducer;
