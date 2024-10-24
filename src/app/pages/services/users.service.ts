import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../../environments/environment";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {UserResetControllerService} from "../../services/services/user-reset-controller.service";
import {TokenService} from "../../token.service";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
user!:any;
  constructor(private http:HttpClient ,private userService:UserResetControllerService,private  tokenservice:TokenService) { }
   public getAllUser(){
    return  this.userService.getAllUsers();
    }
    public  saveUSER(user:User){
       return this.userService.createUser$Response(user);
    }
    public deleteuser(id){

      return this.userService.deleteUser({id:id});
    }

    UpdateUser(id,user) {
      console.log(user);
        return this.userService.updateUser$Response({
           id:id,
            body:user});

    }
    getUserInfos(){

return this.userService.getUserById$Response({
    id:this.tokenservice.user_id
});}
}
