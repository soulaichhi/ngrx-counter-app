import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {loginStart, loginSuccess} from "./auth.actions";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {setErrorMessage, setLoadingSpinner} from "../../store/shared/shared.actions";
import {Router} from "@angular/router";

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
  loginRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginSuccess),
      tap((action) => {
        this.router.navigateByUrl('/')
      })
    )
  }, {dispatch: false})

  constructor(private actions$: Actions, private authService: AuthService, private store: Store<AppState>, private router: Router) {
  }
}
