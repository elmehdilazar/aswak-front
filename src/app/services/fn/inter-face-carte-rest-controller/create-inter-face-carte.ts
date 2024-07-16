/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InterFaceCarte } from '../../models/inter-face-carte';

export interface CreateInterFaceCarte$Params {
      body: InterFaceCarte
}

export function createInterFaceCarte(http: HttpClient, rootUrl: string, params: CreateInterFaceCarte$Params, context?: HttpContext): Observable<StrictHttpResponse<InterFaceCarte>> {
  const rb = new RequestBuilder(rootUrl, createInterFaceCarte.PATH, 'post');
  if (params) {
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

createInterFaceCarte.PATH = '/maps';
