import { actions } from '../actions/register'

export interface RegisterUser {
  isRegisterPending: boolean;
  isRegisterSuccess: boolean;
  registerError: string;
}

const initialState: RegisterUser = {
  isRegisterPending: false,
  isRegisterSuccess: false,
  registerError: ''
};

export default function rootReducer(state = initialState, action : any) {
  switch (action.type) {
    case actions.SET_REGISTER_PENDING:
      return Object.assign({}, state, {
        isRegisterPending: action.isRegisterPending
      });

    case actions.SET_REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isRegisteruccess: action.isRegisterSuccess
      });

    case actions.SET_REGISTER_ERROR:
      return Object.assign({}, state, {
        registerError: action.registerError
      });

    default:
      return state;
  }
}
