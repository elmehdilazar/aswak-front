import { Injectable } from '@angular/core';
import {WooOrderRestControllerService} from "../../services/services/woo-order-rest-controller.service";
import {WooProductRestControllerService} from "../../services/services/woo-product-rest-controller.service";

@Injectable({
  providedIn: 'root'
})
export class WooCommerceService {

  constructor(private wooOrderservice:WooOrderRestControllerService,private wooProductService:WooProductRestControllerService) { }
    public  getAllProduct(){
      return this.wooProductService.getAllProduct$Response();
    }
    public getAllOrders(){
      return this.wooOrderservice.getALlOrders$Response();
    }
}
