import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
  id: string;
  title: string;
  year: string;
  imdbscore: string;
  posterlink: string;
  genre: Array<string>;
  user_comments: Array<string>;
}

export interface MoviesState {
  movies: Array<Movie>;
  movieCount: number;
  moviePage: number; // What page we are on in infinite scrolling list
}

const initialState: MoviesState = {
  movies: [],
  movieCount: 0,
  moviePage: 0,
};

export const moviesSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addMovies: (state, action: PayloadAction<Array<Movie>>) => {
      state.movies = state.movies.concat(action.payload);
    },
    setMovies: (state, action: PayloadAction<Array<Movie>>) => {
      state.movies = action.payload;
    },
    setMovieCount: (state, action: PayloadAction<number>) => {
      state.movieCount = action.payload;
    },
    incrementMoviePage: (state) => {
      state.moviePage += 1;
    },
    resetMoviePage: (state) => {
      state.moviePage = 0;
    },
  },
});

export const { addMovies, setMovies, setMovieCount, incrementMoviePage, resetMoviePage } = moviesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMovies = (state: MoviesState) => state.movies;

export default moviesSlice.reducer;