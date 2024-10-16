import { Injectable } from '@angular/core';
import {WooOrderRestControllerService} from "../../services/services/woo-order-rest-controller.service";
import {WooProductRestControllerService} from "../../services/services/woo-product-rest-controller.service";
import {DashhboardContollerService} from "../../services/services/dashhboard-contoller.service";

@Injectable({
  providedIn: 'root'
})
export class WooCommerceService {

  constructor(private wooOrderservice:WooOrderRestControllerService,private wooProductService:WooProductRestControllerService,private DashboardService:DashhboardContollerService) { }
    public  getAllProduct(){
      return this.wooProductService.getAllProduct$Response();
    }
    public getAllOrders(){
      return this.wooOrderservice.getALlOrders$Response();
    }
    public updateOrderStatus$Response(orderId,status) {
        const params = { id: orderId, status };
        return this.wooOrderservice.updateOrderStatus$Response(params);
    }
    public getCount(){
      return this.DashboardService.getCounts$Response();
    }
}
