import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { LogBox } from 'react-native';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  createMigrate,
} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import logger from 'redux-logger';

import { Store } from 'src/@types/store';

import reviewsSlice from './reviews/reducer';
import logsSclice from './logs/reducer';
import settingsSclice from './settings/reducer';
import migrations from './migrations';
import { getDevelopment } from './settings/selectors';

export const reducers = combineReducers<Store>({
  logs: logsSclice.reducer,
  reviews: reviewsSlice.reducer,
  settings: settingsSclice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 0,
  migrate: createMigrate(migrations as any, { debug: false }),
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      // prepend and concat calls can be chained
      .concat(__DEV__ ? logger : ([] as any)),
});

export const persistor = persistStore(store, {}, () => {
  const { showYellowBox } = getDevelopment(store.getState());

  LogBox.ignoreAllLogs(showYellowBox);
});

export default () => {
  return { store, persistor };
};
