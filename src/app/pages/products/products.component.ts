import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WooCommerceService} from "../services/woo-commerce.service";
import {Product} from "../models/product";
import {NgForOf} from "@angular/common";
import {Table, TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {Customer, Representative} from "../../demo/api/customer";
import {User} from "../models/user";
import {SelectItem} from "primeng/api";
import {ImageModule} from "primeng/image";
import {TagModule} from "primeng/tag";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-products',
  standalone: true,
    imports: [
        NgForOf,
        TableModule,
        ButtonModule,
        InputTextModule,
        RippleModule,
        ImageModule,
        TagModule
    ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
    Product:any;



    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;


    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    idFrozen: boolean = false;

    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;
    userDialogue: boolean = false;
    protected submitted: boolean;
    roles: SelectItem[] = [];
    protected msgs: any[];

    constructor(private woocomm:WooCommerceService) {
}

    ngOnInit(): void {
   this.woocomm.getAllProduct().subscribe({
       next: value => {
           console.log(value.body);
           this.Product=value.body;
           this.loading=false;
       },
       error: err => {
           console.log(err);
       }
   })
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }
    // @ts-ignore
    getSeverity(status: string) {

        switch (status) {
            case 'instock':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }

    protected readonly environment = environment;
}
