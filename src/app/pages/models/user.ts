export interface User {
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    role:'SUPERADMIN' | 'PREPARER' | 'DISPATCHER' | 'DELIVERY_PERSON' | 'CRC',
    urlimage:string,
    password:string,
    employedID:string

}
export  enum RoleEnum {
    SUPERADMIN,
    PREPARER,
    DISPATCHER,
    DELIVERY_PERSON,
    CRC


}
