import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from './contacts/contactsApi';
import { filterSlice } from './filter/filterSlice';
import { authApi } from './auth/authApi';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    authApi.middleware,
    contactsAPI.middleware,
  ],
});
