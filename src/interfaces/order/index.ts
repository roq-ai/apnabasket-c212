import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  status: string;
  customer_service_representative_id?: string;
  store_manager_id?: string;
  created_at?: any;
  updated_at?: any;

  user_order_customer_service_representative_idTouser?: UserInterface;
  user_order_store_manager_idTouser?: UserInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  customer_service_representative_id?: string;
  store_manager_id?: string;
}
