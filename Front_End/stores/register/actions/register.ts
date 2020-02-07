import { registerService } from '../services/register';
import { createBrowserHistory } from 'history';

export const actions = {
  SET_REGISTER_PENDING: 'SET_REGISTER_PENDING',
  SET_REGISTER_SUCCESS: 'SET_REGISTER_SUCCESS',
  SET_REGISTER_ERROR: 'SET_REGISTER_ERROR'
}

export function register(nickname : string, email : string, password : string) {
   return async (dispatch: (arg0: { type: string; isRegisterPending?: boolean; isRegisterSuccess?: boolean; registerError?: string; }) => void) => {
    dispatch(setRegisterPending(true));
    dispatch(setRegisterSuccess(false));
    dispatch(setRegisterError("not yet"));
    console.log("register loading...");
    
    await registerService.register(nickname, email, password).then(

      response => {

        console.log(response);
        dispatch(setRegisterPending(false));
        dispatch(setRegisterSuccess(true));

    

      },

      error => {
        dispatch(setRegisterPending(false));
        dispatch(setRegisterError("login error"));
      }
    );
  }
}

function setRegisterPending(isRegisterPending : boolean) {
  return {
    type: actions.SET_REGISTER_PENDING,
    isRegisterPending
  };
}

function setRegisterSuccess(isRegisterSuccess : boolean) {
  return {
    type: actions.SET_REGISTER_SUCCESS,
    isRegisterSuccess
  };
}

function setRegisterError(registerError : string) {
  return {
    type: actions.SET_REGISTER_ERROR,
    registerError
  }
}
