import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import {TokenService} from "../token.service";

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService,private tookenservice:TokenService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    {label: 'Products',icon: "pi pi-fw pi-table",routerLink: ['/products']},
                    {label: 'Oders',icon: "pi pi-fw pi-shopping-bag",routerLink: ['/orders']},



                ]
            },
        ];
        if(this.tookenservice.role=='DISPATCHER' || this.tookenservice.role=='SUPERADMIN'){
            this.model[0].items.push({label: 'Maps',icon: "pi pi-fw pi-map",routerLink: ['/maps']});
        }
        if(this.tookenservice.role!='PREPARER'){
            this.model[0].items.push(  {label: 'Customers',icon: "pi pi-fw pi-users",routerLink: ['/customers']});
            this.model.push( {
                label: "setting",
                items: [

                    {label: 'tickets',icon: "pi pi-fw pi-ticket",routerLink: ['/tickes']},

                ]
            })
        }
        if (this.tookenservice.role=='SUPERADMIN'){
            this.model[1].items.push(  {label: 'users',icon: "pi pi-fw pi-user",routerLink: ['/users']},
                {label: 'logs',icon: "pi pi-fw pi-history",routerLink: ['/logs']}

            );

        }
    }
}
