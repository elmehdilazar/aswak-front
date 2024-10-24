/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { WooProductRestControllerService } from './services/woo-product-rest-controller.service';
import { WooOrderRestControllerService } from './services/woo-order-rest-controller.service';
import { UserResetControllerService } from './services/user-reset-controller.service';
import { TicketRestControllerService } from './services/ticket-rest-controller.service';
import { ProductRestControllerService } from './services/product-rest-controller.service';
import { OrderResetControllerService } from './services/order-reset-controller.service';
import { InterFaceCarteRestControllerService } from './services/inter-face-carte-rest-controller.service';
import { LogRestControllerService } from './services/log-rest-controller.service';
import { AuthenticationService } from './services/authentication.service';
import { DashhboardContollerService } from './services/dashhboard-contoller.service';
import { WooCustomerRestControllerService } from './services/woo-customer-rest-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    WooProductRestControllerService,
    WooOrderRestControllerService,
    UserResetControllerService,
    TicketRestControllerService,
    ProductRestControllerService,
    OrderResetControllerService,
    InterFaceCarteRestControllerService,
    LogRestControllerService,
    AuthenticationService,
    DashhboardContollerService,
    WooCustomerRestControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
