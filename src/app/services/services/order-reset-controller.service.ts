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
import { deleteOrder } from '../fn/order-reset-controller/delete-order';
import { DeleteOrder$Params } from '../fn/order-reset-controller/delete-order';
import { getAllOrders } from '../fn/order-reset-controller/get-all-orders';
import { GetAllOrders$Params } from '../fn/order-reset-controller/get-all-orders';
import { getOrderById } from '../fn/order-reset-controller/get-order-by-id';
import { GetOrderById$Params } from '../fn/order-reset-controller/get-order-by-id';
import { Order } from '../models/order';
import { updateOrder } from '../fn/order-reset-controller/update-order';
import { UpdateOrder$Params } from '../fn/order-reset-controller/update-order';

@Injectable({ providedIn: 'root' })
export class OrderResetControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getOrderById()` */
  static readonly GetOrderByIdPath = '/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrderById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById$Response(params: GetOrderById$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return getOrderById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOrderById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrderById(params: GetOrderById$Params, context?: HttpContext): Observable<Order> {
    return this.getOrderById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /** Path part for operation `updateOrder()` */
  static readonly UpdateOrderPath = '/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder$Response(params: UpdateOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
    return updateOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateOrder(params: UpdateOrder$Params, context?: HttpContext): Observable<Order> {
    return this.updateOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<Order>): Order => r.body)
    );
  }

  /** Path part for operation `deleteOrder()` */
  static readonly DeleteOrderPath = '/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder$Response(params: DeleteOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder(params: DeleteOrder$Params, context?: HttpContext): Observable<void> {
    return this.deleteOrder$Response(params, context).pipe(
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
