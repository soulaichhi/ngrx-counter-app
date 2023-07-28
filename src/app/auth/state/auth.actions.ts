import {createAction, props} from "@ngrx/store";

const LOGIN_START = '[Auth Page] login start';
const LOGIN_SUCCESS = '[Auth Page] login success';
const LOGIN_FAIL = '[Auth Page] login fail';

export const loginStart = createAction(LOGIN_START, props<{ email, password }>())
export const loginSuccess = createAction(LOGIN_SUCCESS)
export const loginFail = createAction(LOGIN_FAIL)
