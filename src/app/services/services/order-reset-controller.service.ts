/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createOrder } from '../fn/order-reset-controller/create-order';
import { CreateOrder$Params } from '../fn/order-reset-controller/create-order';
import { deleteOrder2 } from '../fn/order-reset-controller/delete-order-2';
import { DeleteOrder2$Params } from '../fn/order-reset-controller/delete-order-2';
import { getAllOrders } from '../fn/order-reset-controller/get-all-orders';
import { GetAllOrders$Params } from '../fn/order-reset-controller/get-all-orders';
import { getOrderById1 } from '../fn/order-reset-controller/get-order-by-id-1';
import { GetOrderById1$Params } from '../fn/order-reset-controller/get-order-by-id-1';
import { Order } from '../models/order';
import { updateOrder1 } from '../fn/order-reset-controller/update-order-1';
import { UpdateOrder1$Params } from '../fn/order-reset-controller/update-order-1';

@Injectable({ providedIn: 'root' })
export class OrderResetControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getOrderById1()` */
  static readonly GetOrderById1Path = '/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById1$Response(params: GetOrderById1$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return getOrderById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOrderById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById1(params: GetOrderById1$Params, context?: HttpContext): Observable<Order> {
    return this.getOrderById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /** Path part for operation `updateOrder1()` */
  static readonly UpdateOrder1Path = '/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrder1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder1$Response(params: UpdateOrder1$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return updateOrder1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateOrder1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder1(params: UpdateOrder1$Params, context?: HttpContext): Observable<Order> {
    return this.updateOrder1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /** Path part for operation `deleteOrder2()` */
  static readonly DeleteOrder2Path = '/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOrder2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder2$Response(params: DeleteOrder2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteOrder2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOrder2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder2(params: DeleteOrder2$Params, context?: HttpContext): Observable<void> {
    return this.deleteOrder2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllOrders()` */
  static readonly GetAllOrdersPath = '/orders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllOrders()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOrders$Response(params?: GetAllOrders$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Order>>> {
    return getAllOrders(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllOrders$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOrders(params?: GetAllOrders$Params, context?: HttpContext): Observable<Array<Order>> {
    return this.getAllOrders$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Order>>): Array<Order> => r.body)
    );
  }

  /** Path part for operation `createOrder()` */
  static readonly CreateOrderPath = '/orders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOrder$Response(params: CreateOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return createOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createOrder(params: CreateOrder$Params, context?: HttpContext): Observable<Order> {
    return this.createOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

}
