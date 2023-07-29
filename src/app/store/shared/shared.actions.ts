import {createAction, props} from "@ngrx/store";

const SET_LOADING_ACTION = '[Shared State] set loading spinner';


export const setLoadingSpinner = createAction(SET_LOADING_ACTION, props<{ status: boolean }>())
