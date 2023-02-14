import { atom } from "recoil";

export type BudgetAtomProps = {
  id: string;
  name: string;
  description: string;
  total: number;
  date: string;
  activities: Array<unknown>;
};

const budgetAtom = atom<Partial<BudgetAtomProps>>({
  key: "budgetAtom",
  default: {
    id: "",
    name: "",
    description: "",
    total: 0,
    activities: [],
    date: "",
  },
});

export default budgetAtom;
