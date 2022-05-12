import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Auth'],

  endpoints: builder => ({
    fetchCurrentUser: builder.query({
      // query: () => ({
      //   url: `/users/current`,
      //   method: 'GET',
      query: () => `/users/current`,
      // }),
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Auth', id })),
              { type: 'Auth', id: 'LIST' },
            ]
          : [{ type: 'Auth', id: 'LIST' }],
    }),
    registerUser: builder.mutation({
      query: newUser => ({
        url: `/users/signup`,
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: [{ type: 'Auth', id: 'LIST' }],
    }),
    loginUser: builder.mutation({
      query: loginData => ({
        url: `/users/login`,
        method: 'POST',
        body: loginData,
      }),
      invalidatesTags: [{ type: 'Auth', id: 'LIST' }],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Auth', id: 'LIST' }],
    }),
  }),
});

export const {
  useFetchCurrentUserQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;

export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
