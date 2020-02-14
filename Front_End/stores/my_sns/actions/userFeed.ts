import { userFeedService } from '../services/userFeed';
import { createBrowserHistory } from 'history';
import {userFeedState} from "../reducers/userFeed_reducer";

export const actions = {
  SET_USER_FEED_INFO_PENDING: 'SET_USER_FEED_INFO_PENDING',
  SET_USER_FEED_INFO_SUCCESS: 'SET_USER_FEED_INFO_SUCCESS',
  SET_USER_FEED_INFO_ERROR: 'SET_USER_FEED_INFO_ERROR'
}
export async function getUserFeedList() {
  return async (dispatch: (arg0: { type: string; isFeedPending?: boolean; isFeedSuccess?: boolean; FeedError?: string; }) => void) => {
   dispatch(setUserFeedPending(true));

   dispatch(setUserFeedError("not yet"));
 
   
   await userFeedService.getUserFeedList("REVIEW").then(
     (response : any) => {
      dispatch(setUserFeedPending(false));
      console.log("this wine response");
      console.log(response);
      console.log("success");

      let userFeed : userFeedState[] = response;

      // let wineList : Wine[] = response.map((item: Wine) => {
      //   console.log(item);
      // });

      console.log("this is userFeed");
      console.log(userFeed);
      dispatch(setUserFeedSuccess(true, userFeed));
      
     },
     error => {
       dispatch(setUserFeedPending(false));
       dispatch(setUserFeedError("getWineListByType error"));
     }
   );
 }
}


function setUserFeedPending(isUserFeedPending : boolean) {
  return {
    type: actions.SET_USER_FEED_INFO_PENDING,
    isUserFeedPending
  };
}

function setUserFeedSuccess(isUserFeedSuccess : boolean, userFeed : userFeedState[]) {
  return {
    type: actions.SET_USER_FEED_INFO_SUCCESS,
    isUserFeedSuccess,
    userFeed
  };
}

function setUserFeedError(UserFeedError : string) {
  return {
    type: actions.SET_USER_FEED_INFO_ERROR,
    UserFeedError
  }
}
