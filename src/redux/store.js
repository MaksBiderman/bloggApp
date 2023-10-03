import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';

const rootReducer = combineReducers({
  posts: postsReducer,
  categories: (state = initialState.categories) => state, // Dodajemy to, aby obsłużyć kategorie w stanie
});

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
