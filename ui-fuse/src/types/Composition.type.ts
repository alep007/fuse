export type Composition = {
  id: string;
  name: string;
  item_id: string;
  category: string;
  unit_measure: string;
  price: number;
};

export type ActivityToAdd = Composition & {
  quantity: number;
  subtotal: number;
};
