/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Log {
  details?: string;
  id?: number;
  operation?: string;
  timestamp?: string;
  user?: User;
}
