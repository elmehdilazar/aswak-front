/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Order } from '../../models/order';

export interface UpdateOrder1$Params {
  id: number;
      body: Order
}

export function updateOrder1(http: HttpClient, rootUrl: string, params: UpdateOrder1$Params, context?: HttpContext): Observable<StrictHttpResponse<Order>> {
  const rb = new RequestBuilder(rootUrl, updateOrder1.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Order>;
    })
  );
}

updateOrder1.PATH = '/orders/{id}';
