import { createStore,applyMiddleware  } from 'redux';
import rootReducer from './reducers/rootReducer';
import {persistStore} from 'redux-persist'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const middleware = [thunk];
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
export default {store,persistor};