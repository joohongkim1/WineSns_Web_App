import { actions } from '../actions/mainRank';


// example consuming code
export interface Wine {
  wid: number;
  nameKor : string;
  nameEng: string;
  type: string;
  sparkling: boolean,
  grape: string;
  country: string;
  countrySub: string;
  winery: string;
  alcohol: number,
  whenUse: string;
  grade: string,
  sweet: number,
  body: number,
  acid: number,
  tannin: number,
  foodMatch: string;
  info: string;
  visit : number;
  likeNum: number
}


export interface wineRankState  {
  wineTop3 : Wine[],
  wineTop10 : Wine[],
  isWinePending : boolean,
  isWineTop3Succeess : boolean,
  isWineTop10Succeess : boolean,
  isWineError : string

}
const initialState : wineRankState = { 
  wineTop3 : [],
    wineTop10 : [],
    isWinePending : false,
    isWineTop3Succeess : false,
    isWineTop10Succeess : false,
    isWineError : ''
}

export default function rootReducer(state = initialState, action : any) {
  switch (action.type) {
    case actions.SET_WINE_INFO_PENDING:
      return {...state, 
        isLoginPending: action.isWinePending
      }

    case actions.SET_WINE_TOP3_SUCCESS:
      return {...state,
        isLoginSuccess: action.isWineSuccess,
        wineTop3 : action.wineTop3
      }

      case actions.SET_WINE_TOP10_SUCCESS:
        return {...state,
          isLoginSuccess: action.isWineSuccess,
          wineTop10 : action.wineTop10
        }

    case actions.SET_WINE_INFO_ERROR:
      return {...state,
        loginError: action.WineError
      }
    default:
      return state;
  }
}
