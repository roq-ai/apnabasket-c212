import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  category: string;
  vendor_id?: string;
  created_at?: any;
  updated_at?: any;

  vendor?: VendorInterface;
  _count?: {};
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category?: string;
  vendor_id?: string;
}
