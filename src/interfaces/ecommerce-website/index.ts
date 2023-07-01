import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EcommerceWebsiteInterface {
  id?: string;
  name: string;
  url: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface EcommerceWebsiteGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  url?: string;
  user_id?: string;
}
