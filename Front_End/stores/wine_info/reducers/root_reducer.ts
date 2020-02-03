import { actions } from '../actions/wineInfo'

export default function rootReducer(state = {}, action : any) {
  switch (action.type) {
    case actions.SET_WINE_INFO_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isWinePending
      });

    case actions.SET_WINE_INFO_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isWineSuccess
      });

    case actions.SET_WINE_INFO_ERROR:
      return Object.assign({}, state, {
        loginError: action.WineError
      });

    default:
      return state;
  }
}
