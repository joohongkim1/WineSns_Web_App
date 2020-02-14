import { actions } from '../actions/wineInfo'


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


export interface wineState  {
  wineList : Wine[],
  isWinePending : boolean,
  isWineSucceess : boolean,
  isWineError : string

}
const initialState : wineState = { 
    wineList : [],
    isWinePending : false,
    isWineSucceess : false,
    isWineError : ''
}

// {
  // wid: 0,
  // nameKor : '',
  // nameEng: '',
  // type: '',
  // sparkling: false,
  // grape: '',
  // country: '',
  // countrySub: '',
  // winery: '',
  // alcohol: 0,
  // whenUse: '',
  // grade: '',
  // sweet: 0,
  // body: 0,
  // acid: 0,
  // tannin: 0,
  // foodMatch: '',
  // info: '',
  // visit : 0,
  // likeNum: 0}

export default function rootReducer(state = initialState, action : any) {
  switch (action.type) {
    case actions.SET_WINE_INFO_PENDING:
      return {...state, 
        isWinePending: action.isWinePending
      }

    case actions.SET_WINE_INFO_SUCCESS:
      return {...state,
        isWineSuccess: action.isWineSuccess,
        wineList : action.wineList
      }

    case actions.SET_WINE_INFO_ERROR:
      return {...state,
        isWineError: action.WineError
      }
    default:
      return state;
  }
}
