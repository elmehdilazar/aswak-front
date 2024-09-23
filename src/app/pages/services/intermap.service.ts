import { Injectable } from '@angular/core';
import {InterFaceCarteRestControllerService} from "../../services/services/inter-face-carte-rest-controller.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IntermapService {

  constructor(private map:InterFaceCarteRestControllerService,private http:HttpClient) { }
    public  createMap(file:any,filename:any){
        const formData: FormData = new FormData();
        formData.append('file', file); // `this.file` is a `File`, and `File` is a `Blob`
        formData.append('Filename', filename);

       return this.http.post(environment.backendhost+'/maps', formData, {
            reportProgress: true,
            responseType: 'json'
        });


    }
    public getAllMaps(){
      return this.map.getAllInterFaceCartes$Response();
    }
    public deleteMap(id){
      return this.map.deleteInterFaceCarte$Response({id:id});
    }
    public  updateMap(file:any,filename:any,id:any){
        const formData: FormData = new FormData();
        formData.append('file', file); // `this.file` is a `File`, and `File` is a `Blob`
        formData.append('Filename', filename);

        return this.http.put(environment.backendhost+'/maps/'+id, formData, {
            reportProgress: true,
            responseType: 'json'
        });
    }
}
