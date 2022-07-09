import { configureStore } from "@reduxjs/toolkit";
import { movieAPI } from "./API/API";
import MovieSlice from "./Slices/MovieSlice";

const store = configureStore({
    reducer: {
        [movieAPI.reducerPath]: movieAPI.reducer,
        movie:MovieSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieAPI.middleware)
})

export default store