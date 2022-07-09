import { createSlice } from "@reduxjs/toolkit"

const MovieSlice = createSlice({
    name: "movies",
    initialState: {
        BaseImgUrl: "https://image.tmdb.org/t/p/original/",
        MoviesPop: [],
        TVpop: [],
        RatedMovies: [],
        RatedTV: [],
        searchedData: {},
    },
    reducers: {
        addPOPMovies: (state, action) => {
            state.MoviesPop = action.payload
        },
        addPOPtv: (state, action) => {
            state.TVpop = action.payload
        },
        addRatedMovies: (state, action) => {
            state.RatedMovies = action.payload
        },
        addRatedTV: (state, action) => {
            state.RatedTV = action.payload
        },
        addSearchedData: (state, action) => {
            state.searchedData = action.payload
        }
    }
})
export const { addPOPMovies, addPOPtv, addRatedMovies, addRatedTV, addSearchedData } = MovieSlice.actions
export default MovieSlice.reducer
