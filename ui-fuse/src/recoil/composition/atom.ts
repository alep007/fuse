import { atom } from "recoil";

type ItemsProps = {
  item_id: string;
  subtotal: number;
  name: string;
  unit_price: number;
  unit_meausure: string;
  quantity: number;
};

export type CompositionAtomProps = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  unit_meausure: number;
  total: number;
  utility: number;
  cost: number;
  tax: number;
  items: ItemsProps[];
};

const compositionAtom = atom<Partial<CompositionAtomProps>>({
  key: "compositionAtom",
  default: {
    id: "",
    name: "",
    description: "",
    total: 0,
    items: [],
  },
});

export default compositionAtom;
