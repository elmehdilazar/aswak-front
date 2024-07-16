/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InterFaceCarte } from '../../models/inter-face-carte';

export interface GetAllInterFaceCartes$Params {
}

export function getAllInterFaceCartes(http: HttpClient, rootUrl: string, params?: GetAllInterFaceCartes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<InterFaceCarte>>> {
  const rb = new RequestBuilder(rootUrl, getAllInterFaceCartes.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<InterFaceCarte>>;
    })
  );
}

getAllInterFaceCartes.PATH = '/maps';
