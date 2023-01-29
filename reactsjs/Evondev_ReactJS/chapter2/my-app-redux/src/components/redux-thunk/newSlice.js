import axios from "axios";

const {
  createSlice,
  createAsyncThunk,
  createAction,
} = require("@reduxjs/toolkit");

const initialState = {
  hits: [],
  loading: true,
  query: "",
  errorMessage: "",
};
function requestGetNewsThunk(query = "") {
  return axios.request({
    method: "GET",
    url: "https://hn.algolia.com/api/v1/search",
    params: {
      query,
    },
  });
}
export const setLoadingThunk = createAction("setLoadingThunk");
export const setQuerySearch = createAction("setQuerySearch");
export const handleFetchNews = createAsyncThunk(
  "news/handleFetchNews",
  async (query, thunkAPI) => {
    const response = await requestGetNewsThunk(query);
    return response.data.hits;
  }
);

const newSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleFetchNews.fulfilled, (state, action) => {
        state.hits = action.payload;
        state.loading = false;
      })
      .addCase(handleFetchNews.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(handleFetchNews.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(setLoadingThunk, (state, action) => {
        state.loading = action.payload;
      })
      .addCase(setQuerySearch, (state, action) => {
        state.query = action.payload;
      });
  },
});
export const { setLoading } = newSlice.actions;
export default newSlice.reducer;
