/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createInterFaceCarte } from '../fn/inter-face-carte-rest-controller/create-inter-face-carte';
import { CreateInterFaceCarte$Params } from '../fn/inter-face-carte-rest-controller/create-inter-face-carte';
import { deleteInterFaceCarte } from '../fn/inter-face-carte-rest-controller/delete-inter-face-carte';
import { DeleteInterFaceCarte$Params } from '../fn/inter-face-carte-rest-controller/delete-inter-face-carte';
import { getAllInterFaceCartes } from '../fn/inter-face-carte-rest-controller/get-all-inter-face-cartes';
import { GetAllInterFaceCartes$Params } from '../fn/inter-face-carte-rest-controller/get-all-inter-face-cartes';
import { getInterFaceCarteById } from '../fn/inter-face-carte-rest-controller/get-inter-face-carte-by-id';
import { GetInterFaceCarteById$Params } from '../fn/inter-face-carte-rest-controller/get-inter-face-carte-by-id';
import { InterFaceCarte } from '../models/inter-face-carte';
import { updateInterFaceCarte } from '../fn/inter-face-carte-rest-controller/update-inter-face-carte';
import { UpdateInterFaceCarte$Params } from '../fn/inter-face-carte-rest-controller/update-inter-face-carte';

@Injectable({ providedIn: 'root' })
export class InterFaceCarteRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getInterFaceCarteById()` */
  static readonly GetInterFaceCarteByIdPath = '/maps/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getInterFaceCarteById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInterFaceCarteById$Response(params: GetInterFaceCarteById$Params, context?: HttpContext): Observable<StrictHttpResponse<InterFaceCarte>> {
    return getInterFaceCarteById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getInterFaceCarteById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getInterFaceCarteById(params: GetInterFaceCarteById$Params, context?: HttpContext): Observable<InterFaceCarte> {
    return this.getInterFaceCarteById$Response(params, context).pipe(
      map((r: StrictHttpResponse<InterFaceCarte>): InterFaceCarte => r.body)
    );
  }

  /** Path part for operation `updateInterFaceCarte()` */
  static readonly UpdateInterFaceCartePath = '/maps/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateInterFaceCarte()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateInterFaceCarte$Response(params: UpdateInterFaceCarte$Params, context?: HttpContext): Observable<StrictHttpResponse<InterFaceCarte>> {
    return updateInterFaceCarte(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateInterFaceCarte$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateInterFaceCarte(params: UpdateInterFaceCarte$Params, context?: HttpContext): Observable<InterFaceCarte> {
    return this.updateInterFaceCarte$Response(params, context).pipe(
      map((r: StrictHttpResponse<InterFaceCarte>): InterFaceCarte => r.body)
    );
  }

  /** Path part for operation `deleteInterFaceCarte()` */
  static readonly DeleteInterFaceCartePath = '/maps/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteInterFaceCarte()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInterFaceCarte$Response(params: DeleteInterFaceCarte$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteInterFaceCarte(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteInterFaceCarte$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteInterFaceCarte(params: DeleteInterFaceCarte$Params, context?: HttpContext): Observable<void> {
    return this.deleteInterFaceCarte$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllInterFaceCartes()` */
  static readonly GetAllInterFaceCartesPath = '/maps';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllInterFaceCartes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllInterFaceCartes$Response(params?: GetAllInterFaceCartes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<InterFaceCarte>>> {
    return getAllInterFaceCartes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllInterFaceCartes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllInterFaceCartes(params?: GetAllInterFaceCartes$Params, context?: HttpContext): Observable<Array<InterFaceCarte>> {
    return this.getAllInterFaceCartes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<InterFaceCarte>>): Array<InterFaceCarte> => r.body)
    );
  }

  /** Path part for operation `createInterFaceCarte()` */
  static readonly CreateInterFaceCartePath = '/maps';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createInterFaceCarte()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createInterFaceCarte$Response(params: CreateInterFaceCarte$Params, context?: HttpContext): Observable<StrictHttpResponse<InterFaceCarte>> {
    return createInterFaceCarte(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createInterFaceCarte$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createInterFaceCarte(params: CreateInterFaceCarte$Params, context?: HttpContext): Observable<InterFaceCarte> {
    return this.createInterFaceCarte$Response(params, context).pipe(
      map((r: StrictHttpResponse<InterFaceCarte>): InterFaceCarte => r.body)
    );
  }

}
