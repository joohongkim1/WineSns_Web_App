import { userFollowService } from '../services/follow';
import { createBrowserHistory } from 'history';
import {userFollow} from "../reducers/follow_reducer";
import {User} from "../reducers/userFeed_reducer";

export const actions = {
  SET_USER_FOLLOW_PENDING: 'SET_USER_FOLLOW_PENDING',
  SET_USER_FOLLOW_SUCCESS: 'SET_USER_FOLLOW_SUCCESS',
  SET_USER_FOLLOW_ERROR: 'SET_USER_FOLLOW_ERROR'
}

export function getUserFollowList() {
  return async (dispatch: (arg0: { type: string; isFeedPending?: boolean; isFeedSuccess?: boolean; FeedError?: string; }) => void) => {
   dispatch(setUserFollowPending(true));

//    dispatch(setUserFollowError("not yet"));
 
   
   await userFollowService.getUserFollowerList().then(
     (response : any) => {
      dispatch(setUserFollowPending(false));
  
      let userFollower : User[] = response;


      let userFollow = JSON.parse(sessionStorage.getItem('userFollow') || '{}');
      
      dispatch(setUserFollowSuccess(true, userFollow, userFollower));

     },
     error => {
       dispatch(setUserFollowPending(false));
       dispatch(setUserFollowError("User Follow error"));
     }
   );
 }
}



export function followUserByUID(uid : number) {
    return async (dispatch: (arg0: { type: string; isFeedDetailPending?: boolean; isFeedDetailSuccess?: boolean; FeedDetailError?: string; }) => void) => {
     dispatch(setUserFollowPending(true));
     await userFollowService.followUser(uid).then(
       async (response : any) => {
        dispatch(setUserFollowPending(false));
       },
       error => {
        dispatch(setUserFollowPending(false));
        dispatch(setUserFollowError("user follow error"));
       }
     );
   }
  }
  
  export function UnfollowUserByUID(uid : number) {
    return async (dispatch: (arg0: { type: string; isFeedDetailPending?: boolean; isFeedDetailSuccess?: boolean; FeedDetailError?: string; }) => void) => {
     dispatch(setUserFollowPending(true));
     await userFollowService.UnfollowUser(uid).then(
       async (response : any) => {
        dispatch(setUserFollowPending(false));
        

        userFollowService.getUserFollowList();
       },
       error => {
        dispatch(setUserFollowPending(false));
        dispatch(setUserFollowError("user unfollow error"));
       }
     );
   }
  }
  

function setUserFollowPending(isUserFollowPending : boolean) {
  return {
    type: actions.SET_USER_FOLLOW_PENDING,
    isUserFollowPending
  }
}

function setUserFollowSuccess(isUserFollowSuccess : boolean, follow : User[], follower : User[]) {
  return {
    type: actions.SET_USER_FOLLOW_SUCCESS,
    isUserFollowSuccess,
    follow,
    follower
  };
}

function setUserFollowError(UserFollowError : string) {
  return {
    type: actions.SET_USER_FOLLOW_ERROR,
    UserFollowError
  }
}
