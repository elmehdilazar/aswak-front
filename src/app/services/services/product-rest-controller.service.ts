/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createProduct1 } from '../fn/product-rest-controller/create-product-1';
import { CreateProduct1$Params } from '../fn/product-rest-controller/create-product-1';
import { deleteProduct1 } from '../fn/product-rest-controller/delete-product-1';
import { DeleteProduct1$Params } from '../fn/product-rest-controller/delete-product-1';
import { getAllProducts } from '../fn/product-rest-controller/get-all-products';
import { GetAllProducts$Params } from '../fn/product-rest-controller/get-all-products';
import { getProductById } from '../fn/product-rest-controller/get-product-by-id';
import { GetProductById$Params } from '../fn/product-rest-controller/get-product-by-id';
import { getProductsByCategory } from '../fn/product-rest-controller/get-products-by-category';
import { GetProductsByCategory$Params } from '../fn/product-rest-controller/get-products-by-category';
import { getProductsByCode } from '../fn/product-rest-controller/get-products-by-code';
import { GetProductsByCode$Params } from '../fn/product-rest-controller/get-products-by-code';
import { getProductsByMarque } from '../fn/product-rest-controller/get-products-by-marque';
import { GetProductsByMarque$Params } from '../fn/product-rest-controller/get-products-by-marque';
import { Product } from '../models/product';
import { updateProduct1 } from '../fn/product-rest-controller/update-product-1';
import { UpdateProduct1$Params } from '../fn/product-rest-controller/update-product-1';

@Injectable({ providedIn: 'root' })
export class ProductRestControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getProductById()` */
  static readonly GetProductByIdPath = '/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductById$Response(params: GetProductById$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return getProductById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductById(params: GetProductById$Params, context?: HttpContext): Observable<Product> {
    return this.getProductById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /** Path part for operation `updateProduct1()` */
  static readonly UpdateProduct1Path = '/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProduct1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct1$Response(params: UpdateProduct1$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return updateProduct1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateProduct1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduct1(params: UpdateProduct1$Params, context?: HttpContext): Observable<Product> {
    return this.updateProduct1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /** Path part for operation `deleteProduct1()` */
  static readonly DeleteProduct1Path = '/products/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProduct1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct1$Response(params: DeleteProduct1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteProduct1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteProduct1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduct1(params: DeleteProduct1$Params, context?: HttpContext): Observable<void> {
    return this.deleteProduct1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllProducts()` */
  static readonly GetAllProductsPath = '/products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllProducts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProducts$Response(params?: GetAllProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Product>>> {
    return getAllProducts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllProducts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllProducts(params?: GetAllProducts$Params, context?: HttpContext): Observable<Array<Product>> {
    return this.getAllProducts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Product>>): Array<Product> => r.body)
    );
  }

  /** Path part for operation `createProduct1()` */
  static readonly CreateProduct1Path = '/products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createProduct1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduct1$Response(params: CreateProduct1$Params, context?: HttpContext): Observable<StrictHttpResponse<Product>> {
    return createProduct1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createProduct1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduct1(params: CreateProduct1$Params, context?: HttpContext): Observable<Product> {
    return this.createProduct1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Product>): Product => r.body)
    );
  }

  /** Path part for operation `getProductsByMarque()` */
  static readonly GetProductsByMarquePath = '/products/marque/{marque}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductsByMarque()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductsByMarque$Response(params: GetProductsByMarque$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Product>>> {
    return getProductsByMarque(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductsByMarque$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductsByMarque(params: GetProductsByMarque$Params, context?: HttpContext): Observable<Array<Product>> {
    return this.getProductsByMarque$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Product>>): Array<Product> => r.body)
    );
  }

  /** Path part for operation `getProductsByCode()` */
  static readonly GetProductsByCodePath = '/products/code/{code}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductsByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductsByCode$Response(params: GetProductsByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Product>>> {
    return getProductsByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductsByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductsByCode(params: GetProductsByCode$Params, context?: HttpContext): Observable<Array<Product>> {
    return this.getProductsByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Product>>): Array<Product> => r.body)
    );
  }

  /** Path part for operation `getProductsByCategory()` */
  static readonly GetProductsByCategoryPath = '/products/category/{category}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductsByCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductsByCategory$Response(params: GetProductsByCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Product>>> {
    return getProductsByCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductsByCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductsByCategory(params: GetProductsByCategory$Params, context?: HttpContext): Observable<Array<Product>> {
    return this.getProductsByCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Product>>): Array<Product> => r.body)
    );
  }

}
