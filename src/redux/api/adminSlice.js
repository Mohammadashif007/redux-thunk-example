import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:9080` }),
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: () => "accounts",
            providesTags: ["account"],
            transformResponse: (res) => res.sort((a,b) => b.amount - a.amount)
            
        }),
        addAccounts: builder.mutation({
            query: (amount, id) => ({
                url: "accounts",
                method: "POST",
                body: { amount, id },
            }),
            invalidatesTags: ["account"],
        }),
        deleteAccounts: builder.mutation({
            query: (id) => ({
                url: `accounts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["account"],
        }),
        updateAccounts: builder.mutation({
            query: ({id, amount}) => ({
                url: `accounts/${id}`,
                method: "PATCH",
                body: { amount },
            }),
            invalidatesTags: ["account"],
        }),
    }),
});

export const {
    useGetAccountsQuery,
    useAddAccountsMutation,
    useDeleteAccountsMutation,
    useUpdateAccountsMutation
} = adminApi;
