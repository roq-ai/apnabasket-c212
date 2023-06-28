import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DeliveryPersonnelInterface {
  id?: string;
  name: string;
  store_manager_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface DeliveryPersonnelGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  store_manager_id?: string;
}
