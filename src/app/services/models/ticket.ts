/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Ticket {
  description?: string;
  id?: number;
  status?: string;
  subject?: string;
  user?: User;
}
