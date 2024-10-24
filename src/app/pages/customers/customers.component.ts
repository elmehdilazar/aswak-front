import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {MessagesModule} from "primeng/messages";
import {NgIf} from "@angular/common";
import {PasswordModule} from "primeng/password";
import {ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {WooCustomerRestControllerService} from "../../services/services/woo-customer-rest-controller.service";
import {TokenService} from "../../token.service";

@Component({
  selector: 'app-customers',
  standalone: true,
    imports: [
        ButtonModule,
        DialogModule,
        DropdownModule,
        InputTextModule,
        MessagesModule,
        NgIf,
        PasswordModule,
        ReactiveFormsModule,
        RippleModule,
        SharedModule,
        TableModule
    ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})

export class CustomersComponent implements OnInit{
    customers: any;
    loading: boolean=true;
    protected msgs: any[];
    @ViewChild('filter') filter!: ElementRef;
    constructor(private customer:WooCustomerRestControllerService,protected token:TokenService) {
    }
    ngOnInit(): void {
this.fetchCstomer();
    }
    fetchCstomer(){
        this.customer.getALlOrders1$Response().subscribe({
            next:value => {
                this.customers=value.body;
                this.loading=false;
            },
            error: err => {

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

    deleteCustomer(id) {
this.customer.deleteOrder1({id:id}).subscribe({
    next:value => {
        this.fetchCstomer();
        this.showViaMessages("error","error message","customer deleted ");
    },
    error:err => {
        this.showViaMessages("error","error message","customer not deleted ");
    }
})
    }
    showViaMessages(msgType:string,msgSummary,msgDetails) {
        this.msgs = [];
        this.msgs.push({ severity: msgType, summary: msgSummary, detail: msgDetails });
    }
}
