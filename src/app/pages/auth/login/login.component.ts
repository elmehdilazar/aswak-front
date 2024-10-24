import {Component, OnInit, WritableSignal} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthenticationRequest} from "../../../services/models/authentication-request";
import {MessagesModule} from "primeng/messages";
import {Message} from "primeng/api";
import {NgForOf, NgIf} from "@angular/common";
import {AuthenticationService} from "../../../services/services/authentication.service";
import {TokenService} from "../../../token.service";
import {LogRestControllerService} from "../../../services/services/log-rest-controller.service";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        PasswordModule,
        RouterLink,
        FormsModule,
        MessagesModule,
        NgForOf,
        NgIf
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

    authRequest: AuthenticationRequest = {email: '', password: ''};
    errorMsg: Array<string> = [];


    messages: Message[] | undefined;
constructor(private router:Router,private authService:AuthenticationService,private logsservice :LogRestControllerService, private tokenService: TokenService) {
}
    ngOnInit(): void {
       this.messages=[];
    }


    login() {
this.errorMsg=[];
this.authService.login({
    body:this.authRequest
}).subscribe({
    next:(res)=>{
        // todo save token
        this.tokenService.role=res.role;
        this.tokenService.fullname=res.fullname
        this.tokenService.user_id=res.user_id;
        this.tokenService.token = res.token as string;
        this.loginsert("user logged  ","login");
        this.router.navigateByUrl("/");
    },
    error: (err)=> {
        console.log(err.error);
        if (err.error.validationErrors) {
            this.errorMsg = err.error.validationErrors;
            console.log(this.errorMsg);
        } else {
            this.errorMsg.push(err.error.errorMsg);
        }
        }
})
    }
    private  loginsert(dataupdated,operation){
        this.logsservice.createLog$Response({
            body:{
                details:dataupdated+",by user "+this.tokenService.fullname,
                operation:operation,
                user: {
                    id:this.tokenService.user_id,
                    role:this.tokenService.role,
                }
            }
        }).subscribe({
            error: err => {
                console.log(err);
            }
        });
    }
}
