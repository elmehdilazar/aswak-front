/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getCostumersPerMonth } from '../fn/dashhboard-contoller/get-costumers-per-month';
import { GetCostumersPerMonth$Params } from '../fn/dashhboard-contoller/get-costumers-per-month';
import { getCounts } from '../fn/dashhboard-contoller/get-counts';
import { GetCounts$Params } from '../fn/dashhboard-contoller/get-counts';
import { getGlobalTotalOrdersPrice } from '../fn/dashhboard-contoller/get-global-total-orders-price';
import { GetGlobalTotalOrdersPrice$Params } from '../fn/dashhboard-contoller/get-global-total-orders-price';
import { getOrdersPerMonth } from '../fn/dashhboard-contoller/get-orders-per-month';
import { GetOrdersPerMonth$Params } from '../fn/dashhboard-contoller/get-orders-per-month';
import { lastOrders } from '../fn/dashhboard-contoller/last-orders';
import { LastOrders$Params } from '../fn/dashhboard-contoller/last-orders';
import { WooCommerceCountsDto } from '../models/woo-commerce-counts-dto';

@Injectable({ providedIn: 'root' })
export class DashhboardContollerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getGlobalTotalOrdersPrice()` */
  static readonly GetGlobalTotalOrdersPricePath = '/woocommerce/total-orders-price';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getGlobalTotalOrdersPrice()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGlobalTotalOrdersPrice$Response(params?: GetGlobalTotalOrdersPrice$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getGlobalTotalOrdersPrice(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getGlobalTotalOrdersPrice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getGlobalTotalOrdersPrice(params?: GetGlobalTotalOrdersPrice$Params, context?: HttpContext): Observable<number> {
    return this.getGlobalTotalOrdersPrice$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getOrdersPerMonth()` */
  static readonly GetOrdersPerMonthPath = '/woocommerce/orders-per-month';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOrdersPerMonth()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrdersPerMonth$Response(params?: GetOrdersPerMonth$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<number>>> {
    return getOrdersPerMonth(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getOrdersPerMonth$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOrdersPerMonth(params?: GetOrdersPerMonth$Params, context?: HttpContext): Observable<Array<number>> {
    return this.getOrdersPerMonth$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<number>>): Array<number> => r.body)
    );
  }

  /** Path part for operation `lastOrders()` */
  static readonly LastOrdersPath = '/woocommerce/lastOrders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `lastOrders()` instead.
   *
   * This method doesn't expect any request body.
   */
  lastOrders$Response(params?: LastOrders$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return lastOrders(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `lastOrders$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  lastOrders(params?: LastOrders$Params, context?: HttpContext): Observable<string> {
    return this.lastOrders$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `getCounts()` */
  static readonly GetCountsPath = '/woocommerce/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCounts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCounts$Response(params?: GetCounts$Params, context?: HttpContext): Observable<StrictHttpResponse<WooCommerceCountsDto>> {
    return getCounts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCounts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCounts(params?: GetCounts$Params, context?: HttpContext): Observable<WooCommerceCountsDto> {
    return this.getCounts$Response(params, context).pipe(
      map((r: StrictHttpResponse<WooCommerceCountsDto>): WooCommerceCountsDto => r.body)
    );
  }

  /** Path part for operation `getCostumersPerMonth()` */
  static readonly GetCostumersPerMonthPath = '/woocommerce/costumers-per-month';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCostumersPerMonth()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCostumersPerMonth$Response(params?: GetCostumersPerMonth$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<number>>> {
    return getCostumersPerMonth(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCostumersPerMonth$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCostumersPerMonth(params?: GetCostumersPerMonth$Params, context?: HttpContext): Observable<Array<number>> {
    return this.getCostumersPerMonth$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<number>>): Array<number> => r.body)
    );
  }

}
