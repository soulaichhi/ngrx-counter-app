import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './custom-serializer';

export const getRouterState =
  createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');
export const getCurrentRoute = createSelector(getRouterState, (router) => {
  return router.state;
});
