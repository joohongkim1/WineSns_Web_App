import { applyMiddleware, compose, createStore } from 'redux';
import { combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import loginReducer from '../reducers/login_reducer';
import registerReducer from "../../register/reducers/register_reducer";
import wineReducer from "../../wine_info/reducers/wine_reducer";
import wineRankReducer from "../../wine_info/reducers/wineRank_reducer";
import wineDetailReducer from "../../wine_info/reducers/wineDetail_reducer";
import feedReducer from "../../feed/reducers/feed_reducer";
import feedAllReducer from "../../feed/reducers/feed_all_reducer";
import SmartSearchReducer from "../../smartSearch/reducers/wine_reducer";


import {loginState} from "../reducers/login_reducer";
import {registerState} from "../../register/reducers/register_reducer";
import {wineState} from "../../wine_info/reducers/wine_reducer";
import {wineRankState} from "../../wine_info/reducers/wineRank_reducer";
import {wineDetailState} from "../../wine_info/reducers/wineDetail_reducer";
import {feedState} from "../../feed/reducers/feed_reducer";
import {feedAll} from "../../feed/reducers/feed_all_reducer";
import {smartSearch} from "../../smartSearch/reducers/wine_reducer";

const middlewares: any[] = [];

middlewares.push(logger);
middlewares.push(thunk);

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  wineReducer,
  wineRankReducer,
  wineDetailReducer,
  feedReducer,
  feedAllReducer,
  SmartSearchReducer
});

export interface rootState {
  loginReucer : loginState,
  registerReducer: registerState,
  wineReducer : wineState,
  wineRankReducer : wineRankState,
  wineDetailReducer : wineDetailState,
  feedReducer : feedState,
  feedAllReducer : feedAll,
  SmartSearchReducer : smartSearch
}


export default function configureStore(initialState : any) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}
