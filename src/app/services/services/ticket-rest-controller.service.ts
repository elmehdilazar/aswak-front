/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createTicket } from '../fn/ticket-rest-controller/create-ticket';
import { CreateTicket$Params } from '../fn/ticket-rest-controller/create-ticket';
import { deleteTicket } from '../fn/ticket-rest-controller/delete-ticket';
import { DeleteTicket$Params } from '../fn/ticket-rest-controller/delete-ticket';
import { getAllTickets } from '../fn/ticket-rest-controller/get-all-tickets';
import { GetAllTickets$Params } from '../fn/ticket-rest-controller/get-all-tickets';
import { getTicketById } from '../fn/ticket-rest-controller/get-ticket-by-id';
import { GetTicketById$Params } from '../fn/ticket-rest-controller/get-ticket-by-id';
import { Ticket } from '../models/ticket';
import { updateTicket } from '../fn/ticket-rest-controller/update-ticket';
import { UpdateTicket$Params } from '../fn/ticket-rest-controller/update-ticket';

@Injectable({ providedIn: 'root' })
export class TicketRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTicketById()` */
  static readonly GetTicketByIdPath = '/tickets/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTicketById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTicketById$Response(params: GetTicketById$Params, context?: HttpContext): Observable<StrictHttpResponse<Ticket>> {
    return getTicketById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTicketById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTicketById(params: GetTicketById$Params, context?: HttpContext): Observable<Ticket> {
    return this.getTicketById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ticket>): Ticket => r.body)
    );
  }

  /** Path part for operation `updateTicket()` */
  static readonly UpdateTicketPath = '/tickets/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTicket()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTicket$Response(params: UpdateTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<Ticket>> {
    return updateTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTicket$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTicket(params: UpdateTicket$Params, context?: HttpContext): Observable<Ticket> {
    return this.updateTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ticket>): Ticket => r.body)
    );
  }

  /** Path part for operation `deleteTicket()` */
  static readonly DeleteTicketPath = '/tickets/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTicket()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTicket$Response(params: DeleteTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTicket$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTicket(params: DeleteTicket$Params, context?: HttpContext): Observable<void> {
    return this.deleteTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllTickets()` */
  static readonly GetAllTicketsPath = '/tickets';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTickets()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTickets$Response(params?: GetAllTickets$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Ticket>>> {
    return getAllTickets(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTickets$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTickets(params?: GetAllTickets$Params, context?: HttpContext): Observable<Array<Ticket>> {
    return this.getAllTickets$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Ticket>>): Array<Ticket> => r.body)
    );
  }

  /** Path part for operation `createTicket()` */
  static readonly CreateTicketPath = '/tickets';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTicket()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTicket$Response(params: CreateTicket$Params, context?: HttpContext): Observable<StrictHttpResponse<Ticket>> {
    return createTicket(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTicket$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTicket(params: CreateTicket$Params, context?: HttpContext): Observable<Ticket> {
    return this.createTicket$Response(params, context).pipe(
      map((r: StrictHttpResponse<Ticket>): Ticket => r.body)
    );
  }

}
