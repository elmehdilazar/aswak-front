/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createLog } from '../fn/log-rest-controller/create-log';
import { CreateLog$Params } from '../fn/log-rest-controller/create-log';
import { deleteLog } from '../fn/log-rest-controller/delete-log';
import { DeleteLog$Params } from '../fn/log-rest-controller/delete-log';
import { getAllLogs } from '../fn/log-rest-controller/get-all-logs';
import { GetAllLogs$Params } from '../fn/log-rest-controller/get-all-logs';
import { getLogById } from '../fn/log-rest-controller/get-log-by-id';
import { GetLogById$Params } from '../fn/log-rest-controller/get-log-by-id';
import { Log } from '../models/log';
import { updateLog } from '../fn/log-rest-controller/update-log';
import { UpdateLog$Params } from '../fn/log-rest-controller/update-log';

@Injectable({ providedIn: 'root' })
export class LogRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getLogById()` */
  static readonly GetLogByIdPath = '/logs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getLogById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLogById$Response(params: GetLogById$Params, context?: HttpContext): Observable<StrictHttpResponse<Log>> {
    return getLogById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getLogById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getLogById(params: GetLogById$Params, context?: HttpContext): Observable<Log> {
    return this.getLogById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Log>): Log => r.body)
    );
  }

  /** Path part for operation `updateLog()` */
  static readonly UpdateLogPath = '/logs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateLog()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLog$Response(params: UpdateLog$Params, context?: HttpContext): Observable<StrictHttpResponse<Log>> {
    return updateLog(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateLog$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateLog(params: UpdateLog$Params, context?: HttpContext): Observable<Log> {
    return this.updateLog$Response(params, context).pipe(
      map((r: StrictHttpResponse<Log>): Log => r.body)
    );
  }

  /** Path part for operation `deleteLog()` */
  static readonly DeleteLogPath = '/logs/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteLog()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLog$Response(params: DeleteLog$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteLog(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteLog$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteLog(params: DeleteLog$Params, context?: HttpContext): Observable<void> {
    return this.deleteLog$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllLogs()` */
  static readonly GetAllLogsPath = '/logs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllLogs()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLogs$Response(params?: GetAllLogs$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Log>>> {
    return getAllLogs(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllLogs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllLogs(params?: GetAllLogs$Params, context?: HttpContext): Observable<Array<Log>> {
    return this.getAllLogs$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Log>>): Array<Log> => r.body)
    );
  }

  /** Path part for operation `createLog()` */
  static readonly CreateLogPath = '/logs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createLog()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createLog$Response(params: CreateLog$Params, context?: HttpContext): Observable<StrictHttpResponse<Log>> {
    return createLog(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createLog$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createLog(params: CreateLog$Params, context?: HttpContext): Observable<Log> {
    return this.createLog$Response(params, context).pipe(
      map((r: StrictHttpResponse<Log>): Log => r.body)
    );
  }

}
