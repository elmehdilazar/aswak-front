import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {MessagesModule} from "primeng/messages";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import {LogRestControllerService} from "../../services/services/log-rest-controller.service";
import {deleteLog} from "../../services/fn/log-rest-controller/delete-log";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-logs',
  standalone: true,
    imports: [
        ButtonModule,
        DropdownModule,
        InputTextModule,
        MessagesModule,
        RippleModule,
        SharedModule,
        TableModule,
        TagModule,
        DatePipe
    ],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.scss'
})
export class LogsComponent implements OnInit{
    logs: any[];
    @ViewChild('filter') filter!: ElementRef;
    protected msgs: any[];
    loading: boolean = true;
constructor(private logsService:LogRestControllerService) {
}
    ngOnInit(): void {
this.fethLog();
    }
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }
private fethLog(){
    this.logsService.getAllLogs$Response().subscribe({
        next: value => {
            this.logs=value.body
            this.loading=false;
        },
        error: err => {
            this.showViaMessages("error","error Message","logs not loaded");
        }
    })
}
    showViaMessages(msgType:string,msgSummary,msgDetails) {
        this.msgs = [];
        this.msgs.push({ severity: msgType, summary: msgSummary, detail: msgDetails });
    }

    protected readonly deleteLog = deleteLog;

    deleteLogs(id) {
        this.logsService.deleteLog$Response({id:id}).subscribe({
            next: (value) =>
            {           console.log(value);
                this.showViaMessages("success","success Message","log deleted");
                this.fethLog();

            },
            error:err => {
                this.showViaMessages("error","error Message","log not deleted");
                console.log(err,id);
            }
        })
    }
}
