import { loginService } from '../services/login';
import { createBrowserHistory } from 'history';

export const actions = {
  SET_LOGIN_PENDING: 'SET_LOGIN_PENDING',
  SET_LOGIN_SUCCESS: 'SET_LOGIN_SUCCESS',
  SET_LOGIN_ERROR: 'SET_LOGIN_ERROR'
}

export function login(email : string, password : string) {
   return async (dispatch: (arg0: { type: string; isLoginPending?: boolean; isLoginSuccess?: boolean; loginError?: string; }) => void) => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError("not yet"));


  
    
    await loginService.login(email, password).then(
      token => {
        localStorage.setItem('token', <any>token);
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true));

        sessionStorage.setItem(
          "userInfo", email
        );

      //  const history = createBrowserHistory();
      //   history.push('/ranking');
       
      
       
      },

      error => {
        dispatch(setLoginPending(false));
        dispatch(setLoginError("login error"));
      }
    );
  }
}

function setLoginPending(isLoginPending : boolean) {
  return {
    type: actions.SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess : boolean) {
  return {
    type: actions.SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError : string) {
  return {
    type: actions.SET_LOGIN_ERROR,
    loginError
  }
}
