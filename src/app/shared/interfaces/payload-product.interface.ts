import { Product } from "./productInterface";

export type ProductPayload = Omit<Product, 'id'> 