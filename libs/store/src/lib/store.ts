import {
  combineReducers,
  configureStore,
  type EnhancedStore,
  type Reducer,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import type { PersistPartial } from 'redux-persist/es/persistReducer';
import type { IBlogState } from './blog/types';
import type { ILayoutState } from './layout/types';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { blogReducer } from './blog';
import { layoutReducer } from './layout';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['layout', 'blog'],
};

interface CombinedState {
  layout: ILayoutState;
  blog: IBlogState;
}

type RootState = CombinedState & PersistPartial;

const reducer = combineReducers({
  layout: layoutReducer,
  blog: blogReducer,
});

const persistedReducer: Reducer<RootState> = persistReducer(
  persistConfig,
  reducer
);

export const store: EnhancedStore<RootState> = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .prepend(routerMiddleware),
  //   .concat(usersApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
// top-level state
export type AppDispatch = typeof store.dispatch;
export type AppState = RootState;
