import { createStore, combineReducers } from 'redux';

function tokenReducer(state='', action) {
  switch(action.type) {
    case 'SET_TOKEN':
      return action.token;
    default:
      return state;
  }
}

let rootReducer = combineReducers({
  token: tokenReducer
});

export default createStore(rootReducer)