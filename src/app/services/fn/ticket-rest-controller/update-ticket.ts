/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Ticket } from '../../models/ticket';

export interface UpdateTicket$Params {
  id: number;
      body: Ticket
}

export function updateTicket(http: HttpClient, rootUrl: string, params: UpdateTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<Ticket>> {
  const rb = new RequestBuilder(rootUrl, updateTicket.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Ticket>;
    })
  );
}

updateTicket.PATH = '/tickets/{id}';
