/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { getCounts } from '../fn/dashhboard-contoller/get-counts';
import { GetCounts$Params } from '../fn/dashhboard-contoller/get-counts';
import { WooCommerceCountsDto } from '../models/woo-commerce-counts-dto';

@Injectable({ providedIn: 'root' })
export class DashhboardContollerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCounts()` */
  static readonly GetCountsPath = '/woocommerce/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCounts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCounts$Response(params?: GetCounts$Params, context?: HttpContext): Observable<StrictHttpResponse<WooCommerceCountsDto>> {
    return getCounts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCounts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCounts(params?: GetCounts$Params, context?: HttpContext): Observable<WooCommerceCountsDto> {
    return this.getCounts$Response(params, context).pipe(
      map((r: StrictHttpResponse<WooCommerceCountsDto>): WooCommerceCountsDto => r.body)
    );
  }

}
