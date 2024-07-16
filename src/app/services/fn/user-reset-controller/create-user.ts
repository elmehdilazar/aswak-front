/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { User } from '../../models/user';

export interface CreateUser$Params {
  firstName: string;
  lastName: string;
  email: string;
  role: 'SUPERADMIN' | 'PREPARER' | 'DISPATCHER' | 'DELIVERY_PERSON' | 'CRC';
  urlimage: string;
  password: string;
  employedID: string;
}

export function createUser(http: HttpClient, rootUrl: string, params: CreateUser$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
  const rb = new RequestBuilder(rootUrl, createUser.PATH, 'post');
  if (params) {
    rb.query('firstName', params.firstName, {});
    rb.query('lastName', params.lastName, {});
    rb.query('email', params.email, {});
    rb.query('role', params.role, {});
    rb.query('urlimage', params.urlimage, {});
    rb.query('password', params.password, {});
    rb.query('employedID', params.employedID, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<User>;
    })
  );
}

createUser.PATH = '/users';
