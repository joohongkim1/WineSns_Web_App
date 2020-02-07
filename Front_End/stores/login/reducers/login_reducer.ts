import { actions } from '../actions/login'

export interface loginAction {
  isLoginPending: boolean;
  isLoginSuccess: boolean,
  loginError: string
}

const initialState: loginAction = {
  isLoginPending: false,
  isLoginSuccess: false,
  loginError: '',
};

export default function loginReducer(state = initialState, action : any) {
  switch (action.type) {
    case actions.SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case actions.SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case actions.SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}

