/* tslint:disable */
/* eslint-disable */
import { Product } from '../models/product';
export interface Order {
  cardNbF?: number;
  contactName?: string;
  createdAt?: string;
  day_of_delivery?: string;
  id?: number;
  orderSource?: 'WEB' | 'APPLICATION';
  origine?: string;
  paimentMode?: 'COD' | 'CMI';
  products?: Array<Product>;
  salesOrderNum?: number;
  status?: 'delivered' | 'currently_being_prepared' | 'ready_order';
  total?: number;
  updatedAt?: string;
  ville?: string;
}
