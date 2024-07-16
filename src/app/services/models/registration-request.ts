/* tslint:disable */
/* eslint-disable */
export interface RegistrationRequest {
  email: string;
  employedID: string;
  firstname: string;
  lastname: string;
  password: string;
  role: 'SUPERADMIN' | 'PREPARER' | 'DISPATCHER' | 'DELIVERY_PERSON' | 'CRC';
  urlimage: string;
}
