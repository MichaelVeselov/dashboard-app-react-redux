import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['positions', 'filters'],
  // blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };
export const persistor = persistStore(store);
