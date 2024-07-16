/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InterFaceCarte } from '../../models/inter-face-carte';

export interface UpdateInterFaceCarte$Params {
  id: number;
      body: InterFaceCarte
}

export function updateInterFaceCarte(http: HttpClient, rootUrl: string, params: UpdateInterFaceCarte$Params, context?: HttpContext): Observable<StrictHttpResponse<InterFaceCarte>> {
  const rb = new RequestBuilder(rootUrl, updateInterFaceCarte.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<InterFaceCarte>;
    })
  );
}

updateInterFaceCarte.PATH = '/maps/{id}';
