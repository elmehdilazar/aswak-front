/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Product } from '../../models/product';

export interface GetProductsByCode$Params {
  code: number;
}

export function getProductsByCode(http: HttpClient, rootUrl: string, params: GetProductsByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Product>>> {
  const rb = new RequestBuilder(rootUrl, getProductsByCode.PATH, 'get');
  if (params) {
    rb.path('code', params.code, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Product>>;
    })
  );
}

getProductsByCode.PATH = '/products/code/{code}';
