import { wineDetailService } from '../services/wineDetail';
import { Wine } from "../reducers/wineDetail_reducer";

export const actions = {
  SET_WINE_DETAIL_PENDING: 'SET_WINE_DETAIL_PENDING',
  SET_WINE_DETAIL_SUCCESS: 'SET_WINE_DETAIL_SUCCESS',
  SET_WINE_DETAIL_ERROR: 'SET_WINE_DETAIL_ERROR'
}


export function getWineDetail(wid : number) {
  return async (dispatch: (arg0: { type: string; isLoginPending?: boolean; isLoginSuccess?: boolean; loginError?: string; }) => void) => {
   dispatch(setWinePending(true));

   dispatch(setWineError("not yet"));
 
   
   await wineDetailService.getWineDetail(wid).then(
     (response : any) => {
      dispatch(setWinePending(false));
      console.log(response);
      console.log("success");
    

    
      let wine : Wine = response;
      // console.log("this is wine");
      // console.log(wine);
      dispatch(setWineSuccess(true, wine));
      
     },
     error => {
       dispatch(setWinePending(false));
       dispatch(setWineError("getWineDetail error"));
     }
   );
 }
}


function setWinePending(isWineDetailPending : boolean) {
  return {
    type: actions.SET_WINE_DETAIL_PENDING,
    isWineDetailPending
  };
}

function setWineSuccess(isWineDetailSuccess : boolean, wine : Wine) {
  return {
    type: actions.SET_WINE_DETAIL_SUCCESS,
    isWineDetailSuccess,
    wine
  };
}

function setWineError(WineDetailError : string) {
  return {
    type: actions.SET_WINE_DETAIL_ERROR,
    WineDetailError
  }
}
