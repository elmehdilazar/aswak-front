import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {RoleEnum} from "./pages/models/user";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
    set role(role:any){
        localStorage.setItem('role', String(role));
    }
    get role(){
        // @ts-ignore
        return localStorage.getItem('role');
    }
    set fullname(fullname:String){
        localStorage.setItem('fullname', String(fullname));
    }
    get fullname(){
        // @ts-ignore
        return localStorage.getItem('fullname');
    }
     set user_id(user_id: number){
         localStorage.setItem('user_id', String(user_id));
     }
    get user_id(){
        // @ts-ignore
        return localStorage.getItem('user_id');
    }
    set token(token: string) {
        localStorage.setItem('token', token);
    }

    get token() {
        return localStorage.getItem('token') as string;
    }

    isTokenNotValid() {
        return !this.isTokenValid();
    }

    private isTokenValid() {
        const token=this.token;
        if(!token){
            return false;

        }
        // decode token
        const  jwtHelper:JwtHelperService=new JwtHelperService();
        const  isTokenExpired=jwtHelper.isTokenExpired(token);
        if(isTokenExpired){
            localStorage.clear();
            return false;
        }
        return true;
    }
}
