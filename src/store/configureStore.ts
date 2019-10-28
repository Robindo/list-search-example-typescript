import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppActions } from '../types/actions';
import exampleReducer from '../reducers/exampleReducer';

const composeEnhancers = composeWithDevTools({});

export const rootReducer = combineReducers({
  data: exampleReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  )
);
