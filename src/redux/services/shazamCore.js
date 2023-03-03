import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key', '5ee852b9b1msh9d6f76bc9a498d0p130c43jsn4701c0372c34');  

          return headers;
        },
    }),

    /**Creating an endpoint to fetch our world charts data from shazam core */
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
    }),
});

export const {
    useGetTopChartsQuery, 
} = shazamCoreApi;