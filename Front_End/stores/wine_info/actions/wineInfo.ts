import { wineService } from '../services/wine';
import { createBrowserHistory } from 'history';

export const actions = {
  SET_WINE_INFO_PENDING: 'SET_WINE_INFO_PENDING',
  SET_WINE_INFO_SUCCESS: 'SET_WINE_INFO_SUCCESS',
  SET_WINE_INFO_ERROR: 'SET_WINE_INFO_ERROR'
}

// export function getWineTop10() {
//    return async (dispatch: (arg0: { type: string; isWinePending?: boolean; isWineSuccess?: boolean; WineError?: string; }) => void) => {
//     dispatch(setWinePending(true));
//     dispatch(setWineSuccess(false));
//     dispatch(setWineError("not yet"));
  
//     await wineService.wineInfo().then(
//       JSON => {
        
//         // 여기 와인 정보가 넘어 오게 됨 ...어쩌지
//         dispatch(setWinePending(false));
//         dispatch(setWineSuccess(true));

  
//       },

//       error => {
//         dispatch(setWinePending(false));
//         dispatch(setWineError("getting wine is failed"));
//       }
//     );
//   }
// }

function setWinePending(isWinePending : boolean) {
  return {
    type: actions.SET_WINE_INFO_PENDING,
    isWinePending
  };
}

function setWineSuccess(isWineSuccess : boolean) {
  return {
    type: actions.SET_WINE_INFO_SUCCESS,
    isWineSuccess
  };
}

function setWineError(WineError : string) {
  return {
    type: actions.SET_WINE_INFO_ERROR,
    WineError
  }
}
