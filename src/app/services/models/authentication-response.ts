/* tslint:disable */
/* eslint-disable */
export interface AuthenticationResponse {
  fullname?: string;
  role?: 'SUPERADMIN' | 'PREPARER' | 'DISPATCHER' | 'DELIVERY_PERSON' | 'CRC';
  token?: string;
  user_id?: number;
}
