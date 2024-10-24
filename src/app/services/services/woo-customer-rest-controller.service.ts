/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteOrder1 } from '../fn/woo-customer-rest-controller/delete-order-1';
import { DeleteOrder1$Params } from '../fn/woo-customer-rest-controller/delete-order-1';
import { getALlOrders1 } from '../fn/woo-customer-rest-controller/get-a-ll-orders-1';
import { GetALlOrders1$Params } from '../fn/woo-customer-rest-controller/get-a-ll-orders-1';

@Injectable({ providedIn: 'root' })
export class WooCustomerRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getALlOrders1()` */
  static readonly GetALlOrders1Path = '/woocommerce/customers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getALlOrders1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getALlOrders1$Response(params?: GetALlOrders1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getALlOrders1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getALlOrders1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getALlOrders1(params?: GetALlOrders1$Params, context?: HttpContext): Observable<string> {
    return this.getALlOrders1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `deleteOrder1()` */
  static readonly DeleteOrder1Path = '/woocommerce/customers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOrder1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder1$Response(params: DeleteOrder1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteOrder1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOrder1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOrder1(params: DeleteOrder1$Params, context?: HttpContext): Observable<string> {
    return this.deleteOrder1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
