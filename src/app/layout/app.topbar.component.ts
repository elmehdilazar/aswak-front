import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import {Router} from "@angular/router";
import {TokenService} from "../token.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit{

    items!: MenuItem[];
 fullname!:any;
 role!:any;
    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,private router:Router,private tokenservice:TokenService) { }

    logout() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }

    ngOnInit(): void {
        this.fullname=this.tokenservice.fullname;
        this.role=this.tokenservice.role;
    }
}
