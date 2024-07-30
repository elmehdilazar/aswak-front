import {CanActivateFn, Router} from '@angular/router';
import {TokenService} from "../../token.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
    const  tokenSrvice:TokenService=inject(TokenService);
    const  router:Router=inject(Router);
    if(tokenSrvice.isTokenNotValid()){
 router.navigate(['login']);
 return false;
    }
  return true;
};
