import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {loginStart, loginSuccess} from "./auth.actions";
import {exhaustMap, map} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {AuthResponseData} from "../../models/auth-response-data.model";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(map((data: AuthResponseData) => {
          const user = this.authService.formatUser(data);
          return loginSuccess({user})
        }))
      })
    )
  })

  constructor(private actions$: Actions, private authService: AuthService) {
  }

}
