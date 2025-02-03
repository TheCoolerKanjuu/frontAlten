import {Product} from './product';

export interface ProductTableResponse {
  products: Product[];
  page: number;
  pageSize: number;
  total: number; // not implemented yet
}
