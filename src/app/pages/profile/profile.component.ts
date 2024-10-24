import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {MessagesModule} from "primeng/messages";
import {NgForOf, NgIf} from "@angular/common";
import {PasswordModule} from "primeng/password";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UsersService} from "../services/users.service";
import {InputTextareaModule} from "primeng/inputtextarea";

@Component({
  selector: 'app-profile',
  standalone: true,
    imports: [
        ButtonModule,
        InputTextModule,
        MessagesModule,
        NgForOf,
        NgIf,
        PasswordModule,
        ReactiveFormsModule,
        FormsModule,
        InputTextareaModule
    ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

    user={
        id:0,
        firstName:'',
        lastName:'',
        password:'',
        role:undefined

    };
    protected msgs: any[];
    constructor(private userservice:UsersService) {
    }
    ngOnInit(): void {
        this.userservice.getUserInfos().subscribe({
            next: value => {
this.user.id=value.body.id;
                this.user.firstName=value.body.firstName;
                this.user.lastName=value.body.lastName;
                this.user.role=value.body.role;
            }
        })
    }

    save() {
this.userservice.UpdateUser(this.user.id,this.user).subscribe({
    next: value => {
        this.showViaMessages("success","success Message","your profile updated");
    },
    error: err => {
        this.showViaMessages("error","error Message","your not updated");
    }
})
    }
    showViaMessages(msgType:string,msgSummary,msgDetails) {
        this.msgs = [];
        this.msgs.push({ severity: msgType, summary: msgSummary, detail: msgDetails });
    }
}
