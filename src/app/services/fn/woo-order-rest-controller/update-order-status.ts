/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface UpdateOrderStatus$Params {
  id: string;
  status: string;
}

export function updateOrderStatus(http: HttpClient, rootUrl: string, params: UpdateOrderStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, updateOrderStatus.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.query('status', params.status, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

updateOrderStatus.PATH = '/woocommerce/orders/{id}/status';
