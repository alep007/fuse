import { Collection } from "fireorm";

@Collection("compositions")
export class Composition {
  id: string;
  name: string;
  description: string;
  category: string;
  unit_meausure: string;
  price: number;
  cost: number;
  utility: number;
  tax: number;
  items: ItemComposition[];
}

class ItemComposition {
  id: string;
  name: string;
  unit_meausure: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
}
