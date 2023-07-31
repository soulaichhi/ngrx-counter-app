import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {loginStart, loginSuccess} from "./auth.actions";
import {catchError, exhaustMap, map, of} from "rxjs";
import {setErrorMessage, setLoadingSpinner} from "../../store/shared/shared.actions";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap(action => {
        return this.authService.login(action.email, action.password).pipe(
          map(data => {
            this.store.dispatch(setLoadingSpinner({status: false}));
            this.store.dispatch(setErrorMessage({message: ''}));
            const user = this.authService.formatUser(data);
            return loginSuccess({user})
          }),
          catchError(err => {
            this.store.dispatch(setLoadingSpinner({status: false}));
            const errorMessage = this.authService.getErrorMessage(err.error.error.message)
            return of(setErrorMessage({message: errorMessage}));
          })
        )
      })
    )
  })


  constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppState>) {
  }
}
