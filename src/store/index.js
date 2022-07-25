import { createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { devToolsEnhancer } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['positions', 'filters'],
  // blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, devToolsEnhancer());

export { store };
export const persistor = persistStore(store);
