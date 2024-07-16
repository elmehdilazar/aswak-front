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
constructor(private router:Router,private authService:AuthenticationService, private tokenService: TokenService) {
}
    ngOnInit(): void {
        this.messages = [
            { severity: 'error', detail: ""},
        ];
    }


    login() {
this.errorMsg=[];
this.authService.login({
    body:this.authRequest
}).subscribe({
    next:(res)=>{
        // todo save token
        this.tokenService.token = res.token as string;
        this.router.navigateByUrl("/");
    },
    error: (err)=> {
        console.log(err);
        if (err.error.validationErrors) {
            this.errorMsg = err.error.validationErrors;
            console.log(this.errorMsg);
        } else {
            this.errorMsg.push(err.error.errorMsg);
        }
        }
})
    }
}
