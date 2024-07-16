/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
import { Log } from '../models/log';
import { Ticket } from '../models/ticket';
export interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  credentialsNonExpired?: boolean;
  email?: string;
  employedID?: string;
  enabled?: boolean;
  firstName?: string;
  id?: number;
  lastName?: string;
  logs?: Array<Log>;
  name?: string;
  password?: string;
  role?: 'SUPERADMIN' | 'PREPARER' | 'DISPATCHER' | 'DELIVERY_PERSON' | 'CRC';
  tickets?: Array<Ticket>;
  urlimage?: string;
  username?: string;
}
