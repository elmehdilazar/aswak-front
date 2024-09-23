import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {WooCommerceService} from "../services/woo-commerce.service";
import {ButtonModule} from "primeng/button";
import {ImageModule} from "primeng/image";
import {InputTextModule} from "primeng/inputtext";
import {DatePipe, NgForOf} from "@angular/common";
import {RippleModule} from "primeng/ripple";
import {SelectItem, SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import {DialogModule} from "primeng/dialog";
import {CarouselModule} from "primeng/carousel";


@Component({
    selector: 'app-orders',
    standalone: true,
    imports: [
        ButtonModule,
        ImageModule,
        InputTextModule,
        NgForOf,
        RippleModule,
        SharedModule,
        TableModule,
        TagModule,
        DatePipe,
        DialogModule,
        CarouselModule
    ],
    templateUrl: './orders.component.html',
    styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
    Orders: any;


    statuses: any[] = [];


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
    responsiveOptions: any[] | undefined;
    productsCoresel: any;
    constructor(private orderService: WooCommerceService) {
    }

    ngOnInit(): void {
        this.orderService.getAllOrders().subscribe({
            next: value => {
                console.log(value);
                this.Orders = value.body;
                this.loading = false;
            },
            error: err => {

            }
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }
     showCaresel(Products){
        this.productsCoresel=Products;
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
            case 'completed':
                return 'success';
            case 'pending':
                return 'warning';
            case 'processing':
                return 'warning';
            case 'refunded':
                return 'secondary';
            case 'on-hold':
                return 'info';
            case 'faild':
                return 'danger';
            case 'trash':
                return 'danger';
            case 'cancelled':
                return 'danger';
        }
    }
    visible: boolean = false;



    showDialog(products) {
        this.visible = true;
        this.showCaresel(products);
    }
}
