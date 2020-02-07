import { registerService } from '../services/register';
import { createBrowserHistory } from 'history';

export const actions = {
  SET_REGISTER_PENDING: 'SET_REGISTER_PENDING',
  SET_REGISTER_SUCCESS: 'SET_REGISTER_SUCCESS',
  SET_REGISTER_ERROR: 'SET_REGISTER_ERROR',
  SET_EMAIL_STATE: 'SET_EMAIL_STATE'
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
        dispatch(setRegisterError("register error"));
      }
    );
  }
}



export function emailCheck(email : string) {
  console.log("this is eamilCheck");
  return async (dispatch: (arg0: { emailState : string}) => void) => {
  
   dispatch(setEmailState("not yet"));
   console.log("email Check loading...");
   
   await registerService.emailCheck(email).then(
     response => {
       if(response) {
          console.log("이메일 확인 성공")
          console.log(response);
          dispatch(setEmailState("사용할 수 있는 이메일입니다."));
       } else {
        dispatch(setEmailState("사용할 수 없는  이메일입니다."));
       }

     },

     error => {
       dispatch(setEmailState("사용할 수 없는  이메일입니다."));
     }
   )


 }

}



export function SNSRegister(nickname : string, id : string, provider : string) {

  return async (dispatch: (arg0: { type: string; isRegisterPending?: boolean; isRegisterSuccess?: boolean; registerError?: string; }) => void) => {
    dispatch(setRegisterPending(true));
    dispatch(setRegisterSuccess(false));
    dispatch(setRegisterError("not yet"));
    console.log("register loading...");
    
    await registerService.register(nickname, id, provider).then(

      response => {
     
        console.log(response);
        dispatch(setRegisterPending(false));
        dispatch(setRegisterSuccess(true));

    

      },

      error => {
        dispatch(setRegisterPending(false));
        dispatch(setRegisterError("register error"));
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


function setEmailState(emailState : string) {
  return {
    type: actions.SET_EMAIL_STATE,
    emailState
  }
}

