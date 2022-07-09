import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const apiKey = "ceb8ea3378a17b929ab6699ec4f59e73"
export const movieAPI = createApi({
    reducerPath: "movieAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
    endpoints: (builder) => ({
        getOnceM: builder.query({
            query: (id) => `${id}?api_key=${apiKey}&language=ru-RU&append_to_response=videos`
        }),
        getM: builder.query({
            query: ({src,page=1}) => `${src}?api_key=${apiKey}&page=${page}`
        }),
        getSearchedM: builder.query({
            query: (data) => `search/${data.variant}?api_key=${apiKey}&language=ru-RU&query=${data.name}`
        }),
    }),
})
export const { useGetOnceMQuery, useGetMQuery, useGetSearchedMQuery } = movieAPI