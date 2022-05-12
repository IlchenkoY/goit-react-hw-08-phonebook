// import { configureStore } from '@reduxjs/toolkit';
// import { contactsAPI } from './contacts/contactsApi';
// import { filterSlice } from './filter/filterSlice';
// import { authApi, authSlice } from './auth/authApi';

// export const store = configureStore({
//   reducer: {
//     authorization: authSlice.reducer,
//     filter: filterSlice.reducer,
//     [authApi.reducerPath]: authApi.reducer,
//     [contactsAPI.reducerPath]: contactsAPI.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     authApi.middleware,
//     contactsAPI.middleware,
//   ],
// });
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authSlice, authApi } from './auth/authApi';
import { contactsApi } from './contacts/contactsApi';
import { filterSlice } from './filter/filterSlice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // localStorage

const authPersistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['token', 'isLoggedIn', 'name'],
};

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    authorization: persistReducer(authPersistConfig, authSlice.reducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authApi.middleware,
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
