/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InterFaceCarte } from '../../models/inter-face-carte';

export interface GetInterFaceCarteById$Params {
  id: number;
}

export function getInterFaceCarteById(http: HttpClient, rootUrl: string, params: GetInterFaceCarteById$Params, context?: HttpContext): Observable<StrictHttpResponse<InterFaceCarte>> {
  const rb = new RequestBuilder(rootUrl, getInterFaceCarteById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getInterFaceCarteById.PATH = '/maps/{id}';
