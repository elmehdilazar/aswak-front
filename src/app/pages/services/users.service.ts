import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../../environments/environment";
import {User} from "../models/user";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
   public getAllUser():Observable<Array<User>>{
    return  this.http.get<Array<User>>(environment.backendhost+"/users")
    }
}
