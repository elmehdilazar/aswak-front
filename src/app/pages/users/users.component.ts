import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CurrencyPipe, DatePipe, NgClass, NgIf} from "@angular/common";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {ProgressBarModule} from "primeng/progressbar";
import {SelectItem, SharedModule} from "primeng/api";
import {SliderModule} from "primeng/slider";
import {Table, TableModule} from "primeng/table";
import {Customer, Representative} from "../../demo/api/customer";
import {Product} from "../../demo/api/product";
import {CustomerService} from "../../demo/service/customer.service";
import {ProductService} from "../../demo/service/product.service";
import {FormsModule} from "@angular/forms";
import {RoleEnum, User} from "../models/user";
import {UsersService} from "../services/users.service";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextareaModule} from "primeng/inputtextarea";
import {RadioButtonModule} from "primeng/radiobutton";
import {PasswordModule} from "primeng/password";
import {MessagesModule} from "primeng/messages";

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [
        ButtonModule,
        CurrencyPipe,
        DatePipe,
        DropdownModule,
        InputTextModule,
        MultiSelectModule,
        ProgressBarModule,
        SharedModule,
        SliderModule,
        TableModule,
        FormsModule,
        NgClass,
        RippleModule,
        DialogModule,
        InputNumberModule,
        InputTextareaModule,
        NgIf,
        RadioButtonModule,
        PasswordModule,
        MessagesModule
    ],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

    customers1: Customer[] = [];
    users = []
    user!: User;
    selectRole:SelectItem={value:''}
    customers2: Customer[] = [];

    customers3: Customer[] = [];

    selectedCustomers1: Customer[] = [];

    selectedCustomer: Customer = {};

    representatives: Representative[] = [];

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

    constructor(private userservice: UsersService, private customerService: CustomerService, private productService: ProductService) {
    }

    ngOnInit() {
        this.customerService.getCustomersLarge().then(customers => {
            this.customers1 = customers;
            this.loading = false;

            // @ts-ignore
            this.customers1.forEach(customer => customer.date = new Date(customer.date));
        });
        this.customerService.getCustomersMedium().then(customers => this.customers2 = customers);
        this.customerService.getCustomersLarge().then(customers => this.customers3 = customers);
        this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
        this.fetchUser();
        this.representatives = [
            {name: 'Amy Elsner', image: 'amyelsner.png'},
            {name: 'Anna Fali', image: 'annafali.png'},
            {name: 'Asiya Javayant', image: 'asiyajavayant.png'},
            {name: 'Bernardo Dominic', image: 'bernardodominic.png'},
            {name: 'Elwin Sharvill', image: 'elwinsharvill.png'},
            {name: 'Ioni Bowcher', image: 'ionibowcher.png'},
            {name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png'},
            {name: 'Onyama Limba', image: 'onyamalimba.png'},
            {name: 'Stephen Shaw', image: 'stephenshaw.png'},
            {name: 'XuXue Feng', image: 'xuxuefeng.png'}
        ];

        this.statuses = [
            {label: 'Unqualified', value: 'unqualified'},
            {label: 'Qualified', value: 'qualified'},
            {label: 'New', value: 'new'},
            {label: 'Negotiation', value: 'negotiation'},
            {label: 'Renewal', value: 'renewal'},
            {label: 'Proposal', value: 'proposal'}
        ];
        this.roles = [
            {label:"SUPERADMIN",value:"SUPERADMIN"},
            {label:"CRC",value:"CRC"},
            {label:"DISPATCHER",value:"DISPATCHER"},
            {label:"PREPARER",value:"PREPARER"},

        ];
    }

    onSort() {
        this.updateRowGroupMetaData();
    }

    updateRowGroupMetaData() {
        this.rowGroupMetadata = {};

        if (this.customers3) {
            for (let i = 0; i < this.customers3.length; i++) {
                const rowData = this.customers3[i];
                const representativeName = rowData?.representative?.name || '';

                if (i === 0) {
                    this.rowGroupMetadata[representativeName] = {index: 0, size: 1};
                } else {
                    const previousRowData = this.customers3[i - 1];
                    const previousRowGroup = previousRowData?.representative?.name;
                    if (representativeName === previousRowGroup) {
                        this.rowGroupMetadata[representativeName].size++;
                    } else {
                        this.rowGroupMetadata[representativeName] = {index: i, size: 1};
                    }
                }
            }
        }
    }


    formatCurrency(value: number) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    openNewUser() {
        this.userDialogue = true;
        this.user = {
            email: "",
            employedID: "",
            firstName: "",
            id: null,
            lastName: "",
            password: "",
            role: undefined,
            urlimage: ""
        };
        this.submitted = false;
    }

    hideDialog() {
        this.userDialogue = false;
        this.submitted=false;
    }

    saveUser() {
        this.submitted = true;
        this.user.role=this.selectRole.value;
  console.log(this.user);
  this.userservice.saveUSER(this.user).subscribe({
      next:()=>{
          this.showViaMessages("success","Success Message","user added");
        this.hideDialog();
        this.fetchUser();
        this.user=null;
      },
      error:(err)=>{console
          .log(err);
          this.showViaMessages("error","error Message","user not added");
      }
  })
    }
    fetchUser(){
        this.userservice.getAllUser().subscribe({
            next: value => {
                this.users = value;
                console.log(value);
            },
            error: err => {

                console.log(err);
            }
        });
    }

    deleteUser(id) {



            this.userservice.deleteuser(id).subscribe({
                next: (value) =>
                {           console.log(value);
                    this.showViaMessages("success","success Message","user deleted");
                    this.fetchUser();

                },
                error:err => {
                    this.showViaMessages("error","error Message","user not deleted");
                    console.log(err,id);
                }
            })


    }

    editUser(user: any) {
        this.userDialogue=true;
        user.password="";
        this.user=user;
    }

    updateUser(user) {
        this.submitted=true;
        user.role=this.selectRole.value;

        console.log(user);
        this.userservice.UpdateUser(user).subscribe({
            next: value => {
                console.log(value);
                this.fetchUser();
                this.showViaMessages("success","Success Message","user updated");
                this.userDialogue=false;
            },
            error:err => {
                this.showViaMessages("error","error Message","user not updated");
                console.log(err);
            }
        })
    }
    showViaMessages(msgType:string,msgSummary,msgDetails) {
        this.msgs = [];
        this.msgs.push({ severity: msgType, summary: msgSummary, detail: msgDetails });
    }


}
