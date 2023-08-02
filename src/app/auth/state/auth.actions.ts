import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user.model";

const LOGIN_START = '[Auth Page] login start';
const LOGIN_SUCCESS = '[Auth Page] login success';
const LOGIN_FAIL = '[Auth Page] login fail';


const SIGNUP_START = '[Auth Page] signup start';
const SIGNUP_SUCCESS = '[Auth Page] signup success';

const AUTO_LOGIN_ACTION = '[Auth Page] auto login';

const LOGOUT_ACTION = '[Auth Page] auto logout';
export const loginStart = createAction(LOGIN_START, props<{ email: string; password: string }>())
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: User | null; redirect: boolean }>())


export const loginFail = createAction(LOGIN_FAIL)
export const signUpStart = createAction(SIGNUP_START, props<{ email: string; password: string }>());
export const signUpSuccess = createAction(SIGNUP_SUCCESS,
  props<{ user: User; redirect: boolean }>());


export const autoLogin = createAction(AUTO_LOGIN_ACTION)

export const autoLogout = createAction(LOGOUT_ACTION)
