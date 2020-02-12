import { wineService } from '../services/feed';
import { createBrowserHistory } from 'history';
import {feedState} from "../reducers/feed_reducer";


export const actions = {
  SET_FEED_INFO_PENDING: 'SET_FEED_INFO_PENDING',
  SET_FEED_INFO_SUCCESS: 'SET_FEED_INFO_SUCCESS',
  SET_FEED_INFO_ERROR: 'SET_FEED_INFO_ERROR'
}
export function getFeedListByWID(wid : number, type : string) {
  return async (dispatch: (arg0: { type: string; isFeedPending?: boolean; isFeedSuccess?: boolean; FeedError?: string; }) => void) => {
   dispatch(setWinePending(true));

   dispatch(setWineError("not yet"));
 
   
   await wineService.getFeedListByWID(wid, type).then(
     (response : any) => {
      dispatch(setWinePending(false));
      console.log("this wine response");
      console.log(response);
      console.log("success");

      let feedList : feedState[] = response;

      // let wineList : Wine[] = response.map((item: Wine) => {
      //   console.log(item);
      // });

      console.log("this is feedList");
      console.log(feedList);
      dispatch(setWineSuccess(true, feedList));
      
     },
     error => {
       dispatch(setWinePending(false));
       dispatch(setWineError("getWineListByType error"));
     }
   );
 }
}


function setWinePending(isFeedPending : boolean) {
  return {
    type: actions.SET_FEED_INFO_PENDING,
    isFeedPending
  };
}

function setWineSuccess(isFeedSuccess : boolean, feedList : feedState[]) {
  return {
    type: actions.SET_FEED_INFO_SUCCESS,
    isFeedSuccess,
    feedList
  };
}

function setWineError(FeedError : string) {
  return {
    type: actions.SET_FEED_INFO_ERROR,
    FeedError
  }
}
