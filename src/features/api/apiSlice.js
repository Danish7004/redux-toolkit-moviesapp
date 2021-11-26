import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
}

export const apiSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, {payload}) => {
      state.movies = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {addMovies  } = apiSlice.actions
// export const getMovies = (state) => state.movies.movies

export default apiSlice.reducer