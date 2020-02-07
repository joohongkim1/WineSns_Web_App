import { applyMiddleware, compose, createStore } from 'redux';
import { combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import loginReducer from '../reducers/login_reducer';
import registerReducer from "../../register/reducers/register_reducer";
const middlewares: any[] = [];

middlewares.push(logger);
middlewares.push(thunk);

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
});

export default function configureStore(initialState : any) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}
