import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getHelloWorld: builder.query({
      query: () => "/helloworld",
    }),
  }),
})

export const { useGetHelloWorldQuery } = api
