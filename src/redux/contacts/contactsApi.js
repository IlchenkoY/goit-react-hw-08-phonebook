import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authorization.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
      keepUnusedDataFor: 5,
      // providesTags: ['Contacts'],
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: 'contacts',
        method: 'POST',
        body: newContact,
      }),
      // invalidatesTags: ['Contacts'],
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteTodo: builder.mutation({
      query: contactid => ({
        url: `contacts/${contactid}`,
        method: 'DELETE',
      }),
      // invalidatesTags: ['Contacts'],
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteTodoMutation,
  useAddContactMutation,
} = contactsApi;
