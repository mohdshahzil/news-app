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
    "https://gnews.io/api/v4/top-headlines?category=general&apikey=5f9a6060bd6a9e817cda6fdee1059709&lang=en"
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
