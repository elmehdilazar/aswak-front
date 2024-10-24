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
import {TicketRestControllerService} from "../../services/services/ticket-rest-controller.service";
import {Ticket} from "../../services/models/ticket";
import {TagModule} from "primeng/tag";
import {cn} from "@fullcalendar/core/internal-common";
import {TokenService} from "../../token.service";
import {tick} from "@angular/core/testing";

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
        MessagesModule,
        TagModule
    ],
    templateUrl: './ticket.component.html',
    styleUrl: './ticket.component.scss'
})
export class TicketComponent implements OnInit {
    tickets = []

    user!: any;
    userinfo!:any;
  ticket:Ticket={
      description:'',
      status:"OPEN",
      subject:"",
      user:null,
  };

    selectRole:SelectItem={value:''}

    customers3: Customer[] = [];

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
    visibleStatus: boolean =false;
    statusTicketUpdate!: any;
    private TicketUpadateId: any;

    constructor(private ticketservice: TicketRestControllerService,private userSERVICE:UsersService,protected tokenService:TokenService ) {
    }

    ngOnInit() {

this.fetchTicket();
        this.statuses = [
            {label: 'open', value: 'OPEN'},
            {label: 'onhold', value: 'ONHOLD'},
            {label: 'closed', value: 'CLOSED'},

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
this.ticket.user={id:this.tokenService.user_id,role:this.tokenService.role};

console.log(this.ticket);

        this.ticketservice.createTicket$Response(
            {
                body:this.ticket,
            }
        ).subscribe({
            next:()=>{
                this.showViaMessages("success","Success Message","user added");
                this.hideDialog();
                this.fetchTicket();
                this.user=null;
            },
            error:(err)=>{console
                .log(err);
                this.showViaMessages("error","error Message","user not added");
            }
        })
    }
    fetchTicket(){

        this.ticketservice.getAllTickets$Response().subscribe({
            next: value => {
                this.tickets = value.body;
                this.loading=false;
                console.log(value.body);
            },
            error: err => {
                this.loading=false;
                console.log(err);
            }
        });
    }

    deleteTicket(id) {



        this.ticketservice.deleteTicket$Response({id:id}).subscribe({
            next: (value) =>
            {           console.log(value);
                this.showViaMessages("success","success Message","ticket deleted");
                this.fetchTicket();

            },
            error:err => {
                this.showViaMessages("error","error Message","ticket not deleted");
                console.log(err,id);
            }
        })


    }

    editUser(user: any) {
        this.userDialogue=true;
        user.password="";
        this.user=user;
    }


    showViaMessages(msgType:string,msgSummary,msgDetails) {
        this.msgs = [];
        this.msgs.push({ severity: msgType, summary: msgSummary, detail: msgDetails });
    }

    getSeverity(status: string) {
        switch (status) {
            case 'OPEN':
                return 'success';
            case 'ONHOLD':
                return 'warning';
            case 'CLOSED':
                return 'danger';
            default:
                   return 'info';
        }
    }

    updateTicketStatus() {
        if (!this.statusTicketUpdate || !this.TicketUpadateId) return;
this.ticket.status=this.statusTicketUpdate;
        this.ticketservice.updateTicket$Response(
        {
            id:this.TicketUpadateId,
            body:this.ticket,
        }
        ).subscribe({
            next: response => {
                console.log('Order status updated successfully:', response.body);
                this.showViaMessages("success","Success Message","ticket status updated");
                this.visibleStatus = false;  // Close the dialog on success
                this.fetchTicket();  // Optionally refresh the order list after update
            },
            error: err => {
                this.visibleStatus = false;
                this.showViaMessages("error","error Message","ticket status not updated");
                console.error('Error updating order status:', err,this.ticket);
            }
        });
    }

    showDialogSatsus(status, ticket) {
        this.statusTicketUpdate=status;
        this.visibleStatus=true;
        this.TicketUpadateId=ticket.id;
        this.ticket={
            status:ticket.status,
            description:ticket.description,
            subject:ticket.subject,
            user:{
            id:ticket.user.id,
            role:ticket.user.role
            }};
    }
}
