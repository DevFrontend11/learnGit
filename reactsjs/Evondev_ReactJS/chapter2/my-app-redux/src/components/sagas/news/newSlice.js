import { createAction, createSlice } from "@reduxjs/toolkit";

export const otherAction = createAction("handleUpdateLoading");

const initialState = {
  hits: [],
  loading: true,
  query: "",
  errorMessage: "",
};
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action) => ({
      ...state,
      hits: action.payload,
    }),
    getNews() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setErrorMessage: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(otherAction, (state, action) => {
      state.loading = action.payload;
    });
  },
});
export const { setNews, getNews, setLoading, setErrorMessage, setQuery } =
  newsSlice.actions;
export default newsSlice.reducer;
