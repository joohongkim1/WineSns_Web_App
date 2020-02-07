import { actions } from '../actions/wineInfo'


// example consuming code
interface Wine {
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

const initialState = { 
  AllWine : [{ 
    wid: 0,
    nameKor : '',
    nameEng: '',
    type: '',
    sparkling: false,
    grape: '',
    country: '',
    countrySub: '',
    winery: '',
    alcohol: 0,
    whenUse: '',
    grade: '',
    sweet: 0,
    body: 0,
    acid: 0,
    tannin: 0,
    foodMatch: '',
    info: '',
    visit : 0,
    likeNum: 0}] as Wine[],
    isWinePending : false,
    isWineSucceess : false,
    isWineError : false
}


export default function rootReducer(state = initialState, action : any) {
  switch (action.type) {
    case actions.SET_WINE_INFO_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isWinePending
      });

    case actions.SET_WINE_INFO_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isWineSuccess,
        AllWine : action.AllWine
      });

    case actions.SET_WINE_INFO_ERROR:
      return Object.assign({}, state, {
        loginError: action.WineError
      });

    default:
      return state;
  }
}
