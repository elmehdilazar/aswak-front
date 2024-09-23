import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../../environments/environment";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {UserResetControllerService} from "../../services/services/user-reset-controller.service";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient ,private userService:UserResetControllerService) { }
   public getAllUser(){
    return  this.userService.getAllUsers();
    }
    public  saveUSER(user:User){
       return this.userService.createUser$Response(user);
    }
    public deleteuser(id){

      return this.userService.deleteUser({id:id});
    }

    UpdateUser(user) {
        return this.userService.updateUser$Response({
            id:user.id,
            body:user
        });
    }
}
