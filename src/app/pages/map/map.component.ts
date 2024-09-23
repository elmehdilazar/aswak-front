import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CarouselModule} from "primeng/carousel";
import {DatePipe} from "@angular/common";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {MessageService, SelectItem, SharedModule} from "primeng/api";
import {Table, TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import {DropdownModule} from "primeng/dropdown";
import {MessagesModule} from "primeng/messages";
import {PaginatorModule} from "primeng/paginator";
import {PasswordModule} from "primeng/password";
import {ProductService} from "../../demo/service/product.service";
import {WooCommerceService} from "../services/woo-commerce.service";
import {FileUploadEvent, FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {IntermapService} from "../services/intermap.service";
import {ImageModule} from "primeng/image";
import {environment} from "../../../environments/environment";
interface UploadEvent {
    originalEvent: Event;
    files: File[];
}
@Component({
  selector: 'app-map',
  standalone: true,
    imports: [
        ButtonModule,
        CarouselModule,
        DatePipe,
        DialogModule,
        InputTextModule,
        RippleModule,
        SharedModule,
        TableModule,
        TagModule,
        DropdownModule,
        MessagesModule,
        PaginatorModule,
        PasswordModule,
        FileUploadModule,
        ToastModule,
        ImageModule
    ],
    providers: [MessageService],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{
    mapDialogue: boolean =false;

    msgs: any[];
    private data:any;
    category:any=[{label:"",value:""},];
    maps: any[];
    Map:any;
    selectName:SelectItem={value:''}
    protected submitted: boolean;
    loading: boolean=false;
    private dataSelection: SelectItem[];
    @ViewChild('filter') filter!: ElementRef;
    newMap: boolean=false;
    file: File;
    protected idMap: any;
    constructor(private product:WooCommerceService,private mapsI:IntermapService ,private messageService: MessageService) {
    }
    ngOnInit(): void {
        this.product.getAllProduct().subscribe({
            next: value => {

                this.data=value.body;
                if (this.data.length>0){
                    this.newMap=true;
                }else{
                    this.newMap=false;
                }
            },
            error:err => {
                console.log(err);
            }
        });
        this.fetchMap();





    }
fetchMap(){
        this.mapsI.getAllMaps().subscribe({
            next: value => {
               this.maps=value.body
            },
            error:err => {
                console.log(err);
            }
        })
}
    openMapDialog(){
        this.mapDialogue=true;
        this.submitted = false;
        console.log(this.data);

this.fetchCategoris()


    }

fetchCategoris(){
    this.data.forEach((el)=>{
        let cat={
            label:el.categories[0].slug,
            value:el.categories[0].slug
        };
        this.category.push(cat);

    });
}
    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }
    onBasicUpload() {
      // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

    hideDialog() {
        this.mapDialogue = false;
        this.submitted=false;
    }

    saveMap() {
        console.log(this.file,this.selectName)
  this.mapsI.createMap(this.file,this.selectName.value).subscribe({
      next: value => {
          console.log(value);
      },
      error:err => {
          console.log(err);
      }

  });
        this.submitted = true;
        this.mapDialogue=false;
        this.fetchMap();
    }

    updateMap() {
        this.mapsI.updateMap(this.file,this.selectName.value,this.idMap).subscribe({
            next:value => {
                console.log(value)
                this.submitted = true;
                this.mapDialogue=false;
                this.fetchMap();
            },
            error:err => {
                console.log(err)
            }
        });

    }

    onUpload(event: any) {

       this.file=event.files[0];
    }


    deleteMap(id) {
this.mapsI.deleteMap(id).subscribe({
    next:value => {
        this.fetchMap()
        console.log(value)
    },
    error:err => {

    }
})
    }

    editMap(map: any) {
        this.idMap=map.id;
        let str=map.image.toString().split(".")
        this.selectName.value=str[0]
       this.submitted=true
        this.mapDialogue=true
        this.fetchCategoris()
    }

    protected readonly environment = environment;
}
