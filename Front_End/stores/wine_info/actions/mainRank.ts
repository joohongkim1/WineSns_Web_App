import { wineMainService } from '../services/mainRank';
import { createBrowserHistory } from 'history';
import { Wine } from "../reducers/wine_reducer";
import { map } from "rxjs/operators";
import {Observable } from 'rxjs';

export const actions = {
  SET_WINE_INFO_PENDING: 'SET_WINE_INFO_PENDING',
  SET_WINE_TOP3_SUCCESS: 'SET_WINE_TOP3_SUCCESS',
  SET_WINE_TOP10_SUCCESS: 'SET_WINE_TOP10_SUCCESS',
  SET_WINE_INFO_ERROR: 'SET_WINE_INFO_ERROR'
}
export function getWineTop3(type : string) {
  return async (dispatch: (arg0: { type: string; isLoginPending?: boolean; isLoginSuccess?: boolean; loginError?: string; }) => void) => {
   dispatch(setWinePending(true));

   dispatch(setWineError("not yet"));
 
   
   await wineMainService.getWineTop3(type).then(
     (response : any) => {
      dispatch(setWinePending(false));
      console.log("this wine response");
      console.log(response);
      console.log("success");
    

    
      let wines : Wine[] = response;

      // let wineList : Wine[] = response.map((item: Wine) => {
      //   console.log(item);
      // });

      console.log("this is wine Top 3 List");
      console.log(wines);
      dispatch(setWineTop3Success(true, wines));
      
     },
     error => {
       dispatch(setWinePending(false));
       dispatch(setWineError("get Wine Top 3 error"));
     }
   );
 }
}


export function getWineTop10(type : string) {
    return async (dispatch: (arg0: { type: string; isLoginPending?: boolean; isLoginSuccess?: boolean; loginError?: string; }) => void) => {
     dispatch(setWinePending(true));
  
     dispatch(setWineError("not yet"));
   
     
     await wineMainService.getWineTop10(type).then(
       (response : any) => {
        dispatch(setWinePending(false));
        console.log("this wine response");
        console.log(response);
        console.log("success");
      
        let wines : Wine[] = response;
  
        console.log("this is wine Top 10 List");
        console.log(wines);
        dispatch(setWineTop10Success(true, wines));
        
       },
       error => {
         dispatch(setWinePending(false));
         dispatch(setWineError("get Wine Top 10 error"));
       }
     );
   }
  }

  
function setWinePending(isWinePending : boolean) {
  return {
    type: actions.SET_WINE_INFO_PENDING,
    isWinePending
  };
}

function setWineTop3Success(isWineTop3Success : boolean, wineTop3 : Wine[]) {
  return {
    type: actions.SET_WINE_TOP3_SUCCESS,
    isWineTop3Success,
    wineTop3
  };
}

function setWineTop10Success(isWineTop10Success : boolean, wineTop10 : Wine[]) {
    return {
      type: actions.SET_WINE_TOP10_SUCCESS,
      isWineTop10Success,
      wineTop10
    };
  }

function setWineError(WineError : string) {
  return {
    type: actions.SET_WINE_INFO_ERROR,
    WineError
  }
}
