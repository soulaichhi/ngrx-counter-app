import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user.model";

const LOGIN_START = '[Auth Page] login start';
const LOGIN_SUCCESS = '[Auth Page] login success';
const LOGIN_FAIL = '[Auth Page] login fail';

export const loginStart = createAction(LOGIN_START, props<{ email: string; password: string }>())
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: User }>())
export const loginFail = createAction(LOGIN_FAIL)

const SIGNUP_START = '[Auth Page] signup start';
const SIGNUP_SUCCESS = '[Auth Page] signup success';

export const signUpStart = createAction(SIGNUP_START, props<{ email: string; password: string }>());
export const signUpSuccess = createAction(SIGNUP_SUCCESS,
  props<{ user: User }>());
