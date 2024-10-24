/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteOrder } from '../fn/woo-order-rest-controller/delete-order';
import { DeleteOrder$Params } from '../fn/woo-order-rest-controller/delete-order';
import { getALlOrders } from '../fn/woo-order-rest-controller/get-a-ll-orders';
import { GetALlOrders$Params } from '../fn/woo-order-rest-controller/get-a-ll-orders';
import { getOrderById } from '../fn/woo-order-rest-controller/get-order-by-id';
import { GetOrderById$Params } from '../fn/woo-order-rest-controller/get-order-by-id';
import { updateOrder } from '../fn/woo-order-rest-controller/update-order';
import { UpdateOrder$Params } from '../fn/woo-order-rest-controller/update-order';
import { updateOrderStatus } from '../fn/woo-order-rest-controller/update-order-status';
import { UpdateOrderStatus$Params } from '../fn/woo-order-rest-controller/update-order-status';

@Injectable({ providedIn: 'root' })
export class WooOrderRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getOrderById()` */
  static readonly GetOrderByIdPath = '/woocommerce/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById$Response(params: GetOrderById$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getOrderById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOrderById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById(params: GetOrderById$Params, context?: HttpContext): Observable<string> {
    return this.getOrderById$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `updateOrder()` */
  static readonly UpdateOrderPath = '/woocommerce/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder$Response(params: UpdateOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder(params: UpdateOrder$Params, context?: HttpContext): Observable<string> {
    return this.updateOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `deleteOrder()` */
  static readonly DeleteOrderPath = '/woocommerce/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder$Response(params: DeleteOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder(params: DeleteOrder$Params, context?: HttpContext): Observable<string> {
    return this.deleteOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `updateOrderStatus()` */
  static readonly UpdateOrderStatusPath = '/woocommerce/orders/{id}/status';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrderStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderStatus$Response(params: UpdateOrderStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return updateOrderStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateOrderStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateOrderStatus(params: UpdateOrderStatus$Params, context?: HttpContext): Observable<string> {
    return this.updateOrderStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getALlOrders()` */
  static readonly GetALlOrdersPath = '/woocommerce/orders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getALlOrders()` instead.
   *
   * This method doesn't expect any request body.
   */
  getALlOrders$Response(params?: GetALlOrders$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getALlOrders(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getALlOrders$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getALlOrders(params?: GetALlOrders$Params, context?: HttpContext): Observable<string> {
    return this.getALlOrders$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
