import {CanActivateFn, Router} from '@angular/router';
import {TokenService} from "../../token.service";
import {inject} from "@angular/core";

export const adminprotectGuard: CanActivateFn = (route, state) => {
    const  tokenSrvice:TokenService=inject(TokenService);
    const  router:Router=inject(Router);
    if(tokenSrvice.role!=="SUPERADMIN"){
        router.navigate(['/']);
        return false;
    }
    return true;

};
