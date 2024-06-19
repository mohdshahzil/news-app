import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface NewsState {
  isLoading: boolean;
  data: any | null;
  isError: boolean;
  category: string;
  searchTerm: string;
}

// Define the initial state using that type
const initialState: NewsState = {
  isLoading: false,
  data: null,
  isError: false,
  category: "general",
  searchTerm: "",
};

export const fetchNews = createAsyncThunk(
  "fetchNews",
  async ({
    category,
    searchTerm,
  }: {
    category: string;
    searchTerm: string;
  }) => {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?category=${category}&q=${searchTerm}&apikey=4c88f10d45f7203dadf621c5705bd177&lang=en`
    );
    return response.json();
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
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
        console.log("Data", action.payload);
      }
    );
    builder.addCase(fetchNews.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export const { setCategory,setSearchTerm } = newsSlice.actions;
export default newsSlice.reducer;
