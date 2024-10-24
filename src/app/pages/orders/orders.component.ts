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
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {MessagesModule} from "primeng/messages";
import {environment} from "../../../environments/environment";
import {StrictHttpResponse} from "../../services/strict-http-response";
import {LogRestControllerService} from "../../services/services/log-rest-controller.service";
import {User} from "../../services/models/user";
import {TokenService} from "../../token.service";



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
        CarouselModule,
        DropdownModule,
        FormsModule,
        MessagesModule
    ],
    templateUrl: './orders.component.html',
    styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {
    Orders: any;
statusOrderUpdate:string;
OrderUpadateId:string;


    statuses: any[] = [];
  slugProd={ categories:[{slug:""}] };
visibleMap=false;
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
    constructor(private orderService: WooCommerceService, private logsservice :LogRestControllerService, protected token :TokenService) {
    }

    ngOnInit(): void {

        this.refreshOrders();
        this.statuses = [

            { label: 'Processing', value: 'processing' },
            { label: 'Preparing', value: 'preparing' },
            { label: 'Prepared', value: 'prepared' }

        ];
        if(this.token.role=='SUPERADMIN'  || this.token.role=='CRC'){
            this.statuses.push({ label: 'Pending', value: 'pending' },
                { label: 'On Hold', value: 'on-hold' },
                { label: 'Completed', value: 'completed' },
                { label: 'Cancelled', value: 'cancelled' },
                { label: 'Refunded', value: 'refunded' },
                { label: 'Failed', value: 'failed' },
                { label: 'Valid', value: 'valid' },
                { label: 'Delivered', value: 'delivered' },
)
        }else if(this.token.role=='DISPATCHER' ){
            this.statuses.push(
                { label: 'Valid', value: 'valid' },
            );
        }
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
            case 'prepared':
                return 'help';
            case 'preparing':
                return 'warning';
            case 'valid':
                return 'success';
            case 'delivered':
                return 'success';
        }
    }
    visible: boolean = false;
    visibleStatus: boolean=false;



    showDialog(products) {
        this.visible = true;
        this.showCaresel(products);
    }

    showDialogSatsus(status, id) {
        this.visibleStatus = true;
        this.statusOrderUpdate=status;
        this.OrderUpadateId=id;

    }


    updateOrderStatus(): void {
        if (!this.statusOrderUpdate || !this.OrderUpadateId) return;

        this.orderService.updateOrderStatus$Response(this.OrderUpadateId, this.statusOrderUpdate).subscribe({
            next: response => {
                this.showViaMessages("success","success Message","Order status updated successfully");
       this.loginsert("Order status updated to "+this.statusOrderUpdate,"update");
                this.visibleStatus = false;  // Close the dialog on success
                this.refreshOrders();  // Optionally refresh the order list after update
            },
            error: err => {
                this.showViaMessages("error","error Message","Error updating order status");

            }
        });
    }


    private refreshOrders() {
        this.orderService.getAllOrders().subscribe({
            next: value => {
                console.log(value);
                this.Orders = value.body;
                this.loading = false;
            },
            error: err => {
console.log(err);
            }
        });
    }

    deletOrder(id) {
        this.orderService.deletOrder({id:id}).subscribe({
            next: response => {

                this.visibleStatus = false;  // Close the dialog on success
                this.refreshOrders();
                this.showViaMessages("success","success Message","order deleted");
                // Optionally refresh the order list after update
            },
            error: err => {
                this.showViaMessages("error","error Message","order not deleted");
            }
        });
    }
    showViaMessages(msgType:string,msgSummary,msgDetails) {
        this.msgs = [];
        this.msgs.push({ severity: msgType, summary: msgSummary, detail: msgDetails });
    }

    showMapProduct(product_id: any) {
        let data!:any;
   this.orderService.getProduct(product_id).subscribe({
       next: value => {
           this.visibleMap=true;
           console.log(value.body);
           data=value.body;
           this.slugProd.categories[0].slug=data.categories[0].slug;
       }
   })

    }
private  loginsert(dataupdated,operation){
    this.logsservice.createLog$Response({
        body:{
            details:dataupdated+",by user "+this.token.fullname,
            operation:operation,
            user: {
                id:this.token.user_id,
                role:this.token.role,
            }
        }
    }).subscribe({
        error: err => {
            console.log(err);
        }
    });
}
    protected readonly environment = environment;
}
