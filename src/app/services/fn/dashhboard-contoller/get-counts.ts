/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { WooCommerceCountsDto } from '../../models/woo-commerce-counts-dto';

export interface GetCounts$Params {
}

export function getCounts(http: HttpClient, rootUrl: string, params?: GetCounts$Params, context?: HttpContext): Observable<StrictHttpResponse<WooCommerceCountsDto>> {
  const rb = new RequestBuilder(rootUrl, getCounts.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<WooCommerceCountsDto>;
    })
  );
}

getCounts.PATH = '/woocommerce/count';
