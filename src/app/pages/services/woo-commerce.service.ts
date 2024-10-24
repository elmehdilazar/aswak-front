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
    public getProduct(id){
      return this.wooProductService.getProduct$Response({id:id});
    }
    public updateOrderStatus$Response(orderId,status) {
        const params = { id: orderId, status };
        return this.wooOrderservice.updateOrderStatus$Response(params);
    }
    public getCount(){
      return this.DashboardService.getCounts$Response();
    }
    public lastorder(){
      return this.DashboardService.lastOrders$Response();
    }
public getOrdersPerMonth(){
      return this.DashboardService.getOrdersPerMonth$Response();
}
public deletOrder(id){

      return this.wooOrderservice.deleteOrder$Response(id);
}
public getCustomerPerMonth(){
      return this.DashboardService.getCostumersPerMonth$Response();
}

}
